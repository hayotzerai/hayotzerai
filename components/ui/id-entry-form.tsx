"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { CheckCircle, User, X } from "lucide-react"

// ID validation schema
const idSchema = z.object({
  id: z
     .coerce.number()
    .gte(8, { message: "ID must be at least 9 characters" })
})

type IdFormValues = z.infer<typeof idSchema>

interface IdEntryFormProps {
  onClose?: () => void
  showCloseButton?: boolean
  onIdSubmit?: (id: string) => void
}

export function IdEntryForm({languageType, onClose, showCloseButton = false, onIdSubmit }: IdEntryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedId, setSubmittedId] = useState("")
  
  const language = languageType === "he" ? "he" : "en"
  const isHebrew = language === "he"
  const direction = isHebrew ? "rtl" : "ltr"
  const content ={
    he:{
      title: "הכנס מספר זהות ",
      description: "אנא הזן את מספר הזיהוי שלך למטה",
      labelId: "מספר ת\"ז או ח.פ",
      signInButton: "התחבר",
      labelFooter:"תעודת הזהות שלך משמשת למטרות אימות בלבד"
     
    },
    en:{
      title: "Enter Your ID",
      description: "Please enter your identification number below",
      labelId: "Your ID",
      signInButton: "Signin",
      labelFooter:"Your ID is used for verification purposes only"

    
    }
  }
  const t = content[language];
  const form = useForm<IdFormValues>({
    resolver: zodResolver(idSchema),
    defaultValues: {
      id: 0,
    },
  })

  function onSubmit(data: IdFormValues) {
    console.log("ID submitted:", data.id)
    setSubmittedId(data.id)
    setIsSubmitted(true)

    // Call the optional callback if provided
    if (onIdSubmit) {
      onIdSubmit(data.id)
    }
  }

  function handleReset() {
    form.reset()
    setIsSubmitted(false)
  }

  if (isSubmitted) {
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
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[250px]">
          <CheckCircle className="h-16 w-16 text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-blue-700 mb-2">ID Submitted!</h2>
          <p className="text-center text-blue-600 mb-2">Your ID has been successfully submitted.</p>
          <p className="text-center font-medium text-blue-800 bg-blue-50 px-4 py-2 rounded-md mb-4">{submittedId}</p>
          <Button className="mt-2 bg-blue-500 hover:bg-blue-600" onClick={handleReset}>
            Submit Another ID
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
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
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
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-blue-700 font-medium">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {t.labelId}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your ID"
                      {...field}
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 text-lg font-medium tracking-wide"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {t.signInButton}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="bg-blue-50 border-t border-blue-100 flex justify-center">
        <p className="text-sm text-blue-600">{t.labelFooter}</p>
      </CardFooter>
    </Card>
  )
}
