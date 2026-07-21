import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Settings, UserSearch, BarChart3, Crown, Building2, Lightbulb, Globe, Briefcase, Laptop } from 'lucide-react';

const chapters = [
  {
    num: "01",
    title: "Educator Training",
    items: [
      { id: "1.1", title: "SCHOOL OWNER TRAINING", description: "Empowering leaders with local and international workshops to lead schools to international standards.", icon: Crown },
      { id: "1.2", title: "EDUCATOR DEVELOPMENT", description: "Comprehensive programmes on pedagogical advancements, classroom management and technology integration.", icon: GraduationCap },
      { id: "1.3", title: "TRAINING CURRICULUM", description: "Meticulously crafted, industry-relevant training modules covering a wide array of educational topics.", icon: BookOpen },
      { id: "1.4", title: "PROFESSIONAL WORKSHOPS", description: "International standard workshops equipping teachers and school leaders to operate with personal and professional excellence.", icon: Users }
    ]
  },
  {
    num: "02",
    title: "HR Solutions",
    items: [
      { id: "2.1", title: "EDUCATOR RECRUITMENT", description: "Sourcing, interviewing, shortlisting and panel interviews for educational staff with specialisation in leadership recruitment.", icon: UserSearch },
      { id: "2.2", title: "POST-PLACEMENT TRAINING", description: "Our unique 3-month post-appointment training ensures new staff are set up for long-term success.", icon: GraduationCap },
      { id: "2.3", title: "INSTITUTIONAL CONSULTING", description: "School audits, improvement systemisation, policy development, curriculum review, and performance management implementation.", icon: Settings },
      { id: "2.4", title: "PERFORMANCE EVALUATION", description: "Data systems implementation and performance frameworks for educational institutions.", icon: BarChart3 }
    ]
  },
  {
    num: "03",
    title: "Corporate Training",
    items: [
      { id: "3.1", title: "LEADERSHIP & MANAGEMENT", description: "Develop leadership qualities that inspire and empower teams across corporate environments.", icon: Crown },
      { id: "3.2", title: "PROFESSIONAL DEVELOPMENT", description: "Enhance time management, resilience, presentation skills, and personal effectiveness.", icon: Briefcase },
      { id: "3.3", title: "TECHNICAL TRAINING", description: "Data analytics, digital transformation, project management, and IT training tailored for industry.", icon: Laptop },
      { id: "3.4", title: "SOFT SKILLS & INTERPERSONAL", description: "Improve emotional intelligence, conflict resolution, and communication skills across teams.", icon: Users }
    ]
  },
  {
    num: "04",
    title: "Government Programmes",
    items: [
      { id: "4.1", title: "PUBLIC SECTOR LEADERSHIP", description: "Strengthen leadership skills to drive public sector excellence and service delivery.", icon: Building2 },
      { id: "4.2", title: "OPERATIONAL EFFICIENCY", description: "Targeted training programmes to boost productivity and performance across government departments.", icon: BarChart3 },
      { id: "4.3", title: "DIGITAL READINESS", description: "Essential IT skills for government employees to modernise service delivery and operations.", icon: Globe },
      { id: "4.4", title: "CULTURAL COMPETENCE", description: "Foster better communication, ethical decision-making, and cultural competence in the public service.", icon: Lightbulb }
    ]
  }
];

const StackedCard = ({ chapter, index, totalCards, scrollYProgress }: { chapter: any, index: number, totalCards: number, scrollYProgress: any }) => {
  const numTransitions = totalCards > 1 ? totalCards - 1 : 1;
  const startEntry = (index - 1) / numTransitions;
  const endEntry = index / numTransitions;

  const y = useTransform(
    scrollYProgress,
    [startEntry, endEntry],
    ['100vh', '0vh']
  );

  const startShrink = index / numTransitions;
  const endShrink = (index + 1) / numTransitions;

  const scale = useTransform(
    scrollYProgress,
    [startShrink, endShrink],
    [1, 0.95]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [startShrink, endShrink],
    [0, 0.15]
  );
  
  const topOffset = `calc(${index * 40}px + 6vh)`;

  return (
    <motion.div
      style={{
        scale,
        y: index === 0 ? '0vh' : y,
        top: topOffset, 
        bottom: '0vh',
      }}
      className="absolute left-[1vw] right-[1vw] sm:left-[2vw] sm:right-[2vw] bg-card text-card-foreground overflow-y-auto overflow-x-hidden flex flex-col justify-start pt-6 sm:pt-10 pb-[10vh] sm:pb-[12vh] px-4 sm:px-[5vw] rounded-t-[2rem] sm:rounded-t-[2.5rem] border-t border-border origin-top shadow-[0_-8px_40px_rgba(0,0,0,0.06)]"
    >
      {/* Dark overlay for depth simulation */}
      <motion.div 
        style={{ opacity: shadowOpacity }} 
        className="absolute inset-0 bg-black pointer-events-none z-0" 
      />
      {/* Top Header Row */}
      <div className="flex justify-between items-start w-full">
        <h2 className="text-[clamp(2rem,6vw,6.5rem)] leading-[0.95] tracking-[-0.04em] font-medium max-w-[60%]">
          {chapter.title}
        </h2>
        
        <div className="text-right">
          <div className="flex gap-4 items-baseline justify-end border-t border-border pt-2 w-[120px] md:w-[200px]">
             <span className="text-[0.6rem] uppercase tracking-widest font-semibold">SERVICE AREA:</span>
          </div>
          <span className="text-[clamp(3rem,10vw,14rem)] leading-[0.8] tracking-[-0.05em] font-medium inline-block relative -right-[2vw]">
            {chapter.num}
          </span>
        </div>
      </div>

      {/* Bottom Capabilities List */}
      <div className="w-full mt-auto">
        <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-semibold tracking-[-0.02em] mb-4 sm:mb-8">
          CAPABILITIES
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-0 border-t border-border pt-4">
          {chapter.items.map((item: any, i: number) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col py-4 sm:py-6 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    {Icon && <Icon className="w-4 h-4 text-accent" strokeWidth={2} />}
                  </div>
                  <span className="text-[0.7rem] md:text-[0.8rem] font-bold tracking-wider uppercase text-foreground/70">{item.id} · {item.title}</span>
                </div>
                <p className="text-[0.85rem] sm:text-[0.95rem] md:text-[1.05rem] leading-[1.6] opacity-75 max-w-[90%]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef}
      className="bg-background relative" 
      style={{ height: `${(chapters.length > 1 ? chapters.length - 1 : 1) * 100 + 200}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col pt-[5vh] items-center justify-start overflow-hidden">
        
        <div className="w-full h-full relative">
          {chapters.map((chapter, index) => (
            <StackedCard 
              key={index} 
              chapter={chapter} 
              index={index} 
              totalCards={chapters.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;