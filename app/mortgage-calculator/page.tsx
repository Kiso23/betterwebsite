"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000)
  const [downPayment, setDownPayment] = useState(80000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (monthlyRate === 0) return principal / numberOfPayments

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    return monthlyPayment
  }

  const monthlyPayment = calculateMonthlyPayment()

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

      {/* Calculator Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Mortgage Calculator</h1>
          <p className="text-xl text-green-600">Calculate your monthly mortgage payment and see what you can afford.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">Loan Details</h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="homePrice" className="text-green-600">
                  Home Price
                </Label>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="downPayment" className="text-green-600">
                  Down Payment
                </Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="interestRate" className="text-green-600">
                  Interest Rate (%)
                </Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="loanTerm" className="text-green-600">
                  Loan Term (years)
                </Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-green-700">Monthly Payment</h2>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-green-700 mb-2">
                ${monthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </div>
              <p className="text-green-600">Principal & Interest</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-green-600">Loan Amount:</span>
                <span className="font-semibold text-green-700">${(homePrice - downPayment).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">Down Payment:</span>
                <span className="font-semibold text-green-700">
                  ${downPayment.toLocaleString()} ({((downPayment / homePrice) * 100).toFixed(1)}%)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">Interest Rate:</span>
                <span className="font-semibold text-green-700">{interestRate}%</span>
              </div>
            </div>

            <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Link href="/start">Get Pre-approved</Link>
            </Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
