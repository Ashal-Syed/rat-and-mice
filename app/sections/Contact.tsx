"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); // simulate
    setSent(true);
    setLoading(false);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-16 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-bold red-gradient-text">Contact Us</h2>
          <p className="description-text">
            Fill out the form and our team will get back to you shortly.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-white shadow-lg p-8 border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="John Smith"
                className="w-full contact-field"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                placeholder="you@example.com"
                className="w-full contact-field"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange("phone")}
                placeholder="+61 4xx xxx xxx"
                className="w-full contact-field"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Describe your issue or request"
                className="w-full contact-field"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="red-gradient text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && <span className="text-sm text-green-600">Message sent successfully!</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
