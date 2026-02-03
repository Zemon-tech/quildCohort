export default function Navbar() {
  return (
    <div className="pointer-events-auto">
      <div className="mx-auto flex items-center gap-8 px-4 text-sm text-zinc-200 md:px-0">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-sm bg-white" />
          <span className="font-semibold tracking-wide">Message</span>
        </div>
        <nav className="hidden items-center gap-8 text-zinc-300 md:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#testimonials">Testimonials</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#faq">FAQ</a>
        </nav>
        <a href="#get-started" className="ml-2 font-semibold text-white hover:text-zinc-200">
          Get Started
        </a>
      </div>
    </div>
  );
}
