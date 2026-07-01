import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/blog")({ component: () => <AdminPlaceholder title="Blog" subtitle="Draft, schedule and publish articles for the Vigilant journal." /> });
