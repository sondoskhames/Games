import { useState } from "react";

function Row({ label, items }) {
  return (
    <>
      <span className="text-gray-400">{label}</span>
      <span className="text-brand">{Array.isArray(items) ? items.join(", ") : items}</span>
    </>
  );
}

export default function ProductInfo({ product }) {
  const [qty, setQty] = useState(1);

  return (
    <section className="wrap grid items-start gap-12 py-20 md:grid-cols-2">
      <img
        src={product.img}
        alt={product.title}
        className="w-full max-w-[470px] rounded-3xl object-cover"
      />

      <div>
        <h2 className="text-3xl">{product.title}</h2>

        <div className="mt-6 flex items-baseline gap-3">
          <del className="text-lg text-gray-400">${product.oldPrice}</del>
          <span className="text-3xl font-bold text-brand">${product.price}</span>
        </div>

        <p className="mb-10 mt-12 max-w-[520px] text-sm leading-8">{product.summary}</p>

        <div className="mb-12 flex items-center gap-4">
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
            className="h-[50px] w-20 rounded-full border border-gray-200 bg-soft text-center text-sm text-brand outline-none"
          />
          <button className="btn-coral flex items-center gap-2 !px-7 !py-3.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 8h12l1 12H5L6 8zm3-1a3 3 0 0 1 6 0h-2a1 1 0 0 0-2 0H9z" />
            </svg>
            Add to Cart
          </button>
        </div>

        <div className="grid grid-cols-[110px_1fr] gap-y-4 text-sm">
          <Row label="Game ID:" items={product.gameId} />
          <Row label="Genre:" items={product.genre} />
          <Row label="Multi-tags:" items={product.tags} />
        </div>
      </div>
    </section>
  );
}