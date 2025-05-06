"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CheckCircle, User, Mail, Phone, IceCream, IdCard , X} from "lucide-react"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Please enter a valid phone number",
  }),
  idNumber: z.string().min(1, { message: "ID Number is required" }),
})


interface ContactFormProps {
  onClose?: () => void
  showCloseButton?: boolean
  languageType?:"he"
  
}

type FormValues = z.infer<typeof formSchema>

export function ContactForm({languageType,onClose, showCloseButton = false }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  //const [language, setLanguage] = useState<"en" | "he">("he")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  //setLanguage(languageType);
  const language = languageType === "he" ? "he" : "en"
  const isHebrew = language === "he"
  const direction = isHebrew ? "rtl" : "ltr"
  
  const content ={
    he:{
      title: "פרטי קשר",
      description: "אנא מלא את פרטיך למטה",
      nameLabel: "שם מלא או חברה",
      idNumberLabel: "מספר ת\"ז או ח.פ",
      emailLabel: "כתובת דוא\"ל",
      phoneLabel: "מספר טלפון",
      submitButton: "שלח פרטים",
      thankYouTitle: "תודה!",
      thankYouMessage: "הפרטים שלך נשלחו בהצלחה.",
      footerMessage: "כל הפרטים שלך נשמרים בסודיות",
    },
    en:{
      title: "Contact Information",
      description: "Please fill in your details below",
      nameLabel: "Full Name or Company",
      idNumberLabel: "ID Number or Company Number",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      submitButton: "Submit Information",
      thankYouTitle: "Thank You!",
      thankYouMessage: "Your information has been submitted successfully.",
      footerMessage: "All your information is kept confidential",
    }
  }
  const t = content[language];


  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      idNumber: "",
    },
  })
 

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    // In a real app, you would send this data to your backend
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto border-blue-300 shadow-lg relative">
            {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
          <CheckCircle className="h-16 w-16 text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{t.thankYouTitle}</h2>
          <p className="text-center text-blue-600">{t.thankYouMessage}.</p>
          <Button className="mt-6 bg-blue-500 hover:bg-blue-600" onClick={() => setIsSubmitted(false)}>
            Submit Another Response
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto border-blue-300 shadow-lg relative" dir={direction}>
            {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close form"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      <CardHeader className="bg-blue-50 rounded-t-lg border-b border-blue-100">
        <CardTitle className="text-blue-700 text-2xl">{t.title}</CardTitle>
        <CardDescription className="text-blue-600">{t.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-700 font-medium">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                        {t.nameLabel}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>

              )}
              
            />
              <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-700 font-medium">
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                        {t.emailLabel}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.doe@example.com"
                      {...field}
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-700 font-medium">
                    <span className="flex items-center gap-2">
                      <IdCard className="h-4 w-4" />
                        {t.idNumberLabel}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="id"
                      placeholder="123456789"
                      {...field}
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-700 font-medium">
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                        {t.phoneLabel}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      {...field}
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {t.submitButton}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="bg-blue-50 border-t border-blue-100 flex justify-center">
        <p className="text-sm text-blue-600">{t.footerMessage}</p>
      </CardFooter>
    </Card>
  )
}
