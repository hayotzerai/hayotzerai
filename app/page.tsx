"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/ui/contact-form"
import {OtpVerificationForm} from "@/components/ui/otp-verification-form"
import { IdLoginDialog } from "@/components/ui/id-login-dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { useState } from "react"

export default function HomePage() {
  const [showRegstriy, setShowRegstriy] = useState(false);
  const [showConnect, setShowConnect] = useState(false);
  const [showWaitConnect, setShowWaitConnect] = useState(false);
  const [language, setLanguage] = useState<"en" | "he">("he")
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
      hero: {
        badge: "AI-Powered Future",
        title: "Transform Your Work with ",
        titleHighlight: "Intelligent AI",
        description:
          "Harness the power of artificial intelligence to transform your workflow, boost productivity, and unlock new possibilities with our cutting-edge platform.",
        getStarted: "Get Started Free",
        watchDemo: "Watch Demo",
        users: "users already joined",
        trustedBy: "Trusted by innovative companies worldwide",
        insights: "AI-Powered Insights",
        realTime: "Real-time analytics",
      },
      features: {
        badge: "Features",
        title: "Powerful AI Features That ",
        titleHighlight: "Transform Your Work",
        description: "Our platform offers cutting-edge AI capabilities to help you achieve more with less effort.",
        card1: {
          title: "Smart Analysis",
          description:
            "Advanced algorithms analyze your data to provide actionable insights and recommendations in real-time.",
          feature1: "Predictive analytics",
          feature2: "Pattern recognition",
          feature3: "Anomaly detection",
        },
        card2: {
          title: "Natural Conversations",
          description: "Engage with our AI through natural language conversations that understand context and intent.",
          feature1: "Context awareness",
          feature2: "Multi-language support",
          feature3: "Voice recognition",
        },
        card3: {
          title: "Workflow Automation",
          description:
            "Automate repetitive tasks and workflows to save time and reduce errors with intelligent processes.",
          feature1: "Custom workflows",
          feature2: "Integration with tools",
          feature3: "Scheduled tasks",
        },
        learnMore: "Learn more",
        exploreAll: "Explore All Features",
      },
      howItWorks: {
        badge: "How It Works",
        title: "Get Started in ",
        titleHighlight: "Three Simple Steps",
        description:
          "Our platform is designed to be intuitive and easy to use, so you can start seeing results right away.",
        step1: {
          title: "Create Your Account",
          description:
            "Sign up in seconds with just your email. No credit card required to get started with our free tier.",
          alt: "Sign Up Process",
        },
        step2: {
          title: "Connect Your Data",
          description:
            "Securely connect your data sources with our one-click integrations or upload your files directly.",
          alt: "Data Connection",
        },
        step3: {
          title: "Experience AI Magic",
          description: "Watch as our AI transforms your workflow and delivers powerful results tailored to your needs.",
          alt: "AI Results",
        },
        startTrial: "Start Your Free Trial",
      },
      testimonials: {
        badge: "Testimonials",
        title: "What Our ",
        titleHighlight: "Customers Say",
        description: "Don't just take our word for it. Here's what our customers have to say about our AI platform.",
        testimonial1: {
          text: "This AI platform has completely transformed how our team works. We've seen a 40% increase in productivity since implementing it.",
          name: "Sarah Johnson",
          role: "CTO, TechCorp",
        },
        testimonial2: {
          text: "The natural language processing capabilities are incredible. It's like having an extra team member who's always available to help.",
          name: "Michael Chen",
          role: "Product Manager, InnovateCo",
        },
        testimonial3: {
          text: "We've been able to automate 80% of our customer support queries, leading to faster response times and happier customers.",
          name: "Emily Rodriguez",
          role: "Customer Success, ServiceFirst",
        },
      },
      pricing: {
        badge: "Pricing",
        title: "Simple, ",
        titleHighlight: "Transparent Pricing",
        description: "Choose the plan that's right for you. All plans include a 14-day free trial.",
        starter: {
          title: "Starter",
          description: "Perfect for individuals and small projects",
          price: "$29",
          period: "/month",
          feature1: "5,000 AI queries per month",
          feature2: "Basic analytics",
          feature3: "2 team members",
          feature4: "Email support",
          cta: "Get Started",
        },
        professional: {
          title: "Professional",
          description: "Ideal for growing businesses",
          price: "$99",
          period: "/month",
          feature1: "25,000 AI queries per month",
          feature2: "Advanced analytics",
          feature3: "10 team members",
          feature4: "Priority support",
          feature5: "Custom integrations",
          cta: "Get Started",
          popular: "MOST POPULAR",
        },
        enterprise: {
          title: "Enterprise",
          description: "For large organizations with advanced needs",
          price: "$299",
          period: "/month",
          feature1: "Unlimited AI queries",
          feature2: "Enterprise analytics",
          feature3: "Unlimited team members",
          feature4: "24/7 dedicated support",
          feature5: "Custom AI model training",
          cta: "Contact Sales",
        },
      },
      cta: {
        title: "Ready to Transform Your Work with AI?",
        description:
          "Join thousands of users who are already experiencing the power of our AI platform. Start your free trial today.",
        startTrial: "Start Free Trial",
        scheduleDemo: "Schedule a Demo",
        secure: "100% Secure",
        secureDesc: "Your data is always protected",
        fast: "Lightning Fast",
        fastDesc: "Get results in milliseconds",
        support: "Global Support",
        supportDesc: "24/7 assistance worldwide",
      },
      footer: {
        description:
          "Transforming the way you work with cutting-edge artificial intelligence solutions for businesses of all sizes.",
        product: "Product",
        features: "Features",
        pricing: "Pricing",
        integrations: "Integrations",
        changelog: "Changelog",
        resources: "Resources",
        documentation: "Documentation",
        tutorials: "Tutorials",
        blog: "Blog",
        support: "Support",
        company: "Company",
        about: "About",
        careers: "Careers",
        contact: "Contact",
        privacy: "Privacy Policy",
        copyright: "© 2025 AI Platform. All rights reserved.",
      },
      languageSwitch: "עברית",
    },
    he: {
      nav: {
        home: "דף הבית",
        features: "תכונות",
        howItWorks: "איך זה עובד",
        testimonials: "המלצות",
        pricing: "תמחור",
        login: "התחברות",
        signup: "הרשמה",
        platform: "פלטפורמת בינה מלאכותית היוצר AI",
      },
      hero: {
        badge: "עתיד מונע בינה מלאכותית",
        title: "שנו את העבודה שלכם עם ",
        titleHighlight: "בינה מלאכותית חכמה",
        description:
          "נצלו את כוח הבינה המלאכותית כדי לשנות את זרימת העבודה שלכם, להגביר את הפרודוקטיביות ולפתוח אפשרויות חדשות עם הפלטפורמה המתקדמת שלנו.",
        getStarted: "התחילו בחינם",
        watchDemo: "צפו בהדגמה",
        users: "משתמשים כבר הצטרפו",
        trustedBy: "בשימוש על ידי חברות חדשניות ברחבי העולם",
        insights: "תובנות מונעות בינה מלאכותית",
        realTime: "ניתוח בזמן אמת",
      },
      features: {
        badge: "תכונות",
        title: "תכונות בינה מלאכותית חזקות ש",
        titleHighlight: "משנות את העבודה שלכם",
        description: "הפלטפורמה שלנו מציעה יכולות בינה מלאכותית מתקדמות שעוזרות לכם להשיג יותר עם פחות מאמץ.",
        card1: {
          title: "ניתוח חכם",
          description: "אלגוריתמים מתקדמים מנתחים את הנתונים שלכם כדי לספק תובנות והמלצות פעולה בזמן אמת.",
          feature1: "ניתוח חיזוי",
          feature2: "זיהוי דפוסים",
          feature3: "זיהוי חריגות",
        },
        card2: {
          title: "שיחות טבעיות",
          description: "תקשרו עם הבינה המלאכותית שלנו באמצעות שיחות בשפה טבעית שמבינות הקשר וכוונה.",
          feature1: "מודעות להקשר",
          feature2: "תמיכה במספר שפות",
          feature3: "זיהוי קולי",
        },
        card3: {
          title: "אוטומציה של תהליכים",
          description: "אוטומציה של משימות ותהליכים חוזרים כדי לחסוך זמן ולהפחית טעויות עם תהליכים חכמים.",
          feature1: "תהליכים מותאמים אישית",
          feature2: "אינטגרציה עם כלים",
          feature3: "משימות מתוזמנות",
        },
        learnMore: "למידע נוסף",
        exploreAll: "גלו את כל התכונות",
      },
      howItWorks: {
        badge: "איך זה עובד",
        title: "התחילו ב",
        titleHighlight: "שלושה צעדים פשוטים",
        description: "הפלטפורמה שלנו מתוכננת להיות אינטואיטיבית וקלה לשימוש, כך שתוכלו להתחיל לראות תוצאות מיד.",
        step1: {
          title: "צרו את החשבון שלכם",
          description:
            "הירשמו תוך שניות עם האימייל שלכם בלבד. אין צורך בכרטיס אשראי כדי להתחיל עם התוכנית החינמית שלנו.",
          alt: "תהליך הרשמה",
        },
        step2: {
          title: "חברו את הנתונים שלכם",
          description:
            "חברו באופן מאובטח את מקורות הנתונים שלכם עם האינטגרציות בלחיצה אחת או העלו את הקבצים שלכם ישירות.",
          alt: "חיבור נתונים",
        },
        step3: {
          title: "חוו את הקסם של הבינה המלאכותית",
          description:
            "צפו כיצד הבינה המלאכותית שלנו משנה את זרימת העבודה שלכם ומספקת תוצאות חזקות המותאמות לצרכים שלכם.",
          alt: "תוצאות בינה מלאכותית",
        },
        startTrial: "התחילו את הניסיון החינמי שלכם",
      },
      testimonials: {
        badge: "המלצות",
        title: "מה ",
        titleHighlight: "הלקוחות שלנו אומרים",
        description: "אל תסתמכו רק על המילה שלנו. הנה מה שהלקוחות שלנו אומרים על פלטפורמת הבינה המלאכותית שלנו.",
        testimonial1: {
          text: "פלטפורמת הבינה המלאכותית הזו שינתה לחלוטין את אופן העבודה של הצוות שלנו. ראינו עלייה של 40% בפרודוקטיביות מאז שהטמענו אותה.",
          name: "שרה כהן",
          role: 'סמנכ"לית טכנולוגיות, טקטק',
        },
        testimonial2: {
          text: "יכולות עיבוד השפה הטבעית הן מדהימות. זה כמו לקבל חבר צוות נוסף שתמיד זמין לעזור.",
          name: "מיכאל לוי",
          role: 'מנהל מוצר, חדשנות בע"מ',
        },
        testimonial3: {
          text: "הצלחנו לאוטומט 80% מפניות התמיכה בלקוחות שלנו, מה שהוביל לזמני תגובה מהירים יותר ולקוחות מרוצים יותר.",
          name: "אמילי רודריגז",
          role: "מנהלת הצלחת לקוחות, שירות ראשון",
        },
      },
      pricing: {
        badge: "תמחור",
        title: "תמחור ",
        titleHighlight: "פשוט ושקוף",
        description: "בחרו את התוכנית המתאימה לכם. כל התוכניות כוללות ניסיון חינם ל-14 יום.",
        starter: {
          title: "מתחילים",
          description: "מושלם ליחידים ופרויקטים קטנים",
          price: "₪99",
          period: "/חודש",
          feature1: "5,000 שאילתות בינה מלאכותית בחודש",
          feature2: "ניתוח בסיסי",
          feature3: "2 חברי צוות",
          feature4: "תמיכה באימייל",
          cta: "התחילו עכשיו",
        },
        professional: {
          title: "מקצועי",
          description: "אידיאלי לעסקים צומחים",
          price: "₪349",
          period: "/חודש",
          feature1: "25,000 שאילתות בינה מלאכותית בחודש",
          feature2: "ניתוח מתקדם",
          feature3: "10 חברי צוות",
          feature4: "תמיכה בעדיפות גבוהה",
          feature5: "אינטגרציות מותאמות אישית",
          cta: "התחילו עכשיו",
          popular: "הכי פופולרי",
        },
        enterprise: {
          title: "ארגוני",
          description: "לארגונים גדולים עם צרכים מתקדמים",
          price: "₪999",
          period: "/חודש",
          feature1: "שאילתות בינה מלאכותית ללא הגבלה",
          feature2: "ניתוח ברמה ארגונית",
          feature3: "חברי צוות ללא הגבלה",
          feature4: "תמיכה 24/7 ייעודית",
          feature5: "אימון מודל בינה מלאכותית מותאם אישית",
          cta: "צרו קשר עם המכירות",
        },
      },
      cta: {
        title: "מוכנים לשנות את העבודה שלכם עם בינה מלאכותית?",
        description:
          "הצטרפו לאלפי משתמשים שכבר חווים את העוצמה של פלטפורמת הבינה המלאכותית שלנו. התחילו את הניסיון החינמי שלכם היום.",
        startTrial: "התחילו ניסיון חינם",
        scheduleDemo: "תאמו הדגמה",
        secure: "100% מאובטח",
        secureDesc: "הנתונים שלכם תמיד מוגנים",
        fast: "מהיר כמו ברק",
        fastDesc: "קבלו תוצאות במילישניות",
        support: "תמיכה גלובלית",
        supportDesc: "סיוע 24/7 ברחבי העולם",
      },
      footer: {
        description: "משנים את אופן העבודה שלכם עם פתרונות בינה מלאכותית מתקדמים לעסקים מכל הגדלים.",
        product: "מוצר",
        features: "תכונות",
        pricing: "תמחור",
        integrations: "אינטגרציות",
        changelog: "יומן שינויים",
        resources: "משאבים",
        documentation: "תיעוד",
        tutorials: "מדריכים",
        blog: "בלוג",
        support: "תמיכה",
        company: "חברה",
        about: "אודות",
        careers: "קריירה",
        contact: "צור קשר",
        privacy: "מדיניות פרטיות",
        copyright: "© 2025 פלטפורמת בינה מלאכותית. כל הזכויות שמורות.",
      },
      languageSwitch: "English",
    },
  }

  const t = content[language]

  return (
  
    <div className={`flex flex-col min-h-screen`} dir={direction}>
       
   


      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl text-blue-600">{t.nav.platform}</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.home}
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.nav.features}
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.nav.howItWorks}
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t.nav.testimonials}
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                {t.nav.pricing}
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-sm">
                {t.languageSwitch}
              </Button>
              <Button name="login" variant="outline" className="hidden md:flex" onClick={() => setShowConnect(s => !s)}>
                {t.nav.login}
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowRegstriy(s => !s)}>{t.nav.signup} </Button>
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
                <div className="pt-2 flex flex-col gap-2">
                  <Button variant="outline" className="w-full justify-center" >
                    {t.nav.login}
                  </Button>
                  <Button className="w-full justify-center bg-blue-600 hover:bg-blue-700" onClick={() => setShowRegstriy(true)}>{t.nav.signup}</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

  
      {/* Hero Section */}
      <section className="w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-white -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-4 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span> {t.hero.badge}
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  {t.hero.title}
                  <span className="text-blue-600">{t.hero.titleHighlight}</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">{t.hero.description}</p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30"
                >
                  {t.hero.getStarted}
                  {isHebrew ? (
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </Button>
                <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  {t.hero.watchDemo}
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-blue-600">5,000+</span> {t.hero.users}
                </div>
              </div>
            </div>
            <div className={`flex justify-center ${isHebrew ? "lg:justify-start" : "lg:justify-end"} relative`}>
              <div className="absolute -z-10 w-full h-full bg-gradient-to-tr from-blue-600/20 to-blue-400/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl shadow-blue-600/10 border border-blue-100 w-full max-w-md">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="AI Dashboard"
                  width={500}
                  height={400}
                  className="rounded-xl object-cover w-full"
                />
                <div
                  className={`absolute -bottom-6 ${
                    isHebrew ? "-left-6" : "-right-6"
                  } bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 border border-blue-100`}
                >
                  <div className="bg-blue-600 rounded-full p-2 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{t.hero.insights}</p>
                    <p className="text-xs text-gray-500">{t.hero.realTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center mb-6">{t.hero.trustedBy}</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span> {t.features.badge}
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                {t.features.title}
                <span className="text-blue-600">{t.features.titleHighlight}</span>
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed mx-auto">{t.features.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
              <div
                className={`absolute top-0 ${
                  isHebrew ? "right-0" : "left-0"
                } h-1 w-full bg-gradient-to-${isHebrew ? "l" : "r"} from-blue-400 to-blue-600`}
              ></div>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Brain className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{t.features.card1.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{t.features.card1.description}</CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card1.feature1}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card1.feature2}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card1.feature3}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="#" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                    {t.features.learnMore}{" "}
                    <ChevronRight className={`h-4 w-4 ${isHebrew ? "mr-1 rotate-180" : "ml-1"}`} />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
              <div
                className={`absolute top-0 ${
                  isHebrew ? "right-0" : "left-0"
                } h-1 w-full bg-gradient-to-${isHebrew ? "l" : "r"} from-blue-400 to-blue-600`}
              ></div>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{t.features.card2.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{t.features.card2.description}</CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card2.feature1}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card2.feature2}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card2.feature3}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="#" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                    {t.features.learnMore}{" "}
                    <ChevronRight className={`h-4 w-4 ${isHebrew ? "mr-1 rotate-180" : "ml-1"}`} />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
              <div
                className={`absolute top-0 ${
                  isHebrew ? "right-0" : "left-0"
                } h-1 w-full bg-gradient-to-${isHebrew ? "l" : "r"} from-blue-400 to-blue-600`}
              ></div>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{t.features.card3.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{t.features.card3.description}</CardDescription>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card3.feature1}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card3.feature2}</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.features.card3.feature3}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="#" className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline">
                    {t.features.learnMore}{" "}
                    <ChevronRight className={`h-4 w-4 ${isHebrew ? "mr-1 rotate-180" : "ml-1"}`} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              {t.features.exploreAll}
              {isHebrew ? <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> : <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span> {t.howItWorks.badge}
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                {t.howItWorks.title}
                <span className="text-blue-600">{t.howItWorks.titleHighlight}</span>
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed mx-auto">{t.howItWorks.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>

            <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl p-8 border border-blue-100 shadow-lg relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t.howItWorks.step1.title}</h3>
              <p className="text-center text-gray-600">{t.howItWorks.step1.description}</p>
              <img
                src="/placeholder.svg?height=120&width=200"
                alt={t.howItWorks.step1.alt}
                className="mt-4 rounded-lg w-full h-32 object-cover"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl p-8 border border-blue-100 shadow-lg relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t.howItWorks.step2.title}</h3>
              <p className="text-center text-gray-600">{t.howItWorks.step2.description}</p>
              <img
                src="/placeholder.svg?height=120&width=200"
                alt={t.howItWorks.step2.alt}
                className="mt-4 rounded-lg w-full h-32 object-cover"
              />
            </div>

            <div className="flex flex-col items-center space-y-4 bg-white rounded-2xl p-8 border border-blue-100 shadow-lg relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t.howItWorks.step3.title}</h3>
              <p className="text-center text-gray-600">{t.howItWorks.step3.description}</p>
              <img
                src="/placeholder.svg?height=120&width=200"
                alt={t.howItWorks.step3.alt}
                className="mt-4 rounded-lg w-full h-32 object-cover"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              {t.howItWorks.startTrial}
              {isHebrew ? <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> : <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span> {t.testimonials.badge}
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                {t.testimonials.title}
                <span className="text-blue-600">{t.testimonials.titleHighlight}</span>
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed mx-auto">{t.testimonials.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{t.testimonials.testimonial1.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="User"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.testimonials.testimonial1.name}</h4>
                    <p className="text-sm text-gray-500">{t.testimonials.testimonial1.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{t.testimonials.testimonial2.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="User"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.testimonials.testimonial2.name}</h4>
                    <p className="text-sm text-gray-500">{t.testimonials.testimonial2.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{t.testimonials.testimonial3.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="User"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.testimonials.testimonial3.name}</h4>
                    <p className="text-sm text-gray-500">{t.testimonials.testimonial3.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span> {t.pricing.badge}
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                {t.pricing.title}
                <span className="text-blue-600">{t.pricing.titleHighlight}</span>
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed mx-auto">{t.pricing.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-16">
            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-xl">{t.pricing.starter.title}</CardTitle>
                <CardDescription>{t.pricing.starter.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{t.pricing.starter.price}</span>
                  <span className="text-gray-500 ml-1">{t.pricing.starter.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.starter.feature1}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.starter.feature2}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.starter.feature3}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.starter.feature4}</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">{t.pricing.starter.cta}</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-600 bg-white shadow-xl hover:shadow-2xl transition-all duration-200 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {t.pricing.professional.popular}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{t.pricing.professional.title}</CardTitle>
                <CardDescription>{t.pricing.professional.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{t.pricing.professional.price}</span>
                  <span className="text-gray-500 ml-1">{t.pricing.professional.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.professional.feature1}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.professional.feature2}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.professional.feature3}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.professional.feature4}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.professional.feature5}</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">{t.pricing.professional.cta}</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-white shadow-lg hover:shadow-xl transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-xl">{t.pricing.enterprise.title}</CardTitle>
                <CardDescription>{t.pricing.enterprise.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{t.pricing.enterprise.price}</span>
                  <span className="text-gray-500 ml-1">{t.pricing.enterprise.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.enterprise.feature1}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.enterprise.feature2}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.enterprise.feature3}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.enterprise.feature4}</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className={`h-5 w-5 text-blue-600 ${isHebrew ? "ml-2" : "mr-2"}`} />
                    <span>{t.pricing.enterprise.feature5}</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">{t.pricing.enterprise.cta}</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.cta.title}</h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">{t.cta.description}</p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  {t.cta.startTrial}
                  {isHebrew ? (
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                  ) : (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t.cta.scheduleDemo}
                </Button>
              </div>
            </div>
            <div className={`flex justify-center ${isHebrew ? "lg:justify-start" : "lg:justify-end"}`}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white rounded-full p-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{t.cta.secure}</h3>
                    <p className="text-blue-100 text-sm">{t.cta.secureDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white rounded-full p-2">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{t.cta.fast}</h3>
                    <p className="text-blue-100 text-sm">{t.cta.fastDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-full p-2">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{t.cta.support}</h3>
                    <p className="text-blue-100 text-sm">{t.cta.supportDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
   
      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center gap-2">
                <Cpu className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white">{t.nav.platform}</span>
              </div>
              <p className="text-gray-400 max-w-xs">{t.footer.description}</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">{t.footer.productproduct}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.features}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.pricing}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.integrations}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.changelog}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">{t.footer.resources}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.documentation}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.tutorials}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.blog}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.support}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">{t.footer.company}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.about}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.careers}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.contact}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t.footer.privacy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Connet & Registry*/}
      <div className="relative z-50">
      {showRegstriy && (
       <div className="fixed top-0 wfixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
        <div className="wfixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full"> {showRegstriy && ( <ContactForm   languageType={language} onClose={() => setShowRegstriy(false)} showCloseButton={true} />)}</div>
        </div>
      )}


      {showConnect && (
        
        <div className="wfixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">{showConnect && ( <IdLoginDialog languageType={language}/>)}</div>
      
      )}


      {showWaitConnect && (
        <div className="fixed top-0 wfixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
           <div> {showWaitConnect && ( <OtpVerificationForm languageType={language}/>)}</div>
      </div>
      )}
      </div>


    </div>
  )
}
