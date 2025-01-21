import Image from "next/image";
import Hero from "./components/landing-page/hero";
import Header from "./components/landing-page/header";
import VideoExplanation from "./components/landing-page/video-explanation";
import Pricing from "./components/landing-page/pricing";

export default function Home() {
  return (
    <div className="px-12 xl:p-0 flex flex-col gap-3 max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      {/*  <FAQ /> */}
    </div>
  );
}
