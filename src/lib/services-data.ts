import {
  BarChart3,
  BookOpen,
  Building2,
  Crown,
  Globe,
  GraduationCap,
  Laptop,
  Lightbulb,
  Settings,
  UserSearch,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceArea {
  num: string;
  /** Anchor id on /services */
  slug: string;
  title: string;
  /** One line for cards */
  summary: string;
  subtitle: string;
  /** Paragraph for the services page */
  description: string;
  image: string;
  imageAlt: string;
  capabilities: Capability[];
}

export const serviceAreas: ServiceArea[] = [
  {
    num: "01",
    slug: "educator-training",
    title: "Educator Training",
    summary: "Workshops and programmes that lift teaching and school leadership to international standards.",
    subtitle: "Leadership development for school owners and educators",
    description:
      "Everything rises and falls on leadership, which is why we train and mentor leaders for long-term, sustainable growth. Our local and international workshops empower school owners and educators to lead to international standards.",
    image: "https://static.wixstatic.com/media/343e49_b0e1d2610a564085a35537e3b8463d25~mv2.jpg",
    imageAlt: "CEBAR facilitators with school leaders outside Eagle Might International School",
    capabilities: [
      { title: "Local & international workshops", description: "Empowering school leaders to operate at international standards.", icon: Globe },
      { title: "Educator development programmes", description: "Comprehensive programmes on pedagogical advancements, classroom management, and technology integration.", icon: GraduationCap },
      { title: "Training curriculum design", description: "Meticulously crafted, industry-relevant training modules covering a wide array of educational topics.", icon: BookOpen },
      { title: "Professional development workshops", description: "International-standard workshops equipping teachers and school leaders to operate with personal and professional excellence.", icon: Lightbulb },
    ],
  },
  {
    num: "02",
    slug: "hr-solutions",
    title: "HR Solutions",
    summary: "Recruitment, placement support and institutional consulting for schools.",
    subtitle: "Recruitment and advisory for educational institutions",
    description:
      "We source, interview and shortlist staff, run panel interviews and provide advisory services, with a specialism in leadership recruitment. Uniquely, we keep training new appointees for three months after they start.",
    image: "https://static.wixstatic.com/media/343e49_261c6abd535f4fa2bb1eed625ce902d4~mv2.jpg",
    imageAlt: "A CEBAR recruitment interview in progress",
    capabilities: [
      { title: "Leadership recruitment", description: "Sourcing, interviewing, shortlisting and panel interviews specialising in educational leadership.", icon: Users },
      { title: "Post-placement training", description: "Our unique 3-month post-appointment training ensures new staff are set up for long-term success.", icon: UserSearch },
      { title: "School consultation & audit", description: "Robust school audits incorporating improvement systemisation and policy development.", icon: Building2 },
      { title: "Performance management", description: "Curriculum review, performance management implementation, and data systems setup.", icon: BarChart3 },
    ],
  },
  {
    num: "03",
    slug: "corporate-training",
    title: "Corporate Training",
    summary: "Leadership, technical and soft-skills programmes for teams of every size.",
    subtitle: "Building high-performing teams",
    description:
      "Our corporate programmes equip your people with the skills and knowledge to excel in a competitive business environment, with training tailored to your organisation and its goals.",
    image: "https://static.wixstatic.com/media/343e49_2c7efb109c944cfaa2a8e6a08e4b8650~mv2.jpg",
    imageAlt: "Participants at a CEBAR training session",
    capabilities: [
      { title: "Leadership & management", description: "Develop leadership qualities that inspire and empower teams across corporate environments.", icon: Crown },
      { title: "Professional development", description: "Enhance time management, resilience, presentation skills, and personal effectiveness.", icon: Users },
      { title: "Technical & industry training", description: "Data analytics, digital transformation, project management, and IT training tailored for industry.", icon: Laptop },
      { title: "Soft skills & interpersonal", description: "Improve emotional intelligence, conflict resolution, and communication skills across teams.", icon: Lightbulb },
    ],
  },
  {
    num: "04",
    slug: "government-programmes",
    title: "Government Programmes",
    summary: "Capability building for public-sector leaders and departments.",
    subtitle: "Public-sector capability enhancement",
    description:
      "We provide specialised training for government organisations, strengthening public-sector capability and performance across leadership, operations and digital readiness.",
    image: "https://static.wixstatic.com/media/343e49_25707ab3bad64d468f74b2a17a1b6653~mv2.jpg",
    imageAlt: "A cohort of training participants with CEBAR facilitators",
    capabilities: [
      { title: "Public sector leadership", description: "Strengthen leadership skills to drive public sector excellence and service delivery.", icon: Building2 },
      { title: "Operational efficiency", description: "Targeted training programmes to boost productivity and performance across government departments.", icon: Settings },
      { title: "Digital readiness", description: "Essential IT skills for government employees to modernise service delivery and operations.", icon: Laptop },
      { title: "Cultural competence", description: "Foster better communication, ethical decision-making, and cultural competence in the public service.", icon: Globe },
    ],
  },
];

export const processSteps = [
  { step: "01", title: "Discovery", text: "We begin with a comprehensive audit of your organisation's needs, goals, and performance gaps to design the right programme." },
  { step: "02", title: "Design", text: "Our experts craft a bespoke training curriculum tailored to your sector, team size, and specific objectives." },
  { step: "03", title: "Deliver", text: "Industry-experienced trainers deliver sessions in-person or virtually, using proven methodologies for maximum engagement." },
  { step: "04", title: "Embed", text: "Post-training support, resources, and our unique follow-up coaching ensure knowledge is embedded for lasting impact." },
];
