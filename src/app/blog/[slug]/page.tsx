import { Article } from "@/components/Article";
import { Container } from "@/components/Container";
import { articles } from "@/constants/articles";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const article = articles.find((p) => p.slug === slug) as Product | undefined;
  if (article) {
    return {
      title: article.title,
      description: article.description,
    };
  } else {
    return {
      title: "articles | Sandeep Shome",
      description:
        "Sandeep Shome is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default function SingleArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const article = articles.find((p) => p.slug === slug);

  if (!article) {
    redirect("/blog");
  }
  return (
    <Container>
      <Article article={article} />
    </Container>
  );
}
