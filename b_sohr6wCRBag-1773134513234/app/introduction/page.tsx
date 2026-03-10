import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Target, Lightbulb, History, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/content/code-block"
import { TableOfContents } from "@/components/content/table-of-contents"
import { ArticleNavigation } from "@/components/content/article-navigation"

const tocItems = [
  { id: "what-is-prompt-engineering", label: "What is Prompt Engineering?" },
  { id: "why-it-matters", label: "Why It Matters" },
  { id: "brief-history", label: "Brief History" },
  { id: "key-terminology", label: "Key Terminology" },
  { id: "your-first-prompt", label: "Your First Prompt" },
]

export default function IntroductionPage() {
  return (
    <div className="flex">
      <article className="flex-1 max-w-4xl px-6 py-10 lg:px-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Beginner</Badge>
            <span className="text-sm text-muted-foreground">10 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Introduction to Prompt Engineering</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Learn the fundamentals of prompt engineering and discover how to effectively communicate with AI language models to achieve your desired outcomes.
          </p>
        </div>

        <Separator className="my-8" />

        {/* What is Prompt Engineering */}
        <section id="what-is-prompt-engineering" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">What is Prompt Engineering?</h2>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prompt engineering is the art and science of designing and refining input prompts to effectively communicate with large language models (LLMs) like GPT-4, Claude, or Gemini. It involves crafting instructions, context, and examples that guide AI systems to produce accurate, relevant, and useful responses.
            </p>
            
            <Card className="my-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-sm font-medium mb-2">Key Definition</p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Prompt Engineering</strong> is the process of structuring text that can be interpreted and understood by a generative AI model to produce specific, desired outputs.
                </p>
              </CardContent>
            </Card>

            <p className="text-muted-foreground leading-relaxed">
              Think of it as learning a new language - the language of AI communication. Just as you would carefully choose your words when speaking to a person from a different culture, prompt engineering teaches you how to structure your requests to get the best possible results from AI systems.
            </p>
          </div>
        </section>

        {/* Why It Matters */}
        <section id="why-it-matters" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Why Prompt Engineering Matters</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            As AI becomes increasingly integrated into our workflows, the ability to effectively communicate with these systems becomes a crucial skill. Here&apos;s why prompt engineering matters:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {[
              {
                title: "Better Results",
                description: "Well-crafted prompts dramatically improve the quality and relevance of AI outputs."
              },
              {
                title: "Cost Efficiency",
                description: "Efficient prompts reduce token usage and API costs while maintaining quality."
              },
              {
                title: "Time Savings",
                description: "Proper prompting reduces iteration cycles and gets you to the right answer faster."
              },
              {
                title: "Unlock Capabilities",
                description: "Advanced techniques unlock hidden capabilities in AI models most users never discover."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Brief History */}
        <section id="brief-history" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <History className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Brief History</h2>
          </div>

          <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
            {[
              { year: "2017", event: "Transformers Introduced", description: "Google introduces the Transformer architecture, laying the foundation for modern LLMs." },
              { year: "2020", event: "GPT-3 Release", description: "OpenAI releases GPT-3, demonstrating the power of few-shot learning through prompts." },
              { year: "2022", event: "ChatGPT Launch", description: "ChatGPT brings conversational AI to the mainstream, popularizing prompt engineering." },
              { year: "2023-24", event: "Prompt Engineering Matures", description: "Advanced techniques like chain-of-thought and tree-of-thought prompting emerge." },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[31px] h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="text-sm font-medium text-primary mb-1">{item.year}</div>
                <div className="font-semibold mb-1">{item.event}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Terminology */}
        <section id="key-terminology" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Key Terminology</h2>
          </div>

          <div className="space-y-4">
            {[
              { term: "Prompt", definition: "The input text or instruction given to an AI model to generate a response." },
              { term: "Token", definition: "The basic unit of text that LLMs process. Roughly 4 characters or 0.75 words in English." },
              { term: "Context Window", definition: "The maximum number of tokens an LLM can process in a single interaction." },
              { term: "Temperature", definition: "A parameter controlling randomness in outputs. Lower values = more deterministic." },
              { term: "Few-shot Learning", definition: "Providing examples in your prompt to guide the model's response format." },
              { term: "Zero-shot", definition: "Asking the model to perform a task without providing examples." },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-4 pb-4">
                  <div className="flex gap-4">
                    <code className="text-primary font-mono text-sm bg-primary/10 px-2 py-1 rounded h-fit">
                      {item.term}
                    </code>
                    <p className="text-muted-foreground text-sm flex-1">{item.definition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Your First Prompt */}
        <section id="your-first-prompt" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Your First Prompt</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Let&apos;s look at the difference between a basic prompt and an engineered prompt:
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <Card className="border-destructive/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-destructive">Basic Prompt</CardTitle>
                <CardDescription>Vague and unstructured</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code="Write about climate change."
                  language="text"
                />
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-primary">Engineered Prompt</CardTitle>
                <CardDescription>Clear, specific, and structured</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`You are an environmental science educator.

Write a 200-word summary about climate 
change for high school students. Include:
- 3 key causes
- 2 observable effects
- 1 actionable solution

Use simple language and avoid jargon.`}
                  language="text"
                />
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Notice the difference?</strong> The engineered prompt specifies the role, audience, length, structure, and tone. This level of specificity dramatically improves the quality and relevance of AI outputs.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <ArticleNavigation
          previous={{ href: "/", label: "Home" }}
          next={{ href: "/core-concepts", label: "Core Concepts" }}
        />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  )
}
