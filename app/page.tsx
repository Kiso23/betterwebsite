import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-700 mb-6 text-balance leading-tight">
            The mortgage lender America can trust
          </h1>
          <p className="text-lg sm:text-xl text-green-600 mb-8 max-w-3xl mx-auto text-pretty">
            Get pre-approved in as little as 3 minutes. Close in as few as 21 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 h-auto min-w-[200px] bg-green-600 hover:bg-green-700 text-white shadow-lg"
            >
              <Link href="/start">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="text-lg px-8 py-4 h-auto min-w-[200px] border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 bg-transparent"
            >
              <Link href="/mortgage-calculator">Calculate Payment</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-24">
          <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 hover:shadow-green-100/50">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Fast Pre-approval</h3>
            <p className="text-green-600">Get pre-approved in minutes, not days</p>
          </Card>
          <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 hover:shadow-green-100/50">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Low Rates</h3>
            <p className="text-green-600">Competitive rates with no hidden fees</p>
          </Card>
          <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 hover:shadow-green-100/50 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-green-700">Quick Close</h3>
            <p className="text-green-600">Close your loan in as few as 21 days</p>
          </Card>
        </div>

        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-sm text-green-600 mb-6">Trusted by thousands of homebuyers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-green-700">$100B+</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold text-green-700">500K+</div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-2xl font-bold text-green-700">4.8★</div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-2 text-xs text-green-600">
            <span>Funded</span>
            <span>Happy Customers</span>
            <span>Average Rating</span>
          </div>
        </div>
      </main>
    </div>
  )
}
