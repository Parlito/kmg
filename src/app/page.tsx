import { SectionHero } from "@/components/SectionHero";
import { SectionImgs } from "@/components/SectionImgs";
import { SectionSomos } from "@/components/SectionSomos";

import Image from "next/image";

export default function Home() {
  return (
      <>
      <SectionHero/>
      <SectionSomos/>
      <SectionImgs/>
      </>
  );
}
