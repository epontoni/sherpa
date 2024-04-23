import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Award, BookOpen, HomeIcon, MenuIcon, Sparkles } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
