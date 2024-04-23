import { cn } from "@/lib/utils";
import { GraduationCap, Loader } from "lucide-react";
import Link from "next/link";
import SidebarItem from "@/components/SidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

type Props = {
  className?: string;
};

const SIDEBAR_ITEMS = [
  {
    label: "Courses",
    href: "/courses",
    iconSrc: "/courses.svg",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    iconSrc: "/leaderboard.svg",
  },
];

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 text-indigo-500">
          <GraduationCap className="w-10 h-10 transition-transform duration-300 transform hover:-rotate-12 hover:scale-110" />
          <h1 className="text-2xl font-extrabold tracking-wide">Sherpa</h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
}
