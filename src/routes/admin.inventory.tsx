import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/inventory")({ component: () => <AdminPlaceholder title="Inventory" subtitle="Track stock levels across warehouses and installation vans." /> });
