import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/orders")({ component: () => <AdminPlaceholder title="Orders" subtitle="Fulfil, invoice, refund and dispatch every customer order." /> });
