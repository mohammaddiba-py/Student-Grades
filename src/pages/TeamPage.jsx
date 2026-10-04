import PageHero from "../components/PageHero.jsx";
import Team from "../components/Team.jsx";
import CTA from "../components/CTA.jsx";

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Meet the Team"
        description="A small, senior team — every client works directly with an experienced advisor."
      />
      <Team />
      <CTA />
    </>
  );
}
