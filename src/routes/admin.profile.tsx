import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/profile")({ component: () => <AdminPlaceholder title="Profile" subtitle="Manage your account details, avatar and notification preferences." /> });
