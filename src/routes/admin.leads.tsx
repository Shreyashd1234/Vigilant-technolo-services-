import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/leads")({ component: () => <AdminPlaceholder title="Contact Leads" subtitle="Every site-survey request and enquiry captured from the website." /> });
