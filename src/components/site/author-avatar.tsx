import Image from "next/image";
import { teamMembers } from "@/lib/team-data";
import { cdnLoader } from "./image-loader";

const carol = teamMembers.find((m) => m.name === "Carol Barlow");

/** Carol's posts use her real portrait; posts by "CEBAR Group" use the logo. */
export default function AuthorAvatar({ author, size = 40 }: { author: string; size?: number }) {
  const isCarol = /carol/i.test(author) && carol;

  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden rounded-full bg-white shadow-[0_0_0_1px_var(--ap-hairline)]"
      style={{ width: size, height: size }}
    >
      {isCarol ? (
        <Image loader={cdnLoader} src={carol.image} alt="" fill sizes={`${size}px`} className="object-cover object-top" />
      ) : (
        <Image src="/loo.png" alt="" fill sizes={`${size}px`} className="object-contain p-[18%]" />
      )}
    </span>
  );
}
