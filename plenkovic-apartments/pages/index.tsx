import HomePageComponent from "@c/pages/Home";
import { IAsset } from "@m/common";
import { ILandingPage } from "@m/landingPage";
import { getLandingPage } from "@u/contentful";
import { RichTextContent } from "contentful";

export interface HomePageProps {
  headingSlides: IAsset[];
  introText: RichTextContent;
}
export default function HomePage(props: HomePageProps) {
  return <HomePageComponent {...props} />;
}

export async function getStaticProps(): Promise<{ props: HomePageProps }> {
  const data: ILandingPage = await getLandingPage();

  return {
    props: {
      headingSlides: data.landingPage.headingSlidesCollection.items,
      introText: data.landingPage.introText.json,
    },
  };
}
