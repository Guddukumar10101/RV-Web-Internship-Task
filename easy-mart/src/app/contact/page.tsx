'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { contactSchema } from '@/schema/contactSchema';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Zap } from 'lucide-react';
import ContactHero from './contactHero';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      alert('Thanks for reaching out!');
    }, 1500);
  };

  return (
    <section className="py-0 bg-background text-foreground font-[Work_Sans]">
      {/* Hero */}
      <ContactHero />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-block bg-[oklch(92%_0.15_140)] dark:bg-[oklch(28%_0.12_140)] text-[oklch(40%_0.22_140)] px-3 py-1 rounded-full text-sm">
          🟢 Direct Communication
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-[Poppins] font-bold">
          Get in{' '}
          <span className="bg-gradient-to-r from-[oklch(70%_0.21_140)] to-[oklch(85%_0.18_100)] bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Ready to start a conversation? Fill out the form and we’ll get back to you shortly.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start px-4 md:px-0">
        {/* Image Box */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl bg-card ring-1 ring-border mb-8 md:mb-0"
        >
          <Image
            src="/images/contactus.jpg"
            alt="Contact Image"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-muted/80 text-foreground px-3 py-1 rounded-full text-xs flex items-center gap-2 shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Online Now
          </div>
          <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-muted/80 px-3 py-1 rounded-full text-sm flex items-center gap-2 text-foreground shadow">
            <Zap className="w-4 h-4 text-yellow-500" />
            Quick Response
          </div>
        </motion.div>

        {/* Form Box */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 shadow-[0_8px_40px_rgba(128,255,128,0.15)] dark:shadow-[0_8px_40px_rgba(255,255,170,0.05)] bg-card ring-1 ring-border hover:scale-[1.01] transition-all duration-300"
        >
          <div className="text-center mb-6">
            <p className="text-[oklch(60%_0.25_10)] font-semibold mb-2 text-sm">
              🛡️ Your data is safe with us
            </p>
            <h3 className="text-xl font-[Poppins] font-semibold">Reach Out Confidentially</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Your privacy is our priority — we never share your information.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your full name"
                          className="focus-visible:ring-[oklch(70%_0.3_150)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="you@example.com"
                          className="focus-visible:ring-[oklch(70%_0.3_150)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="+91 9876543210"
                          className="focus-visible:ring-[oklch(70%_0.3_150)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="subject"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Let us know..."
                          className="focus-visible:ring-[oklch(70%_0.3_150)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Share your thoughts..."
                        className="min-h-[120px] focus-visible:ring-[oklch(70%_0.3_150)]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[oklch(65%_0.23_140)] to-[oklch(85%_0.20_100)] text-white hover:from-[oklch(75%_0.25_100)] hover:to-[oklch(95%_0.22_90)] transition"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
