import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pages } from "../../lib/site-pages";

type PageProps = { params: Promise<{ path?: string[] }> };

function getPage(parts: string[]) {
  const path = parts.join("/");
  const key = !path
    ? "index.html"
    : path.endsWith(".html")
      ? path
      : `${path}/index.html`;
  if (!Object.hasOwn(pages, key)) notFound();
  return pages[key];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return { title: getPage((await params).path ?? []).title };
}

export default async function Page({ params }: PageProps) {
  const page = getPage((await params).path ?? []);
  return (
    <>
      <link
        rel="stylesheet"
        href={`/original-assets/${page.cssKey ? page.cssKey + "/" : ""}All.Pages.css`}
      />
      {page.content}
    </>
  );
}
