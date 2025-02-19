import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ electionSlug: string }>;
}): Promise<Metadata> {
  const slug = await params;
  const electionSlug = slug.electionSlug;
  return {
    title: `Election: ${electionSlug}`,
    description: `Details for election ${electionSlug}`,
    openGraph: {
      title: `${electionSlug} Election Detail`,
      description: `Details for election ${electionSlug}`,
    },
  };
}

export default function ElectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start relative h-[calc(100lvh-96px)] md:h-[calc(100lvh-64px)]">
      {children}
    </div>
  );
}
