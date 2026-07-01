import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/customers")({ component: () => <AdminPlaceholder title="Customers" subtitle="A 360° view of every home, business and enterprise account." /> });
