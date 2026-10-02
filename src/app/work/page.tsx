import WorkIndexClient from "./work-index-client";
import { projectsData } from "@/lib/project-data";

export const metadata = {
  title: "Our Work | CEBAR Group",
  description: "Case studies from CEBAR Group's training, HR and consultancy work across education, corporate and government sectors.",
};

export default function WorkPage() {
  return <WorkIndexClient projects={projectsData} />;
}
