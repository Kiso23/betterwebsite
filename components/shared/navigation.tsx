import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              Better
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about-us" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/mortgage-calculator" className="text-foreground hover:text-primary transition-colors">
              Calculator
            </Link>
            <Button asChild variant="default" size="sm">
              <Link href="/start">Get Started</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button asChild variant="outline" size="sm">
              <Link href="/start">Start</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
