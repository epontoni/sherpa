import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Award, BookOpen, HomeIcon, MenuIcon, Sparkles } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileSidebar() {
  return (
    <Sheet>
      <div className="flex items-center justify-around gap-1 md:gap-4 w-full">
        <Button asChild variant="ghost" className="text-xs sm:text-sm">
          <Link href="/" className="flex gap-1 md:gap-2 items-center">
            <HomeIcon />
            Home
          </Link>
        </Button>
        <Button asChild variant="ghost" className="text-xs sm:text-sm">
          <Link href="/courses" className="flex gap-1 md:gap-2 items-center">
            <BookOpen className="w-5 h-5" />
            Courses
          </Link>
        </Button>
        <Button asChild variant="ghost" className="text-xs sm:text-sm">
          <Link
            href="/leaderboard"
            className="flex gap-1 md:gap-2 items-center"
          >
            <Award />
            Leaderboard
          </Link>
        </Button>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="flex gap-1 md:gap-2 items-center text-xs sm:text-sm"
          >
            <Sparkles />
            More
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
