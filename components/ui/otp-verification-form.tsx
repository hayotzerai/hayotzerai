"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Mail, Phone, RefreshCw } from "lucide-react"

// OTP validation schema
const otpSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "OTP must be 6 digits" })
    .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
})

type OtpFormValues = z.infer<typeof otpSchema>

interface ContactInfo {
  email: string
  phone: string
}

export function OtpVerificationForm({languageType}) {
  const [method, setMethod] = useState<"email" | "phone">("email")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [timeLeft, setTimeLeft] = useState(60)
  const [otpSent, setOtpSent] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const language = languageType === "he" ? "he" : "en"
  const isHebrew = language === "he"
  const direction = isHebrew ? "rtl" : "ltr"
  const content ={
    he: {
      title: "קוד אימות",
      description: "הכנס את הקוד בן 6 הספרות שנשלח ל",
      emailLabel: "דוא\"ל",
      phoneLabel: "טלפון",
      success: "אימות הצליח!",
      successMessage: "זהותך אומתה בהצלחה.",
      vericationCode: "קוד אימות",
      enterCode: "הכנס את הקוד בן 6 הספרות שנשלח ל",
      codeSentTo: "שלחנו קוד אימות ל",
      enterVerficationCode: "הכנס את קוד האימות",
      resendCode: "שלח שוב קוד",
      sending: "שולח...",   
      didnotReciveCodeMessage: "לא קיבלת קוד? בדוק את תיק הספאם שלך",

    },
    en: {
      title: "Verification Code",
      description: "Enter the 6-digit code sent to your",
      emailLabel: "Email",
      phoneLabel: "Phone",
      success: "Verification Successful!",
      successMessage: "Your identity has been verified successfully.",
      vericationCode: "Verification Code",
      enterCode: "Enter the 6-digit code sent to your",
      codeSentTo :" We sent a verification code to" ,
      enterVerficationCode: "Enter the verification code",
        resendCode: "Resend Code",
        sending: "Sending...",
        didnotReciveCodeMessage: "Didn't receive a code? Check your spam folder",
      },
  }
  const t = content[language];
  // Mock contact info - in a real app, this would come from your authentication context or previous form
  const contactInfo: ContactInfo = {
    email: "j***@example.com",
    phone: "+1 (***) ***-4567",
  }

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  })

  // Handle countdown timer
  useEffect(() => {
    if (!otpSent) return

    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timerId)
    }
  }, [timeLeft, otpSent])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Handle OTP input
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""))

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    // Update the OTP values
    const newOtpValues = [...otpValues]

    // If pasting a full code
    if (value.length > 1) {
      const pastedValues = value.slice(0, 6).split("")
      for (let i = 0; i < pastedValues.length; i++) {
        if (i + index < 6) {
          newOtpValues[i + index] = pastedValues[i]
        }
      }
      setOtpValues(newOtpValues)

      // Focus the next empty input or the last one
      const nextIndex = Math.min(index + value.length, 5)
      inputRefs.current[nextIndex]?.focus()
    } else {
      // Single digit input
      newOtpValues[index] = value
      setOtpValues(newOtpValues)

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }

    // Update the form value
    form.setValue("otp", newOtpValues.join(""), { shouldValidate: true })
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (!otpValues[index] && index > 0) {
        // If current input is empty and backspace is pressed, focus previous input
        const newOtpValues = [...otpValues]
        newOtpValues[index - 1] = ""
        setOtpValues(newOtpValues)
        inputRefs.current[index - 1]?.focus()
        form.setValue("otp", newOtpValues.join(""), { shouldValidate: true })
      }
    }
  }

  // Send OTP function
  const sendOtp = () => {
    setIsResending(true)

    // Simulate API call to send OTP
    setTimeout(() => {
      setOtpSent(true)
      setTimeLeft(60)
      setIsResending(false)
      console.log(`OTP sent to ${method}: ${method === "email" ? contactInfo.email : contactInfo.phone}`)
    }, 1000)
  }

  // Resend OTP
  const resendOtp = () => {
    if (timeLeft > 0) return
    sendOtp()
  }

  // Submit form
  function onSubmit(data: OtpFormValues) {
    console.log("OTP submitted:", data.otp)
    // In a real app, you would verify the OTP with your backend
    setIsSubmitted(true)
  }

  // Initial OTP send
  useEffect(() => {
    if (!otpSent) {
      sendOtp()
    }
  }, [method]) // Re-send when method changes

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto border-blue-300 shadow-lg" dir={direction}>
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
          <CheckCircle className="h-16 w-16 text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{t.success}</h2>
          <p className="text-center text-blue-600">{t.successMessage}</p>
          <Button className="mt-6 bg-blue-500 hover:bg-blue-600" onClick={() => setIsSubmitted(false)}>
            Verify Another Account
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto border-blue-300 shadow-lg "  dir={direction}>
      <CardHeader className="bg-blue-50 rounded-t-lg border-b border-blue-100">
        <CardTitle className="text-blue-700 text-2xl">{t.vericationCode}</CardTitle>
        <CardDescription className="text-blue-600">{t.enterCode} {method}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs
          defaultValue="email"
          value={method}
          onValueChange={(value) => setMethod(value as "email" | "phone")}
          className="mb-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{t.emailLabel}</span>
            </TabsTrigger>
            <TabsTrigger value="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{t.phoneLabel}</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="email" className="mt-4">
            <p className="text-sm text-blue-600 mb-2">
             {t.codeSentTo} <span className="font-medium">{contactInfo.email}</span>
            </p>
          </TabsContent>
          <TabsContent value="phone" className="mt-4">
            <p className="text-sm text-blue-600 mb-2">
            {t.codeSentTo}  <span className="font-medium">{contactInfo.phone}</span>
            </p>
          </TabsContent>
        </Tabs>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-blue-700">{t.enterVerficationCode}</label>
                <span className="text-sm text-blue-600">{formatTime(timeLeft)}</span>
              </div>

              <div className="flex gap-2 justify-between">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otpValues[index]}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-bold border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    aria-label={`Digit ${index + 1}`}
                  />
                ))}
              </div>

              {form.formState.errors.otp && (
                <p className="text-red-500 text-sm mt-2">{form.formState.errors.otp.message}</p>
              )}
            </div>

            <div className="pt-2 space-y-4">
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!form.formState.isValid || isResending}
              >
               {t.title}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                onClick={resendOtp}
                disabled={timeLeft > 0 || isResending}
              >
                {isResending ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    {t.sending}
                  </>
                ) : timeLeft > 0 ? (
                  `${t.resendCode} ${formatTime(timeLeft)}`
                ) : (
                  (language == "en") ? "Resend Code" : "שלח שוב קוד"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="bg-blue-50 border-t border-blue-100 flex justify-center">
        <p className="text-sm text-blue-600">{t.didnotReciveCodeMessage}</p>
      </CardFooter>
    </Card>
  )
}
