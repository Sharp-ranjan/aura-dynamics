import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./primitives";
import { Button } from "@/components/ui/button";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/ventures", label: "Ventures" },
  { to: "/governance", label: "Governance & Advisors" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="group relative px-3 py-2 text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-navy data-[status=active]:text-navy"
            >
              {n.label}
              <span className="absolute inset-x-3 -bottom-[13px] h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-50 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="navy" size="sm" className="hidden sm:inline-flex">
            <Link to="/contact-us">Inquire</Link>
          </Button>
           <Dialog.Trigger asChild>
             <Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden" aria-label="Open menu">
               <Menu className="h-5 w-5" />
             </Button>
           </Dialog.Trigger>
        </div>
      </div>
    </header>
       {mounted && createPortal(<>
           <Dialog.Overlay className="fixed inset-0 z-[70] bg-background/90 backdrop-blur-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
             <Dialog.Content aria-describedby={undefined}
                className="fixed inset-0 z-[71] flex h-dvh w-full flex-col overflow-y-auto overscroll-contain px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] text-foreground outline-none duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
             >
               <Dialog.Title className="sr-only">Primary navigation</Dialog.Title>
               <div className="mb-8 flex shrink-0 items-center justify-between gap-4">
                <Logo />
                 <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close menu" className="min-h-11 min-w-11 shrink-0"><X className="h-5 w-5" /></Button></Dialog.Close>
              </div>
               <nav className="flex flex-col" aria-label="Mobile primary">
                {NAV.map((n) => (
                  <Link key={n.to} to={n.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)}
                     className="flex min-h-16 items-center justify-between gap-4 border-b border-l-2 border-l-transparent px-3 py-4 text-xl font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring data-[status=active]:border-l-gold data-[status=active]:bg-accent data-[status=active]:text-primary">
                    {n.label}
                     <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </nav>
               <Button asChild variant="navy" size="lg" className="mt-8 min-h-12 shrink-0">
                <Link to="/contact-us" onClick={() => setOpen(false)}>Inquire</Link>
              </Button>
             </Dialog.Content>
           </>, document.body)}
    </Dialog.Root>
  );
}
