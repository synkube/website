import type { Metadata } from "next";
import { AgentsPageView } from "@/components/agents/agents-page-view";
import { agentsPage } from "@/lib/content";

export const metadata: Metadata = {
  title: agentsPage.meta.title,
  description: agentsPage.meta.description,
};

export default function AgentsPage() {
  return <AgentsPageView content={agentsPage} />;
}
