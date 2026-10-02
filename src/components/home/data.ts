import {
  BarChart3,
  BookOpen,
  Briefcase,
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
  title: string;
  summary: string;
  capabilities: Capability[];
}

export const serviceAreas: ServiceArea[] = [
  {
    num: "01",
    title: "Educator Training",
    summary: "Workshops and programmes that lift teaching and school leadership to international standards.",
    capabilities: [
      { title: "School owner training", description: "Empowering leaders with local and international workshops to lead schools to international standards.", icon: Crown },
      { title: "Educator development", description: "Comprehensive programmes on pedagogical advancements, classroom management and technology integration.", icon: GraduationCap },
      { title: "Training curriculum", description: "Meticulously crafted, industry-relevant training modules covering a wide array of educational topics.", icon: BookOpen },
      { title: "Professional workshops", description: "International standard workshops equipping teachers and school leaders to operate with personal and professional excellence.", icon: Users },
    ],
  },
  {
    num: "02",
    title: "HR Solutions",
    summary: "Recruitment, placement support and institutional consulting for schools.",
    capabilities: [
      { title: "Educator recruitment", description: "Sourcing, interviewing, shortlisting and panel interviews for educational staff with specialisation in leadership recruitment.", icon: UserSearch },
      { title: "Post-placement training", description: "Our unique 3-month post-appointment training ensures new staff are set up for long-term success.", icon: GraduationCap },
      { title: "Institutional consulting", description: "School audits, improvement systemisation, policy development, curriculum review, and performance management implementation.", icon: Settings },
      { title: "Performance evaluation", description: "Data systems implementation and performance frameworks for educational institutions.", icon: BarChart3 },
    ],
  },
  {
    num: "03",
    title: "Corporate Training",
    summary: "Leadership, technical and soft-skills programmes for teams of every size.",
    capabilities: [
      { title: "Leadership & management", description: "Develop leadership qualities that inspire and empower teams across corporate environments.", icon: Crown },
      { title: "Professional development", description: "Enhance time management, resilience, presentation skills, and personal effectiveness.", icon: Briefcase },
      { title: "Technical training", description: "Data analytics, digital transformation, project management, and IT training tailored for industry.", icon: Laptop },
      { title: "Soft skills & interpersonal", description: "Improve emotional intelligence, conflict resolution, and communication skills across teams.", icon: Users },
    ],
  },
  {
    num: "04",
    title: "Government Programmes",
    summary: "Capability building for public-sector leaders and departments.",
    capabilities: [
      { title: "Public sector leadership", description: "Strengthen leadership skills to drive public sector excellence and service delivery.", icon: Building2 },
      { title: "Operational efficiency", description: "Targeted training programmes to boost productivity and performance across government departments.", icon: BarChart3 },
      { title: "Digital readiness", description: "Essential IT skills for government employees to modernise service delivery and operations.", icon: Globe },
      { title: "Cultural competence", description: "Foster better communication, ethical decision-making, and cultural competence in the public service.", icon: Lightbulb },
    ],
  },
];

export const impactStats = [
  { value: 5000, label: "Educators and professionals trained" },
  { value: 250, label: "Primary schools" },
  { value: 180, label: "Secondary schools" },
  { value: 40, label: "Universities" },
  { value: 120, label: "Corporate clients" },
  { value: 35, label: "Government departments" },
];

export const standards = ["Gov't Partner", "Ofsted Framework", "CPD Certified", "ISO Standards"];

export const faqs = [
  {
    question: "Who can benefit from CEBAR's training programmes?",
    answer:
      "CEBAR's programmes are designed for a wide range of stakeholders — school owners, educators, corporate professionals, and government employees. Whether you are an individual looking to enhance your skills or an organisation seeking to transform your team's performance, we have a tailored programme for you.",
  },
  {
    question: "What sectors do you specialise in?",
    answer:
      "We specialise in three key sectors: Education (schools, colleges, universities), Corporate (businesses of all sizes), and Government (public sector departments and agencies). Our cross-sector expertise allows us to adapt best practices from each environment to enrich the others.",
  },
  {
    question: "How are CEBAR training programmes delivered?",
    answer:
      "We offer flexible delivery options including in-person workshops, online webinars, hybrid sessions, and on-site institutional training. Our bespoke programmes can be customised to your schedule and organisational context to ensure maximum engagement and impact.",
  },
  {
    question: "What makes CEBAR's approach different?",
    answer:
      "CEBAR's unique selling point is our integrated approach — we don't just train, we transform. Our post-placement training support, school audit services, and ongoing consultancy ensure that the improvements made stick. We are driven by measurable outcomes, not just programme completion.",
  },
  {
    question: "Do you offer recruitment services for educational institutions?",
    answer:
      "Yes. Our dedicated HR Solutions division provides comprehensive educator recruitment — from sourcing and structured interviews to shortlisting and leadership panel interviews. We also offer a unique 3-month post-appointment support programme to help new hires embed successfully.",
  },
  {
    question: "How do I get started with CEBAR?",
    answer:
      "Simply reach out through our contact page or book a consultation call. We'll begin with a discovery session to understand your goals, context, and challenges before designing a programme that delivers real, lasting results.",
  },
];

/** Strip Wix's on-the-fly resize so next/image can work from the full-resolution original. */
export const wixOriginal = (url: string) => url.replace(/\/v1\/.*$/, "");

export const HERO_IMAGE = "https://static.wixstatic.com/media/343e49_2bda18569d4c4f8d9bf27fd9f92a11d9~mv2.jpg";

export const CLASSROOM_IMAGE =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop";
