export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorImage: string;
  summary: string;
  heroImage: string;
  tags: string[];
  featured?: boolean;
  externalLink?: string;
  content: {
    sectionTitle?: string;
    text: string;
    quote?: string;
    quoteAuthor?: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "bringing-the-4-in-1-model-to-life",
    title: "Bringing the 4-in-1 Model to Life: A Visit to Akwa Ibom I’ll Never Forget",
    category: "Education",
    date: "April 27, 2024",
    readTime: "3 min read",
    author: "CEBAR Group",
    authorRole: "Educational Advisor",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    summary: "After nearly 30 years in education, something extraordinary happened during a research project in Akwa Ibom.",
    heroImage: "/blog1.avif",
    tags: ["Pedagogy", "Education", "Akwa Ibom", "Curriculum"],
    featured: true,
    externalLink: "https://www.cebargroup.co.uk/post/bringing-the-4-in-1-model-to-life-a-visit-to-akwa-ibom-i-ll-never-forget",
    content: [
      {
        text: "After nearly 30 years in education, you’d think I’d be used to the “aha!” moments. The sparkle in a student’s eye. The shift from confusion to clarity. The deep joy of learning—real learning. But last week in Akwa Ibom, something extraordinary happened, and it moved me more than I expected."
      },
      {
        sectionTitle: "Developing the 4-in-1 Curriculum Model",
        text: "I was there as part of a research project that’s close to my heart—developing and piloting a 4-in-1 curriculum model for pre-service teachers across six Colleges of Education. The goal was to provide an actionable, cohesive framework to transform teacher training."
      }
    ]
  },
  {
    id: 2,
    slug: "from-reflection-to-reform",
    title: "From Reflection to Reform: How a Train-the-Trainer Workshop is Challenging Bias",
    category: "Education",
    date: "April 27, 2024",
    readTime: "4 min read",
    author: "CEBAR Group",
    authorRole: "Consultant",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    summary: "A bold new initiative is reshaping the way educators teach in Nigeria, moving towards more inclusive teaching methods.",
    heroImage: "/blog2.avif",
    tags: ["Training", "Reform", "Nigeria", "Inclusion"],
    featured: false,
    externalLink: "https://www.cebargroup.co.uk/post/from-reflection-to-reform-how-a-train-the-trainer-workshop-is-challenging-bias-and-transforming-pra",
    content: [
      {
        text: "As education systems around the world seek more inclusive and student-centred approaches to teaching, the need for pedagogical reform has never been more urgent. In Nigeria, where traditional, lecture-based teaching methods still dominate in many classrooms, a bold new initiative is beginning to reshape the way educators teach—and the way they think."
      },
      {
        sectionTitle: "Challenging the Status Quo",
        text: "Earlier this year, the Sydani Group in partnership with CEBAR Consultancy and Training Services, hosted a five-day Train-the-Trainer workshop designed to expose implicit biases and elevate instructional capacity."
      }
    ]
  },
  {
    id: 3,
    slug: "reflections-from-the-frontline",
    title: "Reflections from the Frontline: What Happened When Nigerian Educators Took a Long, Hard Look at Themselves",
    category: "Education",
    date: "April 27, 2024",
    readTime: "3 min read",
    author: "CEBAR Group",
    authorRole: "Advisory Team",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    summary: "Moments of honesty and learning during a Train-the-Trainer workshop hosted in Abuja, part of rolling out an innovative pedagogy model.",
    heroImage: "/blog3.avif",
    tags: ["Educators", "Abuja", "Workshop", "Pedagogy"],
    featured: false,
    externalLink: "https://www.cebargroup.co.uk/post/reflections-from-the-frontline-what-happened-when-nigerian-educators-took-a-long-hard-look-at-them",
    content: [
      {
        text: "There are some moments in education that linger far beyond the PowerPoints and flipcharts. One such moment occurred during our recent Train-the-Trainer workshop—a five-day rollercoaster of learning, laughter, brutal honesty, and the occasional technological panic—hosted at Grand Pela Hotel in Abuja."
      },
      {
        sectionTitle: "The Power of Vulnerability",
        text: "The workshop, led by CEBAR Consultancy and the Sydani Group, was part of our mission to roll out the innovative 4-in-1 pedagogical model for pre-service teachers across Nigeria."
      }
    ]
  },
  {
    id: 4,
    slug: "teaching-hacks-5-secrets",
    title: "Teaching Hacks: 5 Secrets to Save Time and Boost Engagement",
    category: "Education",
    date: "May 22, 2024",
    readTime: "2 min read",
    author: "CEBAR Group",
    authorRole: "Faculty Mentorship",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    summary: "Explore five essential teaching hacks that help in managing time and boosting student engagement.",
    heroImage: "/blog4.avif",
    tags: ["Teaching", "Productivity", "Engagement", "Classroom"],
    featured: false,
    externalLink: "https://www.cebargroup.co.uk/post/teaching-hacks-5-secrets-to-save-time-and-boost-engagement",
    content: [
      {
        text: "As a teacher, you know the struggle. You're juggling lesson plans, grading papers, managing behavior, and trying to fit in some semblance of personal time."
      },
      {
        sectionTitle: "Reclaiming Your Time",
        text: "Finding effective ways to optimize daily routines can vastly improve both your mental health and your students' active participation."
      }
    ]
  },
  {
    id: 5,
    slug: "does-curriculum-really-matter-part-2",
    title: "Does Curriculum Really Matter? (Part 2)",
    category: "Education",
    date: "May 16, 2024",
    readTime: "2 min read",
    author: "CEBAR Group",
    authorRole: "Educational Strategy",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    summary: "Questions raised about the significance of curriculum in educational settings.",
    heroImage: "/blog5.avif",
    tags: ["Curriculum", "Strategy", "International Schools"],
    featured: false,
    externalLink: "https://www.cebargroup.co.uk/post/does-currirulum-really-matter-part-2",
    content: [
      {
        text: "So, I raised the question in my last message - does curriculum really matter? Why have many big international schools forsaken their own established curriculum models to pursue something else?"
      }
    ]
  },
  {
    id: 6,
    slug: "does-curriculum-really-matter-part-1",
    title: "Does Curriculum Really Matter? (Part 1)",
    category: "Education",
    date: "May 16, 2024",
    readTime: "3 min read",
    author: "CEBAR Group",
    authorRole: "Educational Strategy",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    summary: "Discussion on the relevance of curriculum in the educational landscape.",
    heroImage: "/blog6.avif",
    tags: ["Curriculum", "Strategy", "Traditions", "Culture"],
    featured: false,
    externalLink: "https://www.cebargroup.co.uk/post/does-curriculum-really-matter-part-1",
    content: [
      {
        text: "I saw a post recently on Facebook regarding the loss of culture, language, and African traditions, that really got me thinking about the foundations of what we teach."
      }
    ]
  },
  {
    id: 7,
    slug: "harnessing-social-media-part-2",
    title: "Harnessing the Power of Social Media: Engaging Your Community (Part 2)",
    category: "Corporate",
    date: "May 16, 2024",
    readTime: "1 min read",
    author: "CEBAR Group",
    authorRole: "Communications",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    summary: "Insights on using social media effectively for community engagement and school promotion in the digital age.",
    heroImage: "/blog7.avif",
    tags: ["Social Media", "Community", "Digital Age", "Promotion"],
    featured: false,
    externalLink: "https://www.cebargroup.co.uk/post/harnessing-the-power-of-social-media-engaging-your-community-and-promoting-your-school-part-2",
    content: [
      {
        text: "Hello and thank you for stopping by our education-centric space! In today's digital era, social media has transformed the landscape of marketing, even for educational institutions."
      }
    ]
  },
  {
    id: 8,
    slug: "harnessing-social-media-part-1",
    title: "Harnessing the Power of Social Media: Engaging Your Community",
    category: "Corporate",
    date: "May 16, 2024",
    readTime: "1 min read",
    author: "CEBAR Group",
    authorRole: "Communications",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    summary: "Discussion on the importance of social media in engaging educational communities.",
    heroImage: "/blog8.avif",
    tags: ["Social Media", "Community", "Promotion"],
    featured: false,
    externalLink: "https://www.cebargroup.co.uk/post/harnessing-the-power-of-social-media-engaging-your-community-and-promoting-your-school",
    content: [
      {
        text: "I hate social media, but I have no choice! In today's digital age, social media is not just a playground for teenagers and celebrities – it's a vital communication tool."
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
