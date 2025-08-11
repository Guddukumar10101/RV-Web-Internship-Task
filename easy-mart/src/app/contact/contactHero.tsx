'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="py-16 bg-background text-foreground font-[Work_Sans]">
      {/* Hero Section */}
      <div className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-[Poppins] leading-tight"
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-[oklch(70%_0.21_140)] to-[oklch(85%_0.18_100)] text-transparent bg-clip-text">
              Touch
            </span>
          </motion.h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Whether you're looking to partner, explore features, or need support — we're one message away.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-border bg-card"
        >
          <Image
            src="/images/contactphoto.jpg"
            alt="Contact Easy Mart"
            width={600}
            height={400}
            className="object-cover w-full h-full transition-all duration-300 ease-in-out"
          />
        </motion.div>
      </div>

      {/* Contact Cards */}
      <div className="py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold font-[Poppins] mb-4"
          >
            Choose Your Preferred{' '}
            <span className="bg-gradient-to-r from-[oklch(70%_0.21_140)] to-[oklch(85%_0.18_100)] text-transparent bg-clip-text">
              Communication
            </span>
          </motion.h2>

          <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
            Select the method that works best for you — and we'll get back to you shortly.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-6 h-6 text-[oklch(70%_0.21_140)]" />,
                title: 'Email Us',
                description: "Reach out via email and we'll respond within 24 hours.",
                contact: 'support@easymart.com',
                gradient: 'from-[oklch(95%_0.07_140)] to-[oklch(98%_0.08_140)]',
                textColor: 'text-[oklch(35%_0.21_140)]',
              },
              {
                icon: <Phone className="w-6 h-6 text-[oklch(60%_0.23_120)]" />,
                title: 'Call Us',
                description: 'Speak with our team during business hours (10 AM – 6 PM).',
                contact: '+91 6204351245',
                gradient: 'from-[oklch(94%_0.08_120)] to-[oklch(97%_0.09_120)]',
                textColor: 'text-[oklch(34%_0.23_120)]',
              },
              {
                icon: <MapPin className="w-6 h-6 text-[oklch(75%_0.16_100)]" />,
                title: 'Visit Us',
                description: 'Drop by our office for a one-on-one consultation.',
                contact: '01, Ground Floor, BOI Audit Office, Pragati Path, Ranchi - 834001',
                gradient: 'from-[oklch(97%_0.08_100)] to-[oklch(99%_0.09_100)]',
                textColor: 'text-[oklch(38%_0.16_100)]',
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotateY: 8 }}
                transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                className={`rounded-2xl p-6 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.2)] bg-gradient-to-br ${card.gradient} dark:from-muted dark:to-background`}
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-lg mb-4 bg-white/80 dark:bg-white/10">
                  {card.icon}
                </div>
                <h4 className="text-lg font-semibold mb-1">{card.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
                <div
                  className={`${card.textColor} text-sm py-2 px-3 rounded-md inline-block font-medium shadow-sm max-w-xs mx-auto bg-background/80 dark:bg-white/5`}
                >
                  {card.contact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 border-t border-border max-w-7xl mx-auto" />
    </section>
  );
}
