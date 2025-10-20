import Link from "next/link"
import { Icons } from "@/components/icons"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src='/logo.svg' alt="Logo" height={40} width={40} />
              <span className="font-heading text-xl tracking-tight">Rat and Mice</span>
            </Link>
            <p className="text-muted-foreground max-w-sm opacity-70">
              Safe and effective pest control for rats and mice in homes and businesses.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground opacity-70">
            &copy; {new Date().getFullYear()} Design & Developed by 
            <Link className="text-green-400" href='www.webifex.io'> Webifex Labs</Link>
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  )
}
