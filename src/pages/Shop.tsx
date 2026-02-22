import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, CheckCircle2, MessageCircle } from 'lucide-react';
import { EBOOKS, BUSINESS_INFO } from '../constants';

export default function Shop() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-gold py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">DIY <span className="text-brand-blue">Recipe Ebooks</span></h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Master the art of making delicious treats and start your own small business today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {EBOOKS.map((ebook, index) => (
              <motion.div
                key={ebook.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={ebook.image} 
                    alt={ebook.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-1 text-brand-gold font-bold shadow-lg">
                    <Star size={16} fill="currentColor" />
                    <span>4.9 (120+ Reviews)</span>
                  </div>
                </div>
                <div className="p-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{ebook.title}</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {ebook.description}
                  </p>
                  <div className="space-y-4 mb-10">
                    {['Step-by-step instructions', 'Ingredient sourcing guide', 'Pricing strategies', 'Marketing tips'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="text-brand-gold" size={20} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Price</p>
                      <p className="text-4xl font-bold text-brand-blue">{ebook.price}</p>
                    </div>
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I'd like to buy the ${ebook.title} ebook`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-gold text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/20"
                    >
                      Buy Ebook Now
                      <ShoppingBag size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">What Our Students Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Sarah M.", text: "The ice cream recipes are so easy to follow! I started selling to my neighbors and they love it." },
                { name: "John D.", text: "The lollipop guide is amazing. The pricing tips helped me make my first R1000 in a week." },
                { name: "Lerato K.", text: "Professional quality results with simple ingredients. Highly recommend these ebooks!" }
              ].map((t, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-center text-brand-gold">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 italic">"{t.text}"</p>
                  <p className="font-bold text-slate-900">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
