import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary">
                Better
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about-us" className="text-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/mortgage-calculator" className="text-foreground hover:text-primary">
                Calculator
              </Link>
              <Link href="/start" className="text-foreground hover:text-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">About Better</h1>
          <p className="text-xl text-green-600">
            We're on a mission to make homeownership simpler, faster, and more accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-700">Our Mission</h2>
            <p className="text-green-600 mb-6">
              Better is a digital mortgage lender that uses technology to make the home buying process faster, more
              transparent, and more affordable. We believe everyone deserves a better mortgage experience.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/start">Start Your Journey</Link>
            </Button>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Why Choose Better?</h3>
            <ul className="space-y-3 text-green-700">
              <li>• No hidden fees or surprises</li>
              <li>• Digital-first process</li>
              <li>• Expert support when you need it</li>
              <li>• Competitive rates</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 border-2 hover:border-green-200 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Founded in 2016</h3>
            <p className="text-green-600">Started with a vision to revolutionize mortgage lending</p>
          </Card>
          <Card className="p-6 border-2 hover:border-green-200 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-green-700">$100B+ Funded</h3>
            <p className="text-green-600">Helping thousands of families achieve homeownership</p>
          </Card>
          <Card className="p-6 border-2 hover:border-green-200 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Award Winning</h3>
            <p className="text-green-600">Recognized for innovation and customer service</p>
          </Card>
        </div>
      </main>
    </div>
  )
}
