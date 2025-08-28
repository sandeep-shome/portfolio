import { Certificate } from "@/components/Certificate";
import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { certificates } from "@/constants/certifications";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const certificate = certificates.find((p) => p.slug === slug) as
    | Product
    | undefined;
  if (certificate) {
    return {
      title: certificate.title,
      description: certificate.description,
    };
  } else {
    return {
      title: "certificates | Sandeep Shome",
      description:
        "Sandeep Shome is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
    };
  }
}

export default function SingleCertificatePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const certificate = certificates.find((p) => p.slug === slug);

  if (!certificate) {
    redirect("/certifications");
  }
  return (
    <Container>
      <Certificate certificate={certificate} />
    </Container>
  );
}
