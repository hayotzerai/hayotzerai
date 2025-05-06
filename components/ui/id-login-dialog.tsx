"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle, User, LogIn } from "lucide-react"

// ID validation schema
const idSchema = z.object({
  id: z
    .string()
    .min(6, { message: "ID must be at least 6 characters" })
    .max(12, { message: "ID cannot exceed 12 characters" }),
})

type IdFormValues = z.infer<typeof idSchema>

export function IdLoginDialog({languageType}) {
  const [open, setOpen] = useState(true)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const language = languageType === "he" ? "he" : "en"
  const isHebrew = language === "he"
  const direction = isHebrew ? "rtl" : "ltr"

const content={
    he:{
        title: "הזן את ה-ID שלך",
        description: "אנא הזן את ה-ID שלך כדי לגשת לחשבון שלך.",
        buttonText: "המשך ללוח המחוונים",
        buttonLoginText: "התחבר",
        loginSuccessTitle: "התחברות בוצעה בהצלחה!",

    },
    en:{
        title: "Enter Your ID",
        description: "Please enter your ID to access your account.",
        buttonText: "Continue to Dashboard",
        buttonLoginText: "Login",
        loginSuccessTitle: "Login Successful!",
    }

}
const t = content[language];
  // ID Login form - simplified to avoid react-hook-form issues
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IdFormValues>({
    resolver: zodResolver(idSchema),
    defaultValues: {
      id: "",
    },
  })

  // Handle ID login submission
  const onIdSubmit = handleSubmit((data) => {
    console.log("ID submitted:", data.id)
    // In a real app, you would verify the ID with your backend
    setLoginSuccess(true)
  })

  // Reset the dialog state when it's closed
  function handleOpenChange(open: boolean) {
    if (!open) {
      // Reset form and success state when dialog is closed
      reset()
      setLoginSuccess(false)
    }
    setOpen(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange} >
     
      <DialogContent className="sm:max-w-[425px]" dir={direction}>
        {!loginSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-blue-700">{t.title}</DialogTitle>
              <DialogDescription>{t.description}</DialogDescription>
            </DialogHeader>
            <form onSubmit={onIdSubmit} className="space-y-6 py-4">
              <div className="space-y-2">
                <label htmlFor="id" className="text-blue-700 font-medium flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t.title}
                </label>
                <Input
                  id="id"
                  placeholder={t.title}
                  {...register("id")}
                  className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                />
                {errors.id && <p className="text-red-500 text-sm">{errors.id.message}</p>}
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <LogIn className="h-4 w-4 mr-2" />
                  {t.buttonLoginText}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          // Login Success State
          <div className="py-6 flex flex-col items-center justify-center">
            <CheckCircle className="h-16 w-16 text-blue-500 mb-4" />
            <DialogTitle className="text-xl font-bold text-blue-700 mb-2">Login Successful!</DialogTitle>
            <DialogDescription className="text-center mb-6">
              You have successfully logged in to your account.
            </DialogDescription>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => {onclose
                setOpen(false)
              }}
            >
              {t.buttonText}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
