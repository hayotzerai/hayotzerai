"use client"
import { redirect } from 'next/navigation'
import { useSearchParams } from "next/navigation";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/ui/contact-form"
import {OtpVerificationForm} from "@/components/ui/otp-verification-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import {
  Brain,
  Zap,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Menu,
  ChevronRight,
  Star,
  CheckCircle,
  Globe,
  Shield,
  Cpu,
  X,
} from "lucide-react"



export default function SignUp({languageType}) {

  const searchParams = useSearchParams();
  let leng = searchParams.get("language");
 
  if(languageType === "" || languageType === null || languageType === undefined){
    languageType = String(leng);
  }
 
  console.log("The selected language :" + languageType);
  
 const [language, setLanguage] = useState<"en" | "he">(languageType)
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

 
 const isHebrew = language === "he"
 const direction = isHebrew ? "rtl" : "ltr"

 const toggleLanguage = () => {
   setLanguage(language === "en" ? "he" : "en")
 }
const content = {
 en: {
   nav: {
     home: "Home",
     features: "Features",
     howItWorks: "How It Works",
     testimonials: "Testimonials",
     pricing: "Pricing",
     login: "Log In",
     signup: "Sign Up",
     platform: "AI Platform",
   },
   languageSwitch: "Englishe",
  },
   he:{
     nav:{
       home: "דף הבית",
       features: "תכונות",
       howItWorks: "איך זה עובד",
       testimonials: "המלצות",
       pricing: "תמחור",
       login: "התחברות",
       signup: "הרשמה",
       platform: "פלטפורמת בינה מלאכותית היוצר AI",

     },
     languageSwitch: "עברית",

   }
 }


 const t = content[language]

 
    return (
      <div className={`flex flex-col min-h-screen`}>



<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl text-blue-600">{t.nav.platform}</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.home}
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-sm">
                {t.languageSwitch}
              </Button>
              <Button name="login" variant="outline" className="hidden md:flex" 
               onClick={() => redirect(`/signin?language=${language}`)}
              >
                {t.nav.login}
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">{t.nav.signup} </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="#features"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.features}
                </Link>
                <Link
                  href="#how-it-works"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.howItWorks}
                </Link>
                <Link
                  href="#testimonials"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.testimonials}
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.pricing}
                </Link>
            
              </nav>
            </div>
          )}
        </div>
      </header>

<section className="w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
    
        <ContactForm   languageType={language} />
    </section>













      </div>
    )
  }