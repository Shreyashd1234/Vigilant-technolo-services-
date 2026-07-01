import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/settings")({ component: () => <AdminPlaceholder title="Website Settings" subtitle="Brand, SEO, tax, shipping and integration configuration." /> });
