export type ProjectData = {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  heroImage: string;
  overview: string;
  client: string;
  role: string;
  timeline: string;
  challenge: string;
  solution: string;
  impact: string;
  detailImages: string[];
  nextProjectSlug: string | null;
  nextProjectTitle: string | null;
  liveUrl?: string;
};

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: "abuja-educators-conference",
    title: "Abuja Educators Conference",
    category: "Education & Capability Building",
    tags: ["Capability Building", "Strategic Advisory", "Education Sector"],
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    overview: "CEBAR Group conceptualized, designed, and executed the landmark Abuja Educators Conference, bringing together over 500 academic leaders, policy-makers, and educators. The summit created a unified forum to debate and implement modern curriculum standards and technology-driven pedagogy across regional educational systems.",
    client: "FCT Education Secretariat & Abuja Educators Forum",
    role: "Event Concept, Strategic Facilitation & Advisory",
    timeline: "5 Months",
    challenge: "Regional educators operated in silos, lacking a structured platform for sharing best practices and alignment with global instructional shifts. Standard professional development models had low retention rates and minimal direct classroom impact.",
    solution: "We structured an interactive, multi-track conference focused on hands-on pedagogy workshops, digital curriculum integration, and leadership clinics. We developed a post-conference support network and digital hub to sustain peer learning and ongoing assessment.",
    impact: "Successfully trained 500+ educators representing 120 schools, direct positive curriculum adjustments in 40+ institutions, and a 94% attendee satisfaction score.",
    detailImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
    ],
    nextProjectSlug: "institutional-transformation",
    nextProjectTitle: "Imperial Gate Academy Audit",
    liveUrl: "https://www.cebargroup.co.uk/"
  },
  {
    id: 2,
    slug: "institutional-transformation",
    title: "Imperial Gate Academy Audit",
    category: "Institutional Audit & HR Transformation",
    tags: ["Institutional Audit", "HR Redesign", "Operational Strategy", "Education"],
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
    overview: "We undertook a full institutional audit and HR restructuring project for Imperial Gate Academy. Our mandate was to identify operational bottlenecks, align staff capabilities with advanced school standards, and transition their management into a highly professional, modern governance model.",
    client: "Board of Governors, Imperial Gate Academy",
    role: "HR Restructuring & Operational Audit",
    timeline: "4 Months",
    challenge: "The academy struggled with outdated organizational structures, misaligned faculty credentials, high staff turnover, and an operational workflow that slowed down administrative decision-making.",
    solution: "CEBAR Group designed a multi-dimensional competency framework, conducted comprehensive personnel audits, updated administrative policies, and implemented a streamlined organizational matrix. We also led transition training for the academy's executive leadership.",
    impact: "Achieved a 35% reduction in administrative overhead, stabilized staff retention at 92%, and modernized teaching standards across all academic departments.",
    detailImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
    ],
    nextProjectSlug: "executive-capacity-development",
    nextProjectTitle: "Corporate Leadership Summit",
    liveUrl: "https://www.cebargroup.co.uk/"
  },
  {
    id: 3,
    slug: "executive-capacity-development",
    title: "Corporate Leadership Summit",
    category: "Corporate Leadership & Capacity Building",
    tags: ["Executive Training", "Corporate Strategy", "Change Management"],
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    overview: "We designed a bespoke Executive Capacity Development program for leading high-growth corporations in Nigeria. The summit combined cutting-edge management principles with customized leadership coaching, focusing on corporate agility and strategic execution in challenging markets.",
    client: "CEBAR Corporate Alliance Network",
    role: "Bespoke Curriculum Design & Executive Coaching",
    timeline: "3 Months",
    challenge: "Rapid business growth and changing economic environments left mid-level and executive leaders with capacity gaps, leading to strategic misalignment and delayed project execution.",
    solution: "CEBAR developed and delivered intensive experiential modules covering agile strategy, emotional intelligence for leaders, and conflict resolution frameworks. We followed this with individual coaching sessions and progress-tracking scorecards.",
    impact: "Trained 120+ senior managers, recorded a 40% improvement in cross-departmental project delivery times, and facilitated 15 corporate strategic initiatives.",
    detailImages: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    ],
    nextProjectSlug: "digital-readiness-transformation",
    nextProjectTitle: "Public Service Digital Modernization",
    liveUrl: "https://www.cebargroup.co.uk/"
  },
  {
    id: 4,
    slug: "digital-readiness-transformation",
    title: "Public Service Digital Modernization",
    category: "Public Sector Digitization & Capability Enhancement",
    tags: ["Digital Readiness", "Public Sector Reform", "Capacity Building", "Government"],
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    overview: "CEBAR Group was engaged by the Federal Capital Territory (FCT) Administration to drive a comprehensive digital readiness and capacity-building initiative. The program aligned government workflows with modern technology platforms, elevating public service efficiency across critical departments.",
    client: "Federal Capital Territory (FCT) Administration",
    role: "Digital Strategy & Public Sector Capability Building",
    timeline: "6 Months",
    challenge: "Outdated administrative systems and a workforce unfamiliar with modern collaborative software resulted in significant transaction delays, paper waste, and poor inter-departmental communication.",
    solution: "We designed a custom 'Digital Literacy & Readiness' curriculum tailored to public service ranks. We established digital learning labs, conducted hands-on training for 300+ administrators, and optimized document workflow policies.",
    impact: "Transitioned 5 administrative departments to fully paperless communication, reduced standard citizen service response times by 50%, and established a sustainable internal tech support desk.",
    detailImages: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
    ],
    nextProjectSlug: "abuja-educators-conference",
    nextProjectTitle: "Abuja Educators Conference",
    liveUrl: "https://www.cebargroup.co.uk/"
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}
