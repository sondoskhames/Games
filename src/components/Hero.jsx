export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-b-[80px] bg-brand pb-40 pt-40 md:rounded-b-[150px] md:pt-48"
    >
      {/* الدوائر الفاتحة في الخلفية */}
      <div className="absolute -right-40 -top-20 h-[140%] w-[70%] rounded-full bg-white/5" />
      <div className="absolute -right-20 -top-20 h-[140%] w-[35%] rounded-full bg-white/5" />

      <div className="wrap relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <h6 className="mb-3 text-xl font-semibold uppercase text-white">
            Welcome to Lugx
          </h6>

          <h1 className="text-5xl font-bold uppercase leading-tight text-white md:text-6xl">
            Best Gaming Site{" "}
            <span className="relative inline-block">
              Ever!
              <svg
                className="absolute -bottom-3 left-0 w-[170%]"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8 C 50 2, 110 12, 198 4"
                  stroke="#ee626b"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mb-12 mt-12 max-w-[540px] leading-8 text-white">
            LUGX Gaming is a free Bootstrap 5 HTML CSS website template for your
            gaming websites. You can download and use this layout for commercial
            purposes. Please tell your friends about TemplateMo.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex max-w-[450px] items-center rounded-full bg-white p-0"
          >
            <input
              type="text"
              placeholder="Type Something"
              className="min-w-0 flex-1 rounded-full bg-transparent px-6 py-3.5 text-sm outline-none"
            />
            <button className="btn-coral !py-3.5">Search Now</button>
          </form>
        </div>

        {/* كارت اللعبة */}
        <div className="relative mx-auto w-full max-w-[356px]">
          <img
            src="/images/hero.jpg"
            alt="Featured game"
            className="h-[420px] w-full rounded-3xl object-cover"
          />
          <span className="absolute right-3 top-4 rounded-full bg-brand px-4 py-1.5 text-lg font-bold text-white">
            $22
          </span>
          <span className="absolute -bottom-10 -left-6 flex h-24 w-24 items-center justify-center rounded-full bg-coral text-2xl font-bold text-white">
            -40%
          </span>
        </div>
      </div>
    </section>
  );
}