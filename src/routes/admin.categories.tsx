import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/categories")({ component: () => <AdminPlaceholder title="Categories" subtitle="Organize the catalog into browsable collections." /> });
