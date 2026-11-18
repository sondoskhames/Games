import { useState } from "react";

export default function Cta() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
  };

  return (
    <section className="wrap pb-24 pt-10">
      <div className="flex flex-col gap-6 md:relative md:block md:h-[620px]">
        {/* الصورة في النص */}
        <img
          src="/images/hero.jpg"
          alt="Pre-order"
          className="h-[320px] w-full rounded-3xl object-cover md:absolute md:left-[26%] md:top-0 md:h-[440px] md:w-[38%]"
        />

        {/* الكارت الشمال */}
        <div className="relative rounded-3xl bg-soft p-10 md:absolute md:left-0 md:top-20 md:w-[40%] md:p-14">
          <p className="eyebrow">Our Shop</p>
          <h2 className="text-4xl leading-snug">
            Go Pre-Order Buy &amp; Get Best <span className="text-brand">Prices</span> For You!
          </h2>
          <p className="my-8 font-semibold leading-7">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
          </p>
          <a href="#" className="btn-coral">Shop Now</a>
        </div>

        {/* الكارت اليمين */}
        <div className="relative rounded-3xl bg-soft p-10 md:absolute md:right-0 md:top-[215px] md:w-[40%] md:p-14">
          <p className="eyebrow">Newsletter</p>
          <h2 className="text-4xl leading-snug">
            Get Up To $100 Off Just Buy <span className="text-brand">Subscribe</span> Newsletter!
          </h2>

          <form onSubmit={submit} className="mt-10 flex items-center rounded-full bg-white">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email..."
              className="min-w-0 flex-1 rounded-full bg-transparent px-6 py-3.5 text-sm outline-none"
            />
            <button className="btn-coral !py-3.5">Subscribe Now</button>
          </form>
          {sent && <p className="mt-3 text-sm text-brand">Thanks for subscribing ✅</p>}
        </div>
      </div>
    </section>
  );
}