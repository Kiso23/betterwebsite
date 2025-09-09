"use server"

import { redirect } from "next/navigation"

export interface ApplicationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  homePrice: string
  downPayment: string
  purpose: string
}

export async function submitApplication(formData: FormData) {
  const applicationData: ApplicationData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    homePrice: formData.get("homePrice") as string,
    downPayment: formData.get("downPayment") as string,
    purpose: formData.get("purpose") as string,
  }

  if (!applicationData.firstName || !applicationData.lastName || !applicationData.email || !applicationData.phone) {
    throw new Error("Please fill in all required fields")
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("New mortgage application received:", applicationData)

  const homePrice = Number.parseFloat(applicationData.homePrice) || 400000
  const downPayment = Number.parseFloat(applicationData.downPayment) || 80000
  const loanAmount = homePrice - downPayment
  const monthlyRate = 0.065 / 12 // 6.5% annual rate
  const numPayments = 30 * 12 // 30 years

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) / (Math.pow(1 + monthlyRate, numPayments) - 1)

  const applicationResult = {
    ...applicationData,
    estimatedPayment: Math.round(monthlyPayment),
    preApprovalAmount: loanAmount,
    status: "pre-approved",
  }

  redirect(
    `/application-success?payment=${applicationResult.estimatedPayment}&amount=${applicationResult.preApprovalAmount}`,
  )
}

export async function calculateMortgage(formData: FormData) {
  const homePrice = Number.parseFloat(formData.get("homePrice") as string) || 0
  const downPayment = Number.parseFloat(formData.get("downPayment") as string) || 0
  const interestRate = Number.parseFloat(formData.get("interestRate") as string) || 6.5
  const loanTerm = Number.parseInt(formData.get("loanTerm") as string) || 30

  const loanAmount = homePrice - downPayment
  const monthlyRate = interestRate / 100 / 12
  const numPayments = loanTerm * 12

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) / (Math.pow(1 + monthlyRate, numPayments) - 1)

  const totalPayment = monthlyPayment * numPayments
  const totalInterest = totalPayment - loanAmount

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest),
    loanAmount: Math.round(loanAmount),
  }
}
