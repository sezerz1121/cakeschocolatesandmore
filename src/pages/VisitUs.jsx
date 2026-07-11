import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/ui/Button.jsx";

const cakeTypes = ["Wedding cake", "Birthday cake", "Graduation cake", "Anniversary cake", "Corporate event cake", "Party cake", "Custom cupcakes", "Not sure yet"];
const flavourOptions = ["Vanilla", "Chocolate", "Red velvet", "Strawberry", "Lemon", "Coconut", "Cookies & cream", "Something else / not sure yet"];
const budgetOptions = ["Under $150", "$150–$300", "$300–$500", "$500–$800", "$800+", "Not sure yet"];

export default function VisitUs() {
  const pageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", date: "", servings: "", occasion: "", cakeType: "", flavour: "", budget: "", theme: "", allergies: "", notes: "" });
  const update = (name) => (event) => setForm((current) => ({ ...current, [name]: event.target.value }));

  useGSAP(() => {
    gsap.from(".enquiry-reveal", { y: 28, opacity: 0, duration: .6, stagger: .09, ease: "power3.out" });
  }, { scope: pageRef });

  const submit = (event) => { event.preventDefault(); setSubmitted(true); };
  if (submitted) return <section className="enquiry-success" ref={pageRef}><p className="eyebrow">Enquiry received</p><h1>WE CAN&apos;T WAIT TO<br /><em>CREATE WITH YOU.</em></h1><p>Thank you, {form.firstName || "friend"}. Your request is in our inbox. We&apos;ll be in touch shortly to confirm availability and discuss the details.</p><Button to="/">Back to home <span>→</span></Button></section>;

  return <div ref={pageRef} className="enquiry-page">
    <header className="enquiry-hero">
      <p className="eyebrow enquiry-reveal">Let&apos;s plan something beautiful</p>
      <h1 className="enquiry-reveal">TELL US ABOUT<br /><em>YOUR CELEBRATION.</em></h1>
      <p className="enquiry-reveal">Share the essentials below and our Austin cake artists will get back to you with availability and a custom quote.</p>
      <span className="enquiry-hero__star">✦</span><span className="enquiry-hero__dot" />
    </header>
    <form className="enquiry-form" onSubmit={submit}>
      <div className="enquiry-main">
        <section className="enquiry-card enquiry-reveal"><p className="eyebrow">01 · Your details</p><h2>HOW CAN WE REACH YOU?</h2><div className="field-grid">
          <Field label="First name" required><input value={form.firstName} onChange={update("firstName")} placeholder="First name" required /></Field>
          <Field label="Last name" required><input value={form.lastName} onChange={update("lastName")} placeholder="Last name" required /></Field>
          <Field label="Email address" wide><input type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" required /></Field>
          <Field label="Phone number" wide><input type="tel" value={form.phone} onChange={update("phone")} placeholder="(512) 555-0100" required /></Field>
        </div></section>
        <section className="enquiry-card enquiry-reveal"><p className="eyebrow">02 · Event details</p><h2>WHAT ARE WE CELEBRATING?</h2><div className="field-grid">
          <Field label="Event date"><input type="date" value={form.date} onChange={update("date")} required /></Field>
          <Field label="Servings / guests"><input type="number" min="1" value={form.servings} onChange={update("servings")} placeholder="e.g. 40" /></Field>
          <Field label="Occasion" wide><input value={form.occasion} onChange={update("occasion")} placeholder="e.g. 40th birthday, garden wedding" required /></Field>
          <Field label="Cake type"><Select value={form.cakeType} onChange={update("cakeType")} options={cakeTypes} label="Choose a cake type" /></Field>
          <Field label="Favourite flavour"><Select value={form.flavour} onChange={update("flavour")} options={flavourOptions} label="Choose a flavour" /></Field>
          <Field label="Budget range" wide><Select value={form.budget} onChange={update("budget")} options={budgetOptions} label="Choose a budget range" /></Field>
        </div></section>
        <section className="enquiry-card enquiry-reveal"><p className="eyebrow">03 · The creative details</p><h2>WHAT DOES YOUR DREAM CAKE LOOK LIKE?</h2><div className="field-grid">
          <Field label="Theme, colours or design ideas" wide><textarea rows="4" value={form.theme} onChange={update("theme")} placeholder="Tell us about your inspiration, colour palette, theme or must-have details." /></Field>
          <Field label="Allergies or dietary needs" wide><input value={form.allergies} onChange={update("allergies")} placeholder="Please let us know about any allergies or dietary requirements." /></Field>
          <Field label="Inspiration image" wide><label className="upload-field"><input type="file" accept="image/*" onChange={(event) => setFileName(event.target.files?.[0]?.name || "")} /><span>Upload an inspiration image</span><small>{fileName || "JPG, PNG or PDF"}</small></label></Field>
          <Field label="Anything else we should know?" wide><textarea rows="4" value={form.notes} onChange={update("notes")} placeholder="Add any helpful notes about your order." /></Field>
        </div></section>
      </div>
      <aside className="enquiry-sidebar enquiry-reveal"><div className="enquiry-aside-card"><span>✦</span><h2>YOUR CAKE STARTS HERE.</h2><p>Every design is created from scratch and tailored to your occasion, vision and guest count.</p></div><div className="enquiry-notice"><h3>A quick note</h3><p>Submitting this form is an enquiry, not a confirmed booking. We&apos;ll reply as soon as possible with availability and next steps.</p></div><Button type="submit" className="enquiry-submit">Send my enquiry <span>→</span></Button><a className="enquiry-phone" href="tel:+15123350500">Prefer to chat? Call (512) 335-0500</a></aside>
      <div className="enquiry-mobile-submit"><Button type="submit">Send my enquiry <span>→</span></Button></div>
    </form>
  </div>;
}
function Field({ label, wide = false, children }) { return <div className={`enquiry-field ${wide ? "enquiry-field--wide" : ""}`}><span>{label}</span>{children}</div>; }
function Select({ value, onChange, options, label }) { return <select value={value} onChange={onChange} required><option value="">{label}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>; }
