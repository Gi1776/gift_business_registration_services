import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Get In <span className="text-brand-blue">Touch</span>
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about company registration or our ebooks? We're here to help you succeed.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-xl font-bold text-slate-900">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-xl font-bold text-slate-900 break-all">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-xl font-bold text-slate-900">{BUSINESS_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Business Hours</p>
                    <p className="text-xl font-bold text-slate-900">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-brand-blue rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-4">Quick WhatsApp Chat</h3>
                <p className="opacity-80 mb-6">The fastest way to get your questions answered. Click the button below to start a chat with us.</p>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  <MessageCircle size={20} />
                  Contact Us on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="072 000 0000"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Interested In</label>
                  <select className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all appearance-none bg-white">
                    <option>Pty Ltd Registration</option>
                    <option>Name Reservation</option>
                    <option>Business Profile</option>
                    <option>CIPC Services</option>
                    <option>DIY Recipe Ebooks</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full bg-brand-blue text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
