import { Link } from "react-router-dom";

export default function PageHeader({ title, crumbs = [] }) {
  const trail = crumbs.length ? crumbs : [{ label: title }];

  return (
    <section className="relative overflow-hidden rounded-b-[80px] bg-brand pb-28 pt-44 text-center md:rounded-b-[150px] md:pb-32 md:pt-52">
      <div className="absolute -right-40 -top-20 h-[140%] w-[60%] rounded-full bg-white/5" />
      <div className="absolute -right-20 -top-20 h-[140%] w-[30%] rounded-full bg-white/5" />

      <div className="wrap relative">
        <h1 className="text-4xl font-bold uppercase text-white md:text-5xl">{title}</h1>
        <p className="mt-5 text-white">
          <Link to="/" className="hover:underline">Home</Link>
          {trail.map((c) => (
            <span key={c.label}>
              {" "}&gt;{" "}
              {c.to ? (
                <Link to={c.to} className="hover:underline">{c.label}</Link>
              ) : (
                c.label
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}