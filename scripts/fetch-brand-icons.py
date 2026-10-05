#!/usr/bin/env python3
"""Download brand SVGs and render 128px PNGs into public/brand/png/."""

from __future__ import annotations

import re
import subprocess
import tempfile
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PNG_DIR = ROOT / "public" / "brand" / "png"

DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons"

# slug -> (url, optional simple-icons fill for monochrome svgs)
SOURCES: dict[str, tuple[str, str | None]] = {
    "kubernetes": (f"{DEVICON}/kubernetes/kubernetes-plain.svg", None),
    "terraform": (f"{DEVICON}/terraform/terraform-plain.svg", None),
    "aws": (f"{DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg", None),
    "googlecloud": (f"{DEVICON}/googlecloud/googlecloud-original.svg", None),
    "digitalocean": (f"{DEVICON}/digitalocean/digitalocean-original.svg", None),
    "cloudflare": (f"{DEVICON}/cloudflare/cloudflare-original.svg", None),
    "grafana": (f"{DEVICON}/grafana/grafana-original.svg", None),
    "helm": (f"{DEVICON}/helm/helm-original.svg", None),
    "github": (
        "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg",
        "#ffffff",
    ),
    "argo": (f"{DEVICON}/argocd/argocd-original.svg", None),
    "vault": (f"{DEVICON}/vault/vault-original.svg", None),
    "traefikproxy": (
        "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/traefikproxy.svg",
        "#24A1C1",
    ),
    "trivy": (
        "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trivy.svg",
        "#1904DA",
    ),
    "falco": (
        "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/falco.svg",
        "#00AEC7",
    ),
}


def fetch(url: str) -> str:
    with urllib.request.urlopen(url, timeout=30) as resp:
        return resp.read().decode("utf-8")


def tint_svg(svg: str, fill: str) -> str:
    svg = re.sub(r'\sfill="[^"]*"', "", svg)
    return re.sub(r"<path ", f'<path fill="{fill}" ', svg)


def svg_to_png(svg_path: Path, png_path: Path, size: int = 128) -> None:
    proc = subprocess.run(
        [
            "pnpm",
            "dlx",
            "@resvg/resvg-js-cli@2.6.2-beta.1",
            "--fit-width",
            str(size),
            "--fit-height",
            str(size),
            str(svg_path),
            str(png_path),
        ],
        cwd=ROOT,
        capture_output=True,
        text=True,
    )
    if proc.returncode != 0:
        raise RuntimeError(f"resvg failed for {svg_path.name}: {proc.stderr}")


def main() -> None:
    PNG_DIR.mkdir(parents=True, exist_ok=True)
    expected = {f"{slug}.png" for slug in SOURCES}

    for stale in PNG_DIR.glob("*.png"):
        if stale.name not in expected:
            stale.unlink()

    for slug, (url, fill) in SOURCES.items():
        svg = fetch(url)
        if fill:
            svg = tint_svg(svg, fill)
        png_path = PNG_DIR / f"{slug}.png"
        with tempfile.NamedTemporaryFile(
            mode="w",
            suffix=".svg",
            encoding="utf-8",
            delete=False,
        ) as tmp:
            tmp.write(svg)
            svg_path = Path(tmp.name)
        try:
            svg_to_png(svg_path, png_path)
        finally:
            svg_path.unlink(missing_ok=True)
        print(f"ok {slug} -> {png_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
