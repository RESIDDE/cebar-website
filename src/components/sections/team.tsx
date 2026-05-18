"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Carol Barlow",
    role: "CEO & Executive Consultant",
    bio: "Leading CEBAR Group's mission to empower educators and organisations across the education, corporate and government sectors.",
    image: "https://static.wixstatic.com/media/343e49_ab437ac8eb864a8f9b843dd083dc768c~mv2.jpeg/v1/crop/x_0,y_0,w_1304,h_1477/fill/w_249,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20IMGL9423.jpeg",
    socials: [
      { name: "LinkedIn", icon: <FaLinkedinIn className="w-4 h-4" /> },
      { name: "Facebook", icon: <FaFacebook className="w-4 h-4" /> },
    ]
  },
  {
    name: "Omololu Adewalure",
    role: "Chairman of the Board",
    bio: "Providing strategic oversight and governance to ensure CEBAR Group achieves its vision of educational excellence at scale.",
    image: "https://static.wixstatic.com/media/f167bf_2d99aec3f6c54127a36ecf0722895b08~mv2.jpg/v1/crop/x_0,y_53,w_807,h_914/fill/w_249,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20230621-WA0023_edited.jpg",
    socials: [
      { name: "LinkedIn", icon: <FaLinkedinIn className="w-4 h-4" /> },
      { name: "Twitter", icon: <FaTwitter className="w-4 h-4" /> },
    ]
  },
  {
    name: "Prince Abd'Malik Akenzua",
    role: "Director, Business & Product Development",
    bio: "Driving growth strategy and product development initiatives to expand CEBAR's impact across new markets and sectors.",
    image: "https://static.wixstatic.com/media/f167bf_9291ae43300342b28099e67b1dad094e~mv2.jpg/v1/crop/x_50,y_0,w_861,h_975/fill/w_249,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG-20240913-WA0017_edited.jpg",
    socials: [
      { name: "LinkedIn", icon: <FaLinkedinIn className="w-4 h-4" /> },
    ]
  },
  {
    name: "Stella Adewalure",
    role: "Director of Operations",
    bio: "Overseeing the day-to-day operational excellence that ensures every CEBAR programme is delivered to the highest standards.",
    image: "https://static.wixstatic.com/media/343e49_2b7d40449b6349c895205d750c5f196d~mv2.jpeg/v1/crop/x_0,y_81,w_1340,h_1516/fill/w_249,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMGL9440.jpeg",
    socials: [
      { name: "LinkedIn", icon: <FaLinkedinIn className="w-4 h-4" /> },
    ]
  },
  {
    name: "Mr Ochuko Imonikugbre",
    role: "Head of Training",
    bio: "Designing and delivering world-class training programmes that create measurable, lasting improvements in organisational performance.",
    image: "https://static.wixstatic.com/media/f167bf_7bf435d21c2a4e42acbcabf3a96321f6~mv2.jpg/v1/fill/w_249,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(2)_edited_edited.jpg",
    socials: [
      { name: "LinkedIn", icon: <FaLinkedinIn className="w-4 h-4" /> },
    ]
  },
  {
    name: "Ms Kodichi Ubabukoh",
    role: "Head of Recruitment",
    bio: "Leading educator recruitment services — from sourcing and interviewing to specialist leadership placement across institutions.",
    image: "https://static.wixstatic.com/media/343e49_f31dc914c99d4435ad0027cb68cf82ec~mv2.jpeg/v1/crop/x_0,y_91,w_1340,h_1516/fill/w_249,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMGL9452.jpeg",
    socials: [
      { name: "LinkedIn", icon: <FaLinkedinIn className="w-4 h-4" /> },
    ]
  }
];

const TeamSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth orbital rotation loop
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      if (hoveredIndex === null) {
        setRotation(prev => (prev + 0.12) % 360);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredIndex]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#020202] text-white py-32 md:py-48 overflow-hidden selection:bg-[#D1000A] selection:text-white"
    >
      <motion.div style={{ scale: sectionScale }} className="max-w-[1440px] mx-auto px-[5vw]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 relative z-20">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30 mb-6 block"
            >
              The Leadership
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter"
            >
              United by <br /> <span className="italic text-[#D1000A]">The Mission.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-lg text-white/40 font-light leading-relaxed"
          >
            A dedicated team of educators, HR specialists, and consultants united by a single purpose — transforming education and empowering organisations.
          </motion.p>
        </div>

        {/* Orbit Visualization */}
        <div className="relative aspect-square w-full max-w-[800px] mx-auto flex items-center justify-center">
           
           {/* Center Info Reveal */}
           <div className="absolute inset-0 flex items-center justify-center z-20 p-8 pointer-events-none">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null ? (
                  <motion.div 
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", y: 20 }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, filter: "blur(20px)", y: -20 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-sm"
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase tracking-tight mb-2 italic">{teamMembers[hoveredIndex].name}</h3>
                    <p className="text-[#D1000A] font-black tracking-[0.4em] uppercase text-[9px] mb-8">{teamMembers[hoveredIndex].role}</p>
                    <p className="text-white/50 text-base leading-relaxed mb-10 font-light">{teamMembers[hoveredIndex].bio}</p>
                    <div className="flex justify-center gap-6 pointer-events-auto">
                      {teamMembers[hoveredIndex].socials.map(s => (
                        <a key={s.name} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D1000A] hover:text-white transition-all duration-700 hover:scale-110">
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-center"
                   >
                     <div className="relative">
                        <motion.div 
                           animate={{ scale: [1, 1.1, 1], rotate: 360 }} 
                           transition={{ scale: { duration: 4, repeat: Infinity }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
                           className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center"
                        >
                           <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/10">Hover</span>
                        </motion.div>
                     </div>
                   </motion.div>
                )}
              </AnimatePresence>
           </div>

           {/* Orbit Core */}
           <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Spinning orbit ring */}
              <div 
                className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" 
                style={{ transform: `rotate(${rotation}deg)` }}
              />

              {teamMembers.map((member, i) => {
                const baseAngle = (i / teamMembers.length) * 360;
                const currentAngle = (baseAngle + rotation) * (Math.PI / 180);
                const radiusX = 22;
                const radiusY = 22;

                return (
                  <motion.div
                    key={member.name}
                    className="absolute w-[16vw] md:w-[120px] lg:w-[150px] aspect-square cursor-pointer group"
                    style={{
                      left: "50%",
                      top: "50%",
                      x: `calc(${Math.cos(currentAngle) * radiusX}vw - 50%)`,
                      y: `calc(${Math.sin(currentAngle) * radiusY}vw - 50%)`,
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    animate={{ 
                      scale: hoveredIndex === i ? 1.15 : 1,
                      opacity: hoveredIndex === null || hoveredIndex === i ? 1 : 0.4,
                      filter: hoveredIndex !== null && hoveredIndex !== i ? "blur(10px)" : "blur(0px)"
                    }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-[#D1000A] group-hover:shadow-[0_0_60px_rgba(209,0,10,0.15)] bg-[#111]">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
           </div>

           {/* Decorative Background Rings */}
           <div className="absolute inset-[-5%] rounded-full border border-white/2 pointer-events-none" />
           <div className="absolute inset-[10%] rounded-full border border-white/2 pointer-events-none" />
           <div className="absolute inset-[20%] rounded-full border border-white/1 pointer-events-none" />
        </div>

      </motion.div>
    </section>
  );
};

export default TeamSection;
