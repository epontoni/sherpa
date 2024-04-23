export default function Footer() {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-xl mx-auto h-full flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-xs text-center">
          &copy; {new Date().getFullYear()} Sherpa learning.
        </p>
      </div>
    </footer>
  );
}
