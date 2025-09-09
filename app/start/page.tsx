import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { submitApplication } from "@/lib/actions"

export default function StartPage() {
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

      {/* Application Form */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Get Started</h1>
          <p className="text-xl text-green-600">Tell us about yourself and get pre-approved in minutes.</p>
        </div>

        <Card className="p-8">
          <form action={submitApplication} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-green-600">
                  First Name
                </Label>
                <Input id="firstName" name="firstName" className="mt-2" required />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-green-600">
                  Last Name
                </Label>
                <Input id="lastName" name="lastName" className="mt-2" required />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-green-600">
                Email Address
              </Label>
              <Input id="email" name="email" type="email" className="mt-2" required />
            </div>

            <div>
              <Label htmlFor="phone" className="text-green-600">
                Phone Number
              </Label>
              <Input id="phone" name="phone" type="tel" className="mt-2" required />
            </div>

            <div>
              <Label htmlFor="purpose" className="text-green-600">
                Loan Purpose
              </Label>
              <Select name="purpose">
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select loan purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="purchase">Purchase a home</SelectItem>
                  <SelectItem value="refinance">Refinance</SelectItem>
                  <SelectItem value="cashout">Cash-out refinance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="homePrice" className="text-green-600">
                  Home Price
                </Label>
                <Input
                  id="homePrice"
                  name="homePrice"
                  type="number"
                  className="mt-2"
                  placeholder="400000"
                  defaultValue="400000"
                />
              </div>
              <div>
                <Label htmlFor="downPayment" className="text-green-600">
                  Down Payment
                </Label>
                <Input
                  id="downPayment"
                  name="downPayment"
                  type="number"
                  className="mt-2"
                  placeholder="80000"
                  defaultValue="80000"
                />
              </div>
            </div>

            <Button type="submit" className="w-full text-lg py-3 bg-green-600 hover:bg-green-700 text-white">
              Get Pre-approved
            </Button>

            <p className="text-sm text-green-600 text-center">
              By clicking "Get Pre-approved", you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </Card>
      </main>
    </div>
  )
}
