import Link from "next/link";

export default function BlogsPage() {
  const posts = ["my-first-post", "nasa-updates", "nextjs-routing"];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Blog List</h1>
      <ul>
        {posts.map((slug) => (
          <li key={slug}>
            <Link href={`/blogs/${slug}`}>{slug.replace(/-/g, " ")}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
