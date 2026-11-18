export default function GameCard({ game }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-[#eee]">
      <div className="relative">
        <img
          src={game.img}
          alt={game.title}
          className="h-[190px] w-full rounded-3xl object-cover"
        />
        <div className="absolute right-3 top-3 min-w-[64px] rounded-xl bg-brand px-3 py-1.5 text-center text-white">
          {game.old && (
            <del className="block text-xs leading-none opacity-90">${game.old}</del>
          )}
          <span className="text-lg font-bold leading-tight">${game.price}</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <span className="block text-sm text-gray-500">{game.category}</span>
          <h4 className="text-base font-bold text-dark">{game.title}</h4>
        </div>
        <button
          aria-label="Add to cart"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-white transition hover:bg-dark"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 8h12l1 12H5L6 8zm3-1a3 3 0 0 1 6 0h-2a1 1 0 0 0-2 0H9z" />
          </svg>
        </button>
      </div>
    </article>
  );
}