import { useState } from "react";

const empty = { name: "", surname: "", email: "", subject: "", message: "" };

const input =
  "h-[50px] w-full rounded-full border border-gray-200 bg-soft px-5 text-sm outline-none transition focus:border-brand";

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // هنا تقدري تبعتي البيانات لأي API أو خدمة إيميل
    console.log(form);
    setSent(true);
    setForm(empty);
  };

  return (
    <div>
      {/* الخريطة */}
      <iframe
        title="Location map"
        src="https://www.google.com/maps?q=Sunny+Isles+Beach,+FL+33160&output=embed"
        loading="lazy"
        className="mb-10 h-[325px] w-full rounded-3xl border-0"
      />

      {/* النموذج */}
      <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Your Name..."
          required
          className={input}
        />
        <input
          name="surname"
          value={form.surname}
          onChange={onChange}
          placeholder="Your Surname..."
          required
          className={input}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Your E-mail..."
          required
          className={input}
        />
        <input
          name="subject"
          value={form.subject}
          onChange={onChange}
          placeholder="Subject..."
          className={input}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Your Message"
          required
          rows="5"
          className="w-full resize-none rounded-3xl border border-gray-200 bg-soft p-5 text-sm outline-none transition focus:border-brand sm:col-span-2"
        />

        <div className="sm:col-span-2">
          <button type="submit" className="btn-coral !px-7 !py-3.5">
            Send Message Now
          </button>
          {sent && (
            <p className="mt-4 text-sm text-brand">
              Thanks! Your message has been sent ✅
            </p>
          )}
        </div>
      </form>
    </div>
  );
}