type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function LandingLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
