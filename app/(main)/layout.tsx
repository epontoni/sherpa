import MobileHeader from "@/components/MobileHeader";
import Sidebar from "@/components/Sidebar";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function MainLayout({ children }: Props) {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        {" "}
        {/** deleted -> pt-[50px] lg:pt-0 from main className */}
        <div className="max-w-screen-xl mx-auto pt-6 h-full">
          {children}
        </div>{" "}
        {/** max-w-[1056px] by max-w-screen-xl */}
      </main>
    </>
  );
}
