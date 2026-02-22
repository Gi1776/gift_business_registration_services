import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2, ShieldCheck, FileText, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, EBOOKS, BUSINESS_INFO } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Modern Office" 
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-6">
                <ShieldCheck size={16} />
                <span>Trusted Business Partner in SA</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Register Your <span className="text-brand-blue">Dream Business</span> Today.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Professional, fast, and reliable company registration services. We handle the paperwork so you can focus on building your empire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-blue/90 transition-all shadow-xl shadow-brand-blue/20"
                >
                  Register Your Company Today
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/shop" 
                  className="bg-white text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                >
                  Explore Ebooks
                  <ShoppingBag size={20} />
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i}`} 
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="User"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  Joined by <span className="text-slate-900 font-bold">500+</span> entrepreneurs this month
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                  alt="Business Success" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">CIPC Verified</p>
                  <p className="text-lg font-bold text-slate-900">100% Success Rate</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-brand-blue p-6 rounded-2xl shadow-xl z-20 text-white border border-brand-blue/20">
                <p className="text-3xl font-bold">24h</p>
                <p className="text-xs font-medium opacity-80">Average Turnaround</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">What We Offer</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Our Core Services</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide a comprehensive suite of business registration and compliance services tailored for the South African market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-xl transition-all group bg-slate-50/50"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {service.icon === 'Building2' && <Building2 size={28} />}
                  {service.icon === 'Fingerprint' && <ShieldCheck size={28} />}
                  {service.icon === 'FileText' && <FileText size={28} />}
                  {service.icon === 'ShieldCheck' && <ShieldCheck size={28} />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-blue font-bold">{service.price}</span>
                  <Link to="/services" className="text-slate-400 group-hover:text-brand-gold transition-colors">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ebook Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">DIY Learning</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Start Your Own Sweet Business</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Beyond registration, we empower you with skills. Our DIY recipe ebooks teach you how to make professional-grade ice cream and lollipops from home. Perfect for starting a small business or a fun hobby!
              </p>
              <ul className="space-y-4 mb-10">
                {['Easy to follow recipes', 'Simple ingredients', 'Profit-making tips', 'Lifetime access'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-brand-gold" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/shop" 
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/20"
              >
                Buy Ebook Now
                <ShoppingBag size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {EBOOKS.map((ebook, i) => (
                <div key={ebook.id} className={`rounded-2xl overflow-hidden shadow-lg ${i === 1 ? 'mt-8' : ''}`}>
                  <img src={ebook.image} alt={ebook.title} className="w-full h-64 object-cover" />
                  <div className="p-4 bg-white">
                    <p className="font-bold text-slate-900 text-sm truncate">{ebook.title}</p>
                    <p className="text-brand-blue font-bold">{ebook.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="blue-gradient rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Launch Your Business?</h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto relative z-10">
              Don't let paperwork hold you back. Join hundreds of successful South African business owners who started with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link 
                to="/contact" 
                className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
              >
                Get Started Now
              </Link>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-gold-light transition-all shadow-xl"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
