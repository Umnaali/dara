import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Endpoint: NEEDS CONFIRMATION — no submission endpoint in sources
    console.log('Form submitted:', form);
  };

  const inputBaseClasses =
    'w-full bg-transparent border-0 border-b border-[#1A1A1A]/25 py-4 text-[#1A1A1A] text-base placeholder:text-[#999] focus:outline-none focus:border-[#1A1A1A] transition-colors duration-300';

  return (
    <section id="contact" className="w-full bg-[#EFEDE3] py-24 px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-16 items-start">

        {/* Left: Heading */}
        {/* CONFIRMED heading: "Contact" — DARA_DESIGN_SPEC.md §12 */}
        <h2 className="font-['Syne'] text-[clamp(40px,6vw,80px)] font-bold tracking-tight text-[#1A1A1A] leading-[1.0]">
          Contact
        </h2>

        {/* Right: Form */}
        {/* Form fields CONFIRMED: Name, Email, Phone, Message — DARA_DESIGN_SPEC.md §12 */}
        {/* Submit CTA CONFIRMED: "Submit" — DARA_DESIGN_SPEC.md §2.3 */}
        {/* Validation, required fields, endpoint: NEEDS CONFIRMATION */}
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <div>
            <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-[#666] mb-1">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputBaseClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest text-[#666] mb-1">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputBaseClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-xs uppercase tracking-widest text-[#666] mb-1">
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+971 ..."
              className={inputBaseClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-[#666] mb-1">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className={`${inputBaseClasses} resize-none`}
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" variant="solid-black" className="px-10 py-4 text-sm font-semibold">
              Submit
            </Button>
          </div>
        </form>

      </div>
    </section>
  );
};
