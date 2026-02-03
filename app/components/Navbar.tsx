"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, type Variants } from "motion/react"

const menuVariants: Variants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  }
}

const linkVariants: Variants = {
  closed: { opacity: 0, y: 30 },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuItems = ["About", "Features", "Testimonials", "Pricing", "FAQ"]

  return (
    <div className="pointer-events-auto relative w-full px-6 md:px-0">
      <div className="mx-auto flex items-center justify-between md:justify-center md:gap-10 text-sm text-zinc-200">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-sm bg-white" />
          <span className="font-semibold tracking-wide">Message</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-zinc-400 md:flex">
          <a className="hover:text-white transition-colors" href="#about">About</a>
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
          <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-white transition-colors" href="#faq">FAQ</a>
        </nav>

        <a href="#get-started" className="hidden font-medium text-zinc-200 hover:text-white transition-colors md:block">
          Get Started
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="block text-zinc-200 md:hidden"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] flex flex-col bg-[#0a0a0a] px-6 pt-6 pb-8 md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-zinc-200">
                <div className="h-5 w-5 rounded-sm bg-white" />
                <span className="font-semibold tracking-wide">Message</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-200"
              >
                <X className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>

            {/* Links */}
            <div className="mt-20 flex flex-col gap-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  variants={linkVariants}
                  className="text-4xl font-normal text-zinc-100 tracking-tight"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
