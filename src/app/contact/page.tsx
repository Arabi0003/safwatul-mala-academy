"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { academy } from "@/config/academy";

export default function ContactPage() {
  return (
    <>
      <PageHero label="Get in Touch" title="Contact & Support" subtitle="Questions about admissions, programmes, or the academy? Reach out." />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href={`mailto:${academy.emails[0]}`} className="group p-8 rounded-2xl border border-platinum/60 hover:border-gold-light/40 hover:shadow-lg hover:shadow-gold/5 transition-all text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <Mail className="w-6 h-6 text-gold group-hover:text-brown-deep transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-brown-deep mb-2">Email</h3>
              <p className="text-sm text-gold-dark break-all">{academy.emails[0]}</p>
              <p className="text-sm text-brown-light mt-1 break-all">{academy.emails[1]}</p>
            </a>
            <a href={academy.phone.href} className="group p-8 rounded-2xl border border-platinum/60 hover:border-gold-light/40 hover:shadow-lg hover:shadow-gold/5 transition-all text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <Phone className="w-6 h-6 text-gold group-hover:text-brown-deep transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-brown-deep mb-2">Phone</h3>
              <p className="text-sm text-gold-dark">{academy.phone.formatted}</p>
              <p className="text-xs text-brown-muted mt-1">WhatsApp available</p>
            </a>
            <div className="p-8 rounded-2xl border border-platinum/60 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-brown-deep mb-2">Location</h3>
              <p className="text-sm text-brown-light">{academy.location}</p>
              <p className="text-xs text-brown-muted mt-1">Full address to be confirmed</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-brown-deep text-center mb-8">Send a Message</h2>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you. Please email us directly for now — the form backend is not yet connected."); }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown mb-1.5">Full Name</label>
                <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-platinum bg-ivory/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-brown-deep" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown mb-1.5">Email</label>
                <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-platinum bg-ivory/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-brown-deep" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brown mb-1.5">Subject</label>
                <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-platinum bg-ivory/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-brown-deep">
                  <option>Admissions Enquiry</option>
                  <option>Programme Information</option>
                  <option>Portal Support</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown mb-1.5">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-platinum bg-ivory/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-brown-deep resize-y" placeholder="How can we help?" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all shadow-md shadow-gold/20">
                Send Message
              </button>
              <p className="text-xs text-center text-brown-muted">
                Form backend not connected yet. For a guaranteed response, email us directly at {academy.emails[0]}.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
