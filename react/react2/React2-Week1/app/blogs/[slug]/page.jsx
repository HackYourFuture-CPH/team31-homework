import { notFound } from "next/navigation";
export default function BlogPost({ params }) {
  const { slug } = params;
  if (!slug) notFound();
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{title}</h1>
      <p>
        This is a dynamic blog post page for: <strong>{slug}</strong>
      </p>
    </main>
  );
}
