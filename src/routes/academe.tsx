import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { AcademeSection } from "@/components/sections/AcademeSection";

export const Route = createFileRoute("/academe")({
  head: () => ({
    meta: [
      { title: "Gender in the Philippine Academe" },
      { name: "description", content: "Gender policies, diversity, institutional barriers, and recommendations in Philippine education." },
      { property: "og:title", content: "Gender in the Philippine Academe" },
      { property: "og:description", content: "Schools as battlegrounds and bridges — CHED, DepEd, SOGIE advocacy, and safe campuses." },
    ],
  }),
  component: AcademePage,
});

function AcademePage() {
  return (
    <PageShell
      eyebrow="Academe"
      icon={GraduationCap}
      title={<>Where the next generation <span className="gradient-text">learns who they can be</span></>}
      description="Classrooms, dorms, and student councils are quietly rewriting the rules — from inclusive policies to the everyday courage of teachers and learners."
    >
      <AcademeSection />
    </PageShell>
  );
}
