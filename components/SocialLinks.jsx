import Link from "next/link";
import socialLinks from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center text-gray-400 gap-2 sm:gap-4 ">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.href}
            target="_blank"
            className="flex border  px-3 py-2 sm:px-4 sm:py-2 rounded items-center gap-1 text-xs sm:text-sm hover:text-purple-500 font-bold transition transform hover:scale-105"
          >
            <Icon size={16} />
            <span className="text-xs">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
