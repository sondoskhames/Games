import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import GameCard from "../components/GameCard";
import { categories, shopGames } from "../data/shopGames";

const PAGE_SIZE = 12;

export default function Shop() {
  const [category, setCategory] = useState("Show All");
  const [page, setPage] = useState(1);

  const filtered =
    category === "Show All"
      ? shopGames
      : shopGames.filter((g) => g.category === category);

  const pages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // رجوع للصفحة الأولى لما نغيّر الفلتر
 useEffect(() => {
  setPage(1);
}, [category]);

  const goTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const circle =
    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition";

  return (
    <>
      <PageHeader title="Our Shop" />

      <section className="wrap py-20">
        {/* الفلاتر */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-6 py-3 text-sm font-semibold uppercase transition ${
                category === c
                  ? "bg-coral text-white"
                  : "bg-[#eee] text-dark hover:bg-coral hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* الكروت */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>

        {/* الترقيم */}
        {pages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-3">
            <button
              disabled={page === 1}
              onClick={() => goTo(page - 1)}
              className={`${circle} bg-[#eee] text-dark disabled:opacity-40`}
            >
              ‹
            </button>

            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goTo(n)}
                className={`${circle} ${
                  page === n ? "bg-brand text-white" : "bg-[#eee] text-dark hover:bg-brand hover:text-white"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              disabled={page === pages}
              onClick={() => goTo(page + 1)}
              className={`${circle} bg-[#eee] text-dark disabled:opacity-40`}
            >
              ›
            </button>
          </div>
        )}
      </section>
    </>
  );
}