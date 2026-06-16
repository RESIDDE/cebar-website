"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";

interface EventItem {
  id: string;
  num: string;
  title: string;
  theme: string;
  dateStr: string;
  targetDate: Date; // For countdown if applicable
  time: string;
  location: string;
  description: string;
  ticketPrice: string;
  status: "UPCOMING" | "COMPLETED";
  image: string;
  registerUrl: string;
}

const cebarEvents: EventItem[] = [
  {
    id: "aec-2026",
    num: "01",
    title: "Abuja Educators Conference 2026",
    theme: "ENTREPRENEURSHIP IN EDUCATION",
    dateStr: "12 May 2026",
    targetDate: new Date("2026-05-12T09:00:00+01:00"),
    time: "09:00 – 15:00 GMT+1",
    location: "The Rock Event Centre, Kwaba, Abuja, Nigeria",
    description: "Are you an educator, school leader, early years teacher, or a dedicated parent? Don't miss out on the 2026 flagship edition of our Abuja Educators Conference. Gain highly actionable insights, connect with top-tier professionals, and discover game-changing trends in modern educational entrepreneurship.",
    ticketPrice: "Free Entry + Paid Masterclasses",
    status: "UPCOMING",
    image: "https://static.wixstatic.com/media/d9d09a_14d0ffbdbde84a05925850f939710eb3~mv2.jpg/v1/fill/w_526,h_526,al_c,q_80/d9d09a_14d0ffbdbde84a05925850f939710eb3~mv2.jpg",
    registerUrl: "https://www.cebargroup.co.uk/event-details/abuja-educators-conference-2026",
  },
  {
    id: "aec-2025",
    num: "02",
    title: "Abuja Educators Conference 2025",
    theme: "Empowering Educators for Lasting Impact",
    dateStr: "10 Jul 2025",
    targetDate: new Date("2025-07-10T19:00:00"),
    time: "19:00 – 23:00",
    location: "Plot 686, Jabi Airport Road Bypass, Cadastral Zone, Abuja",
    description: "Our landmark 2025 conference combined with the prestigious NCCE Programme. The focus was on pedagogical transformation, leadership empowerment, and placement systems, bringing together educators across the Federal Capital Territory.",
    ticketPrice: "Completed",
    status: "COMPLETED",
    image: "https://static.wixstatic.com/media/343e49_6c65ec77ac924e4ead95d9b2f10d2638~mv2.jpeg/v1/fill/w_1080,h_864,al_c,q_85/343e49_6c65ec77ac924e4ead95d9b2f10d2638~mv2.jpeg",
    registerUrl: "https://www.cebargroup.co.uk/event-details/abuja-educators-conference-2025",
  },
  {
    id: "aec-2024",
    num: "03",
    title: "Abuja Educators Conference 2024",
    theme: "ENVOYS OF CHANGE",
    dateStr: "18 Jul 2024",
    targetDate: new Date("2024-07-18T09:00:00"),
    time: "09:00 – 16:00",
    location: "Abuja, Nigeria",
    description: "An incredible 4-in-1 curriculum model pilot event and in-depth Masterclasses led by seasoned global practitioners. Focused heavily on building positive school culture, soft-skills training, and classroom administration excellence.",
    ticketPrice: "Completed",
    status: "COMPLETED",
    image: "https://static.wixstatic.com/media/f167bf_fe3e5bdeaa294769a4936bf5b10f268b~mv2.jpg/v1/fit/w_960,h_724,q_90/f167bf_fe3e5bdeaa294769a4936bf5b10f268b~mv2.jpg",
    registerUrl: "https://www.cebargroup.co.uk/event-details/abuja-educators-conference-2024",
  },
];

