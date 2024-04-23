import Footer from "./_components/Footer";
import Header from "./_components/Header";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function LandingLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
