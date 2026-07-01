import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/coupons")({ component: () => <AdminPlaceholder title="Coupons" subtitle="Create discount codes, seasonal promos and B2B pricing." /> });
