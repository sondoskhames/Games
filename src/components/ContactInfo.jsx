const details = [
  { label: "Address", value: "Sunny Isles Beach, FL 33160, United States" },
  { label: "Phone", value: "+123 456 7890" },
  { label: "Email", value: "lugx@contact.com" },
];

export default function ContactInfo() {
  return (
    <div className="rounded-3xl bg-soft p-10 md:mt-14 md:p-14">
      <p className="eyebrow">Contact Us</p>
      <h2 className="text-4xl">Say Hello!</h2>

      <p className="my-10 text-sm leading-8">
        Have a question about an order, a game or a partnership? Send us a
        message and our team will get back to you as soon as possible.
      </p>

      <div className="space-y-6">
        {details.map((d) => (
          <div key={d.label}>
            <h6 className="text-sm font-semibold text-dark">{d.label}</h6>
            <span className="text-gray-400">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}