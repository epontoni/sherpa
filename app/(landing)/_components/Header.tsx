import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { GraduationCap, Loader } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <footer className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="xl:max-w-screen-xl mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <GraduationCap className="w-10 h-10 transition-transform duration-300 transform hover:-rotate-12 hover:scale-110" />
            <h1 className="text-2xl font-extrabold tracking-wide">Sherpa</h1>
          </div>
        </Link>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/learn">
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </footer>
  );
}
