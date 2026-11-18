import { useState } from "react";

export default function ProductTabs({ product }) {
  const [tab, setTab] = useState("description");

  const tabClass = (name) =>
    `text-xl font-bold transition ${
      tab === name ? "text-brand" : "text-dark hover:text-brand"
    }`;

  return (
    <section className="wrap">
      <hr className="mb-20 border-gray-200" />

      <div className="rounded-3xl bg-soft p-8 md:p-14">
        <div className="mb-8 flex items-center gap-6">
          <button className={tabClass("description")} onClick={() => setTab("description")}>
            Description
          </button>
          <span className="h-7 w-px bg-gray-300" />
          <button className={tabClass("reviews")} onClick={() => setTab("reviews")}>
            Reviews ({product.reviews.length})
          </button>
        </div>

        {tab === "description" ? (
          <div className="space-y-6 text-sm leading-8">
            {product.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <ul className="space-y-5">
            {product.reviews.map((r) => (
              <li key={r.name} className="rounded-2xl bg-white p-5">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="text-base">{r.name}</h4>
                  <span className="text-coral">
                    {"★".repeat(r.rating)}
                    <span className="text-gray-300">{"★".repeat(5 - r.rating)}</span>
                  </span>
                </div>
                <p className="text-sm">{r.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}