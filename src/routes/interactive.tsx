import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { InteractiveSection } from "@/components/sections/InteractiveSection";

export const Route = createFileRoute("/interactive")({
  head: () => ({
    meta: [
      { title: "Interactive Learning Center — Gender & Society PH" },
      { name: "description", content: "Swipe cards, fun fact generator, and knowledge quiz on Philippine gender topics." },
      { property: "og:title", content: "Interactive Learning Center" },
      { property: "og:description", content: "Gamified learning — swipe, spark, and score your way through Philippine gender knowledge." },
    ],
  }),
  component: InteractivePage,
});

function InteractivePage() {
  return (
    <PageShell
      eyebrow="Interactive Center"
      icon={Globe}
      title={<>Put what you've learned <span className="gradient-text">to the test</span></>}
      description="A hands-on corner of the site where reading turns into doing — flip through cards, surprise yourself with trivia, and challenge what you think you know."
    >
      <InteractiveSection />
    </PageShell>
  );
}