export default function UpcomingEvents() {
  const [expandedId, setExpandedId] = useState<string | null>("aec-2026");

  // Countdown Timer state for the 2026 event
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const target = cebarEvents[0].targetDate;
    const calculateTimeLeft = () => {
      const difference = +target - +new Date();
      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isOver: true }));
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);



  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      className="relative py-24 bg-[#050505] text-[#ffffff] overflow-hidden border-t border-white/10"
      id="upcoming-events"
      data-theme="dark"
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#D1000A]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#D1000A]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Flagship Countdown Header (Abuja Educators Conference 2026) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 bg-[#D1000A] rounded-full animate-ping" />
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#D1000A] uppercase font-bold">
                NEXT FLAGSHIP SYMPOSIUM
              </span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-tight leading-[1] text-transparent bg-clip-text bg-linear-to-b from-white to-white/70">
              Abuja Educators <br />
              <span className="italic font-light text-[#D1000A]">Conference 2026</span>
            </h2>
            
            <p className="mt-6 text-white/60 max-w-lg leading-relaxed text-sm md:text-base">
              A premier high-impact gathering centered on <span className="text-white font-semibold">Entrepreneurship in Education</span>, featuring exclusive masterclasses, policy framework audits, and networking opportunities at The Rock Event Centre.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm w-full max-w-md">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D1000A]" />
                Live Countdown to May 12, 2026
              </div>

              {!timeLeft.isOver ? (
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                      {String(timeLeft.days).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-white/40 mt-1">Days</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-white/40 mt-1">Hours</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-white/40 mt-1">Mins</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-[#D1000A]">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] font-mono uppercase text-white/40 mt-1">Secs</div>
                  </div>
                </div>
              ) : (
                <div className="text-white font-medium text-sm">
                  Registration closed. Stay tuned for details!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Event Showcase List */}
        <div className="border-y border-white/10">
          {cebarEvents.map((evt) => {
            const isExpanded = expandedId === evt.id;
            const isUpcoming = evt.status === "UPCOMING";

            return (
              <div
                key={evt.id}
                key={evt.id}
                className={`relative border-b last:border-b-0 border-white/10 transition-colors duration-500 ${
                  isExpanded ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Row Summary Header */}
                <div
                  onClick={() => toggleExpand(evt.id)}
                  className="flex flex-col md:flex-row md:items-center justify-between py-8 px-4 md:px-8 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    {/* Index Number */}
                    <span className="text-xs md:text-sm font-mono text-[#D1000A]">
                      {evt.num}
                    </span>

                    {/* Date Badge */}
                    <div className="hidden sm:flex flex-col items-start w-[120px]">
                      <span className="text-xs font-mono tracking-widest text-white/50 group-hover:text-white transition-colors duration-300">
                        {evt.dateStr.toUpperCase()}
                      </span>
                    </div>

                    {/* Title & Theme */}
                    <div className="flex flex-col">
                      <h3 className="text-lg md:text-2xl font-medium tracking-tight group-hover:text-[#D1000A] transition-colors duration-300">
                        {evt.title}
                      </h3>
                      <span className="text-xs text-white/40 font-mono tracking-wide mt-1 uppercase">
                        {evt.theme}
                      </span>
                    </div>
                  </div>

                  {/* Badges and Chevron */}
                  <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0">
                    <span className="sm:hidden text-[10px] font-mono tracking-widest text-white/40">
                      {evt.dateStr.toUpperCase()}
                    </span>

                    <div className="flex items-center gap-3">
                      {/* Live Badge */}
                      {isUpcoming ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest bg-[#D1000A]/10 text-[#D1000A] border border-[#D1000A]/20">
                          <span className="h-1.5 w-1.5 bg-[#D1000A] rounded-full animate-pulse" />
                          UPCOMING
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest bg-white/5 text-white/40 border border-white/10">
                          COMPLETED
                        </span>
                      )}

                      {/* Expand indicator */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="p-1 text-white/30 group-hover:text-white"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Section */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/5 bg-black/10">
                        {/* Event Image */}
                        <div className="lg:col-span-3 relative rounded-xl overflow-hidden min-h-[200px] hidden md:block">
                          <img
                            src={evt.image}
                            alt={evt.title}
                            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Left description column */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-3">
                              ABOUT THE SYMPOSIUM
                            </h4>
                            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                              {evt.description}
                            </p>
                          </div>

                          <div className="mt-8 flex flex-wrap gap-4 items-center">
                            {isUpcoming ? (
                              <a
                                href={evt.registerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#D1000A] hover:bg-[#b00008] text-white px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 hover:gap-3"
                              >
                                REGISTER TO ATTEND
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            ) : (
                              <a
                                href={evt.registerUrl}
                                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 hover:gap-3"
                              >
                                VIEW EVENT ARCHIVE
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Right schedule column */}
                        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/[0.01] border border-white/5 p-6 rounded-xl">
                          <div className="flex gap-4">
                            <Calendar className="w-5 h-5 text-[#D1000A] shrink-0" />
                            <div>
                              <h5 className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
                                DATE
                              </h5>
                              <p className="text-sm font-medium mt-1 text-white">
                                {evt.dateStr}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <Clock className="w-5 h-5 text-[#D1000A] shrink-0" />
                            <div>
                              <h5 className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
                                TIME
                              </h5>
                              <p className="text-sm font-medium mt-1 text-white">
                                {evt.time}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 sm:col-span-2">
                            <MapPin className="w-5 h-5 text-[#D1000A] shrink-0" />
                            <div>
                              <h5 className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
                                LOCATION & VENUE
                              </h5>
                              <p className="text-sm mt-1 text-white/80">
                                {evt.location}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 sm:col-span-2 border-t border-white/5 pt-4">
                            <div className="w-full flex justify-between items-center">
                              <div>
                                <h5 className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
                                  TICKET PRICE
                                </h5>
                                <p className="text-sm font-semibold mt-1 text-white">
                                  {evt.ticketPrice}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
