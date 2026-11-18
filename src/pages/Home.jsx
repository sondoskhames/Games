import Hero from "../components/Hero";
import Features from "../components/Features";
import Trending from "../components/Trending";
import MostPlayed from "../components/MostPlayed";
import Categories from "../components/Categories";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Trending />
      <MostPlayed />
      <Categories />
      <Cta />
    </>
  );
}