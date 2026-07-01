import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/admin/AdminShell";
export const Route = createFileRoute("/admin/media")({ component: () => <AdminPlaceholder title="Media Library" subtitle="Upload, tag and reuse product photography and marketing imagery." /> });
