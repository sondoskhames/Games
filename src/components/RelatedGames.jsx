import { Link } from "react-router-dom";

const related = [1, 2, 3, 4, 5].map((n) => ({
  img: `/images/categories-0${n}.jpg`,
  name: "Action",
}));

export default function RelatedGames() {
  return (
    <section className="wrap py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="eyebrow">Action</p>
          <h2 className="text-4xl">Related Games</h2>
        </div>
        <Link to="/shop" className="btn-coral">View All</Link>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {related.map((c, i) => (
          <Link key={i} to="/product-details" className="group block rounded-3xl bg-brand pt-3.5 text-center">
            <h4 className="text-base font-semibold text-white">{c.name}</h4>
            <img
              src={c.img}
              alt={c.name}
              className="mt-3 h-[190px] w-full rounded-3xl object-cover transition group-hover:scale-[1.03]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}