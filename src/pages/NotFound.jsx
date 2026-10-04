import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-navy-950 px-6 pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        This address doesn't exist
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-white/70">
        The page you're looking for may have been moved, sold — or never built at all.
      </p>
      <Button to="/" variant="gold" size="lg" className="mt-8">
        Back to Home <span aria-hidden="true">→</span>
      </Button>
    </section>
  );
}
