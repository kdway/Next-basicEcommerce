import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  let posts = await fetch("https://fakestoreapi.com/products");
  posts = await posts.json();
  const newsSitemaps = posts.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_DOMAIN_URL}${item.id.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}