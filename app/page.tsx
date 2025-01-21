import Image from "next/image";
import Hero from "./components/landing-page/hero";

export default function Home() {
  return (
    <div className="px-12 xl:p-0 max-w-7xl mx-auto">
      <Hero />
      {/* <Header />
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </div>
  );
}
