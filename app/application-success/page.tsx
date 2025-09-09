import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface PageProps {
  searchParams: {
    payment?: string
    amount?: string
  }
}

export default function ApplicationSuccessPage({ searchParams }: PageProps) {
  const monthlyPayment = searchParams.payment || "0"
  const preApprovalAmount = searchParams.amount || "0"

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

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Congratulations!</h1>
          <p className="text-xl text-muted-foreground">You've been pre-approved for your mortgage.</p>
        </div>

        <Card className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Your Pre-Approval Details</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">Pre-Approval Amount</h3>
              <p className="text-3xl font-bold text-primary">${Number.parseInt(preApprovalAmount).toLocaleString()}</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">Estimated Monthly Payment</h3>
              <p className="text-3xl font-bold text-primary">${Number.parseInt(monthlyPayment).toLocaleString()}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Your pre-approval is valid for 90 days. A loan specialist will contact you within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/mortgage-calculator">View Calculator</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
