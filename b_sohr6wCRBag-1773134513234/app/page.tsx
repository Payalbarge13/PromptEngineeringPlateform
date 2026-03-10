import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Lightbulb, 
  Code2, 
  Rocket, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Brain,
  MessageSquare,
  Zap,
  Target,
  Layers
} from "lucide-react"

const learningPaths = [
  {
    title: "Introduction",
    description: "Understand the fundamentals of prompt engineering and why it matters in the age of AI.",
    href: "/introduction",
    icon: BookOpen,
    badge: "Start Here",
    badgeVariant: "default" as const,
    topics: ["What is Prompt Engineering?", "The Evolution of AI Interaction", "Key Principles"],
  },
  {
    title: "Core Concepts",
    description: "Master the essential building blocks: prompt structure, context, and basic techniques.",
    href: "/core-concepts",
    icon: Layers,
    badge: "Essential",
    badgeVariant: "secondary" as const,
    topics: ["Prompt Anatomy", "Zero-Shot Learning", "Few-Shot Learning", "Context Windows"],
  },
  {
    title: "Advanced Techniques",
    description: "Explore sophisticated methods like chain-of-thought reasoning and prompt chaining.",
    href: "/advanced",
    icon: Rocket,
    badge: "Advanced",
    badgeVariant: "outline" as const,
    topics: ["Chain-of-Thought", "Role Prompting", "Self-Consistency", "Tree of Thoughts"],
  },
  {
    title: "Practical Examples",
    description: "Apply your knowledge with real-world examples across various use cases.",
    href: "/examples",
    icon: Code2,
    badge: "Hands-On",
    badgeVariant: "secondary" as const,
    topics: ["Content Generation", "Code Assistance", "Data Analysis", "Creative Writing"],
  },
]

const features = [
  {
    icon: Brain,
    title: "Comprehensive Theory",
    description: "Deep dive into the theoretical foundations of effective prompt design.",
  },
  {
    icon: MessageSquare,
    title: "Clear Explanations",
    description: "Complex concepts broken down into digestible, easy-to-understand sections.",
  },
  {
    icon: Code2,
    title: "Practical Examples",
    description: "Real-world prompt examples with detailed explanations of why they work.",
  },
  {
    icon: Target,
    title: "Best Practices",
    description: "Learn industry-tested patterns and avoid common pitfalls.",
  },
]

const quickStats = [
  { label: "Topics Covered", value: "20+" },
  { label: "Code Examples", value: "50+" },
  { label: "Techniques", value: "15+" },
  { label: "Use Cases", value: "25+" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/50 to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="mr-1 h-3 w-3" />
              Comprehensive Learning Resource
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Master the Art of{" "}
              <span className="text-primary">Prompt Engineering</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              From foundational concepts to advanced techniques, learn how to craft effective prompts 
              that unlock the full potential of large language models.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/introduction">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Learning
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/examples">
                  View Examples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {quickStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Why Learn Prompt Engineering?</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Effective prompt engineering is the key to getting consistent, high-quality outputs from AI models.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border bg-card hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Learning Path</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Follow our structured curriculum to go from beginner to advanced prompt engineer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {learningPaths.map((path, index) => {
              const Icon = path.icon
              return (
                <Link key={path.title} href={path.href} className="group">
                  <Card className="h-full border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">Part {index + 1}</span>
                              <Badge variant={path.badgeVariant} className="text-xs">
                                {path.badge}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl mt-1 group-hover:text-primary transition-colors">
                              {path.title}
                            </CardTitle>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 leading-relaxed">
                        {path.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {path.topics.map((topic) => (
                          <div key={topic} className="flex items-center gap-1 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 sm:p-12">
            <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Ready to Get Started?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Begin your journey into prompt engineering with our comprehensive introduction guide.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link href="/introduction">
                Begin with Introduction
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <Sparkles className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium">PromptCraft</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A comprehensive resource for learning prompt engineering.
          </p>
        </div>
      </footer>
    </div>
  )
}
