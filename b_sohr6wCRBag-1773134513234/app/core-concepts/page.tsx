import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Layers, MessageSquare, Settings, Puzzle, AlertTriangle, CheckCircle2 } from "lucide-react"
import { CodeBlock } from "@/components/content/code-block"
import { TableOfContents } from "@/components/content/table-of-contents"
import { ArticleNavigation } from "@/components/content/article-navigation"

const tocItems = [
  { id: "prompt-structure", label: "Prompt Structure" },
  { id: "role-prompting", label: "Role Prompting" },
  { id: "context-setting", label: "Context & Constraints" },
  { id: "output-formatting", label: "Output Formatting" },
  { id: "common-pitfalls", label: "Common Pitfalls" },
]

export default function CoreConceptsPage() {
  return (
    <div className="flex">
      <article className="flex-1 max-w-4xl px-6 py-10 lg:px-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Intermediate</Badge>
            <span className="text-sm text-muted-foreground">15 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Core Concepts</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Master the fundamental building blocks of effective prompts. Learn how to structure your inputs for consistent, high-quality AI responses.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Prompt Structure */}
        <section id="prompt-structure" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Anatomy of a Prompt</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A well-structured prompt typically consists of several key components. Understanding these components helps you craft more effective prompts consistently.
          </p>

          <div className="grid gap-4 mb-6">
            {[
              {
                title: "1. Instruction",
                description: "The primary task or action you want the AI to perform.",
                example: "Summarize the following article..."
              },
              {
                title: "2. Context",
                description: "Background information that helps the AI understand the situation.",
                example: "You are helping a marketing team..."
              },
              {
                title: "3. Input Data",
                description: "The specific content or data the AI should work with.",
                example: "[Article text here]"
              },
              {
                title: "4. Output Format",
                description: "How you want the response structured.",
                example: "Provide your response as bullet points..."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono text-muted-foreground sm:max-w-48">
                      {item.example}
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <CodeBlock
            code={`# Complete Prompt Structure Example

## Role/Context
You are a senior software engineer reviewing code.

## Task/Instruction
Review the following Python function for:
- Code quality and readability
- Potential bugs or edge cases
- Performance considerations

## Input Data
\`\`\`python
def process_data(items):
    result = []
    for i in items:
        if i > 0:
            result.append(i * 2)
    return result
\`\`\`

## Output Format
Provide your review in the following format:
1. Overall Assessment (1-2 sentences)
2. Issues Found (bulleted list)
3. Suggested Improvements (code snippet if applicable)`}
            language="markdown"
            filename="structured-prompt.md"
          />
        </section>

        {/* Role Prompting */}
        <section id="role-prompting" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Role Prompting</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Assigning a specific role or persona to the AI can dramatically improve response quality. The model adapts its knowledge, tone, and approach based on the role you specify.
          </p>

          <Tabs defaultValue="expert" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="expert">Expert Role</TabsTrigger>
              <TabsTrigger value="teacher">Teacher Role</TabsTrigger>
              <TabsTrigger value="critic">Critic Role</TabsTrigger>
            </TabsList>
            <TabsContent value="expert" className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Domain Expert</CardTitle>
                  <CardDescription>Best for technical, detailed responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`You are a senior data scientist with 15 years of experience 
in machine learning and statistical analysis.

Explain the concept of gradient descent and its role in 
training neural networks.`}
                    language="text"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teacher" className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Patient Teacher</CardTitle>
                  <CardDescription>Best for educational, beginner-friendly content</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`You are a patient, encouraging teacher who specializes in 
making complex topics accessible to beginners.

Explain how the internet works to someone who has never 
used a computer before. Use simple analogies.`}
                    language="text"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="critic" className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Critical Reviewer</CardTitle>
                  <CardDescription>Best for analysis and evaluation tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`You are a sharp-eyed editor at a prestigious publication, 
known for your constructive but thorough critiques.

Review the following essay draft, identifying weaknesses 
in argument structure, evidence, and prose clarity.`}
                    language="text"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm">
                <strong className="text-foreground">Pro Tip:</strong>{" "}
                <span className="text-muted-foreground">
                  Be specific about the role&apos;s experience level and specialty. &quot;You are a doctor&quot; is less effective than &quot;You are a board-certified cardiologist with 20 years of clinical experience.&quot;
                </span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Context Setting */}
        <section id="context-setting" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Context & Constraints</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Setting appropriate context and constraints helps narrow down the AI&apos;s response space, leading to more relevant and focused outputs.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-primary">Effective Constraints</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Word or character limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Target audience specification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tone and style requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Topics to include/exclude</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Required sections or elements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Example with Constraints</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Write a product description.

Constraints:
- Maximum 100 words
- Tone: Professional but friendly
- Target: Small business owners
- Must include: key features, 
  pricing mention, CTA
- Avoid: Technical jargon, 
  competitor mentions`}
                  language="text"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Output Formatting */}
        <section id="output-formatting" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Puzzle className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Output Formatting</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Specifying the exact format you want helps ensure consistent, parseable outputs. This is especially important when integrating AI responses into automated workflows.
          </p>

          <div className="grid gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">JSON Output</CardTitle>
                <CardDescription>Best for structured data and API integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Analyze the following customer review and extract:
- Sentiment (positive/negative/neutral)
- Key topics mentioned
- Rating prediction (1-5)

Review: "Great product but shipping was slow"

Respond ONLY with valid JSON in this exact format:
{
  "sentiment": "string",
  "topics": ["array", "of", "strings"],
  "predicted_rating": number,
  "confidence": number
}`}
                  language="text"
                  filename="json-format.txt"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Markdown Output</CardTitle>
                <CardDescription>Best for documentation and readable content</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Create a brief project plan for launching a mobile app.

Format your response as Markdown with:
- H2 headers for each phase
- Bullet points for tasks
- **Bold** for key milestones
- A timeline table at the end`}
                  language="text"
                  filename="markdown-format.txt"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section id="common-pitfalls" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <h2 className="text-2xl font-semibold">Common Pitfalls</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Avoid these common mistakes that lead to poor AI responses:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Being Too Vague",
                bad: "Write something about marketing.",
                good: "Write a 200-word LinkedIn post about B2B content marketing trends for SaaS companies in 2024.",
                explanation: "Specificity leads to relevance. Include details about format, audience, and scope."
              },
              {
                title: "Conflicting Instructions",
                bad: "Write a detailed but brief explanation...",
                good: "Write a 3-paragraph explanation covering the main concept, one example, and key takeaways.",
                explanation: "Contradictory requirements confuse the model. Be clear and consistent."
              },
              {
                title: "Missing Context",
                bad: "Improve this code.",
                good: "Review this Python function for a high-traffic web API. Focus on performance optimizations and error handling.",
                explanation: "Context about purpose, constraints, and environment shapes appropriate responses."
              },
              {
                title: "Overloading a Single Prompt",
                bad: "Write a blog post, create social media posts, draft emails, and make a video script about our product launch.",
                good: "Write a 500-word blog post announcing our new product launch. Focus on the three main features and include a call-to-action.",
                explanation: "Break complex tasks into focused, individual prompts for better results."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <p className="text-xs font-medium text-destructive mb-1">Avoid</p>
                      <p className="text-sm text-muted-foreground">{item.bad}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <p className="text-xs font-medium text-primary mb-1">Better</p>
                      <p className="text-sm text-muted-foreground">{item.good}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.explanation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <ArticleNavigation
          previous={{ href: "/introduction", label: "Introduction" }}
          next={{ href: "/advanced", label: "Advanced Techniques" }}
        />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  )
}
