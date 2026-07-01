import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/hero")({ component: () => <AdminPlaceholder title="Hero Manager" subtitle="Swap the homepage hero image, headline and calls-to-action." /> });
