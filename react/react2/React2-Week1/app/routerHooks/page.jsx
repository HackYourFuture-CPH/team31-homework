"use client";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function NasaPage() {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const queryExample = searchParams.get("example");

  const router = useRouter();

  const handlePush = () => {
    router.push("/nasa?example=pushed");
  };

  const handleReplace = () => {
    router.replace("/nasa?example=replaced");
  };

  const handleBack = () => {
    router.back("/nasa?example=back");
  };

  const handleForward = () => {
    router.forward("/nasa?example=forwarded");
  };
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Next.js Router Hooks Demo</h1>

      <section>
        <h2>usePathname</h2>
        <p>
          <strong>Purpose:</strong> Returns the current URL path.
          <br />
          <strong>Current Path:</strong> <code>{pathname}</code>
        </p>
      </section>

      <section>
        <h2>useSearchParams</h2>
        <p>
          <strong>Purpose:</strong> Access the query string parameters.
          <br />
          <strong>example param:</strong>{" "}
          <code>{queryExample || "Not set"}</code>
        </p>
      </section>

      <section>
        <h2>useRouter</h2>
        <p>
          <strong>Purpose:</strong> Programmatic navigation and router
          utilities.
          <br />
          <button onClick={handlePush}>router.push (add history)</button>{" "}
          <button onClick={handleReplace}>
            router.replace (replace history)
          </button>
        </p>
        <ul>
          <li>
            <strong>push:</strong> Navigate to a new route and add to browser
            history.
          </li>
          <li>
            <strong>replace:</strong> Navigate to a new route and replace the
            current history entry.
          </li>
        </ul>
        <p>
          <strong>Redirects:</strong> Useful for authentication, URL changes, or
          conditional navigation.
        </p>
        <p>
          <button onClick={handleBack}>router.back()</button>
          <button onClick={handleForward}>router.forward()</button>
        </p>
      </section>
    </div>
  );
}
