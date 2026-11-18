import PageHeader from "../components/PageHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="wrap grid items-start gap-12 py-24 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  );
}