import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1
        className="font-semibold uppercase tracking-tighter text-center"
        style={{
          fontSize: "clamp(3rem, 1.4155rem + 6.7606vw, 7.5rem)",
        }}
      >
        Page introuvable.
      </h1>
      <p className="text-2xl font-sans text-center">
        Pas grave, tu peux{" "}
        <Link href="/" className="underline font-semibold text-primary">
          revenir à l'accueil
        </Link>
        .{" "}
        <span lang="en" className="block text-muted-foreground text-lg mt-2">
          Not found.{" "}
          <Link href="/en" className="underline">
            Back home
          </Link>
          .
        </span>
      </p>
    </div>
  );
}
