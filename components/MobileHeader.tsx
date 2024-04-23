import MobileSidebar from "@/components/MobileSidebar";

// Correct name: MobileMenu
export default function MobileHeader() {
  return (
    <nav className="lg:hidden px-3 h-[50px] bg-white flex items-center border-b fixed top-0 w-full z-50">
      {" "}
      {/** bottom-0 by top-0 */}
      <MobileSidebar />
    </nav>
  );
}
