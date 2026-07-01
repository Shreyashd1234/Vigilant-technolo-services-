import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/reviews")({ component: () => <AdminPlaceholder title="Reviews" subtitle="Moderate customer reviews and testimonials." /> });
