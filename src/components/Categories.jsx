const cats = [1, 2, 3, 4, 5].map((n) => ({
  img: `/images/categories-0${n}.jpg`,
  name: "Action",
}));

export default function Categories() {
  return (
    <section className="wrap py-24">
      <div className="mb-14 text-center">
        <p className="eyebrow">Categories</p>
        <h2 className="text-4xl">Top Categories</h2>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {cats.map((c, i) => (
          <a key={i} href="#" className="group block rounded-3xl bg-brand pt-3.5 text-center">
            <h4 className="text-base font-semibold text-white">{c.name}</h4>
            <img
              src={c.img}
              alt={c.name}
              className="mt-3 h-[190px] w-full rounded-3xl object-cover transition group-hover:scale-[1.03]"
            />
          </a>
        ))}
      </div>
    </section>
  );
}