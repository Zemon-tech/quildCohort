import Link from "next/link";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-zinc-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-4">
          <div className="flex items-center gap-2 text-zinc-100">
            <a href="https://quild.in" target="_blank" rel="noopener noreferrer">
              <img src="/logo.svg" alt="Quild Cohort Logo" className="h-6 w-auto invert brightness-0" />
            </a>
            <span className="text-sm font-semibold tracking-wide">Quild Cohort</span>
          </div>
          <p className="text-sm leading-6 text-zinc-400">
            Step into the future — guided by clarity. Harness disciplined intelligence to build faster, think deeper, and ship with clarity.
          </p>
          <div className="flex items-center gap-3 text-zinc-400">
            <a href="https://x.com/QuildGlobal" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <div className="text-xs text-zinc-400">
            Created by{" "}
            <a
              href="https://quild.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              Quild Developer
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-1">
          <div className="space-y-3">
            <div className="text-zinc-300">Navigation</div>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="#about" className="hover:text-zinc-200">About</Link></li>
              <li><Link href="#features" className="hover:text-zinc-200">Features</Link></li>
              <li><Link href="#testimonials" className="hover:text-zinc-200">Testimonials</Link></li>
              <li><Link href="#pricing" className="hover:text-zinc-200">Pricing</Link></li>
              <li><Link href="#faq" className="hover:text-zinc-200">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
