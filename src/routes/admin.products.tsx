import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/products")({ component: () => <AdminPlaceholder title="Products" subtitle="Manage your CCTV, IP camera, biometric, access-control and networking catalog." /> });
