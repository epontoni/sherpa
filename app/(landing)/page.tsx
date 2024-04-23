import { Typewriter } from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
          <Image src="/hero.png" fill alt="Sherpa help you to learn" />
        </div>
        <div className="flex flex-col items-center gap-y-8 flex-1">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center min-h-[60px] lg:min-h-[85px]">
            {" "}
            {/** Check the min-h-[60px] lg:min-h-[85px]  */}
            Excell your skills. Develops{" "}
            <Typewriter
              words={[
                "Mathematical thinking.",
                "Computational thinking.",
                "Critical thinking.",
                "Creative thinking.",
                "Scientific thinking.",
                "Strategic thinking.",
                "Analytical thinking.",
              ]}
              className=""
            />
          </h1>
          <div className="flex flex-col items-center gap-y-3">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal" redirectUrl="/learn">
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal" redirectUrl="/learn">
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <Link href="/learn">Continue learning</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
      <div className="w-full px-3 bg-mountains-pattern bg-conver bg-center h-screen bg-to text-center font-bold text-lg">
        <blockquote className="max-w-[988px] mx-auto mt-[200px]">
          &laquo;Estudiar, es, como enfrentarse a la ascensión de los picos más
          altos. En el aula se intenta proporcionar al estudiante las rutas,
          cuerdas e instrumental necesario para alcanzar la cima, pero tendrá
          que ser él quien camine y trepe. El esfuerzo no debería desanimarnos
          si consideramos la excepcionalidad del premio que nos aguarda al final
          del recorrido.&raquo;
        </blockquote>
      </div>
    </>
  );
}
