const features = [
  {
    title: "Free Storage",
    icon: (
      <>
        <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1 .5 9" />
        <path d="M12 11v8m0 0-3-3m3 3 3-3" />
      </>
    ),
  },
  {
    title: "User More",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.2 18.5a7 7 0 0 1 11.6 0" />
      </>
    ),
  },
  {
    title: "Reply Ready",
    icon: (
      <>
        <path d="M4 12a8 8 0 1 0 3-6.2" />
        <path d="M4 4v4h4" />
        <path d="M10 9l6 3-6 3z" />
      </>
    ),
  },
  {
    title: "Easy Layout",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 14h6" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative z-10 -mt-28">
      <div className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex h-[206px] flex-col items-center justify-center rounded-3xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-5 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-brand text-white">
              <svg
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {f.icon}
              </svg>
            </div>
            <h4 className="text-base font-bold uppercase text-dark">{f.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}