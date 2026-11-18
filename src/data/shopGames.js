const imgs = ["trending-01", "trending-02", "trending-03", "trending-04"];
const cats = ["Adventure", "Strategy", "Racing"];

export const categories = ["Show All", ...cats];

export const shopGames = Array.from({ length: 36 }, (_, i) => {
  const old = 26 + ((i * 5) % 24);
  return {
    id: i + 1,
    img: `/images/${imgs[i % 4]}.jpg`,
    title: "Assassin Creed",
    category: cats[i % 3],
    old: i % 5 === 1 ? undefined : old,
    price: old - (4 + (i % 3) * 2),
  };
});