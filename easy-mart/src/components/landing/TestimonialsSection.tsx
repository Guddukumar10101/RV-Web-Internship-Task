"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Riya Sharma",
    title: "Bangalore Shop Owner",
    image: "/clients/client1.jpg",
    message:
      "Easy Mart is a blessing for my store. I compare prices daily and always find the best platform to buy from!",
  },
  {
    name: "Aditya Singh",
    title: "Mumbai Grocer",
    image: "/clients/client2.jpg",
    message:
      "Their platform is super intuitive. My profit margins increased because I’m no longer overpaying for stock.",
  },
  {
    name: "Rohit Verma",
    title: "Retailer, Delhi",
    image: "/clients/client3.jpg",
    message:
      "I love the UI, and the animations are smooth. Easy Mart makes my daily inventory process 2x faster!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-[var(--background)] overflow-visible relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[var(--foreground)]"
        >
          What Our Users Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mt-4 text-[var(--muted-foreground)]"
        >
          Trusted by shopkeepers and retailers across India.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 relative z-10">
          {testimonials.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--card)] border border-[var(--border)] rounded-3xl shadow-xl p-6 pt-20 text-left transition-all duration-300 hover:border-[var(--primary)] hover:shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Floating Circular Image */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-28 md:h-28 z-30 pointer-events-none overflow-visible">
                <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-[1.6] group-hover:-translate-y-2">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="rounded-full object-cover border-4 border-[var(--primary)] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{person.name}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">{person.title}</p>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                  &ldquo;{person.message}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}









// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Riya Sharma",
//     title: "Bangalore Shop Owner",
//     image: "/clients/client1.jpg",
//     message:
//       "Easy Mart is a blessing for my store. I compare prices daily and always find the best platform to buy from!",
//   },
//   {
//     name: "Aditya Singh",
//     title: "Mumbai Grocer",
//     image: "/clients/client2.jpg",
//     message:
//       "Their platform is super intuitive. My profit margins increased because I’m no longer overpaying for stock.",
//   },
//   {
//     name: "Neha Verma",
//     title: "Retailer, Delhi",
//     image: "/clients/client3.jpg",
//     message:
//       "I love the UI, and the animations are smooth. Easy Mart makes my daily inventory process 2x faster!",
//   },
// ];

// export function TestimonialsSection() {
//   return (
//     <section className="py-24 px-6 lg:px-24 bg-[var(--background)]">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Section Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-[var(--foreground)]"
//         >
//           What Our Users Say
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-lg mt-4 text-[var(--muted-foreground)]"
//         >
//           Trusted by shopkeepers and retailers across India.
//         </motion.p>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
//           {testimonials.map((person, i) => (
//             <motion.div
//               key={person.name}
//               initial={{ opacity: 0, rotateY: 90 }}
//               whileInView={{ opacity: 1, rotateY: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="group bg-[var(--card)] border border-[var(--border)] rounded-3xl shadow-xl p-6 text-left transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:border-[var(--primary)]"
//               style={{
//                 perspective: "1000px",
//               }}
//             >
//               {/* Image and Info */}
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-full overflow-hidden border-2 border-[var(--primary)] shadow-md group">
//                   <Image
//                     src={person.image}
//                     alt={person.name}
//                     fill
//                     className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-[var(--foreground)]">
//                     {person.name}
//                   </h3>
//                   <p className="text-sm text-[var(--muted-foreground)]">
//                     {person.title}
//                   </p>
//                 </div>
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
//                 &ldquo;{person.message}&rdquo;
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
