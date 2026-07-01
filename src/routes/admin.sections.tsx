import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/sections")({ component: () => <AdminPlaceholder title="Homepage Sections" subtitle="Reorder, hide or edit each section of the storefront." /> });
