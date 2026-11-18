const games = [1, 2, 3, 4, 5, 6].map((n) => ({
  img: `/images/top-game-0${n}.jpg`,
  category: "Adventure",
  title: "Assassin Creed",
}));

export default function MostPlayed() {
  return (
    <section className="rounded-t-[80px] bg-soft py-24 md:rounded-t-[150px]">
      <div className="wrap">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="eyebrow">Top Games</p>
            <h2 className="text-4xl">Most Played</h2>
          </div>
          <a href="#" className="btn-coral">View All</a>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {games.map((g, i) => (
            <article key={i} className="relative rounded-3xl bg-white pb-12 text-center">
              <img src={g.img} alt={g.title} className="aspect-square w-full rounded-3xl object-cover" />
              <span className="mt-4 block text-sm text-gray-500">{g.category}</span>
              <h4 className="text-[15px] font-bold text-dark">{g.title}</h4>
              <a
                href="#"
                className="btn-coral absolute -bottom-4 left-1/2 -translate-x-1/2 !px-5 !py-2.5"
              >
                Explore
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}