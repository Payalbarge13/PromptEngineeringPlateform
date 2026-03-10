"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  BookOpen, 
  Lightbulb, 
  Code2, 
  Rocket, 
  FileText,
  ChevronRight,
  Sparkles,
  MessageSquare,
  Layers,
  Target,
  Zap,
  Settings,
  Brain
} from "lucide-react"

const sidebarSections = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "/introduction", icon: BookOpen },
      { name: "What is Prompt Engineering?", href: "/introduction#what-is", icon: Lightbulb },
      { name: "Why It Matters", href: "/introduction#importance", icon: Target },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { name: "Overview", href: "/core-concepts", icon: Layers },
      { name: "Prompt Structure", href: "/core-concepts#structure", icon: FileText },
      { name: "Context & Instructions", href: "/core-concepts#context", icon: MessageSquare },
      { name: "Zero-Shot Prompting", href: "/core-concepts#zero-shot", icon: Zap },
      { name: "Few-Shot Prompting", href: "/core-concepts#few-shot", icon: Code2 },
    ],
  },
  {
    title: "Advanced Techniques",
    items: [
      { name: "Overview", href: "/advanced", icon: Rocket },
      { name: "Chain-of-Thought", href: "/advanced#chain-of-thought", icon: Brain },
      { name: "Role Prompting", href: "/advanced#role-prompting", icon: Settings },
      { name: "Prompt Chaining", href: "/advanced#chaining", icon: Layers },
      { name: "Self-Consistency", href: "/advanced#self-consistency", icon: Target },
    ],
  },
  {
    title: "Practical Examples",
    items: [
      { name: "All Examples", href: "/examples", icon: Code2 },
      { name: "Content Generation", href: "/examples#content", icon: FileText },
      { name: "Code Assistance", href: "/examples#code", icon: Code2 },
      { name: "Data Analysis", href: "/examples#data", icon: Layers },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 lg:top-16 border-r border-border bg-sidebar overflow-y-auto">
      <nav className="flex-1 px-4 py-6 space-y-6">
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || pathname.startsWith(item.href.split('#')[0])
                
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                      {isActive && (
                        <ChevronRight className="ml-auto h-4 w-4 text-primary" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Sidebar footer */}
      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-lg bg-primary/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Pro Tip</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Start with the Introduction to build a solid foundation before exploring advanced techniques.
          </p>
        </div>
      </div>
    </aside>
  )
}
