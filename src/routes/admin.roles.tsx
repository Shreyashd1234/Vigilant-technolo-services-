import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/roles")({ component: () => <AdminPlaceholder title="User Roles" subtitle="Grant admin, editor and technician access to your team." /> });
