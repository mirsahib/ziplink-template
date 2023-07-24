import Analytics from "@/components/Analytics";
import Banner from "@/components/Banner";
import Content from "@/components/Content";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main >
      <Hero />
      <Content />
      <Analytics />
      <Pricing />
      <Banner />
    </main>
  );
}
