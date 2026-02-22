import React from 'react';
import { motion } from 'motion/react';
import { Building2, Fingerprint, FileText, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';

export default function Services() {
  const iconMap: Record<string, any> = {
    'Building2': Building2,
    'Fingerprint': Fingerprint,
    'FileText': FileText,
    'ShieldCheck': ShieldCheck,
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional <span className="text-brand-gold">CIPC Services</span></h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Everything you need to register and maintain your business compliance in South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="bg-slate-50 px-4 py-2 rounded-lg">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Price</p>
                        <p className="text-xl font-bold text-brand-blue">{service.price}</p>
                      </div>
                      <div className="bg-slate-50 px-4 py-2 rounded-lg">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Timeline</p>
                        <p className="text-xl font-bold text-slate-900">1-3 Days</p>
                      </div>
                    </div>
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I'm interested in ${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20"
                    >
                      Register Now
                      <ArrowRight size={20} />
                    </a>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <img 
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1450101499163-c8848c66ca85' : index === 1 ? '1554224155-6726b3ff858f' : index === 2 ? '1586281380349-632531db7ed4' : '1507679799987-c73779587ccf'}?auto=format&fit=crop&q=80&w=800`} 
                      alt={service.title} 
                      className="rounded-2xl shadow-lg w-full h-80 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ / Simple Steps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">How it works</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Simple 3-Step Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Contact us via WhatsApp or Email to discuss your business needs." },
              { step: "02", title: "Documentation", desc: "Provide the necessary ID documents and business details." },
              { step: "03", title: "Registration", desc: "We process everything with CIPC and deliver your certificates." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-6 text-6xl font-black text-slate-50">{item.step}</span>
                <h4 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h4>
                <p className="text-slate-600 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
