import GameCard from "./GameCard";

const games = [
  { img: "/images/trending-01.jpg", old: 28, price: 20 },
  { img: "/images/trending-02.jpg", price: 44 },
  { img: "/images/trending-03.jpg", old: 64, price: 44 },
  { img: "/images/trending-04.jpg", price: 32 },
].map((g) => ({ ...g, category: "Action", title: "Assassin Creed" }));

export default function Trending() {
  return (
    <section id="trending" className="wrap py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="eyebrow">Trending</p>
          <h2 className="text-4xl">Trending Games</h2>
        </div>
        <a href="/shop" className="btn-coral">View All</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {games.map((g, i) => (
          <GameCard key={i} game={g} />
        ))}
      </div>
    </section>
  );
}