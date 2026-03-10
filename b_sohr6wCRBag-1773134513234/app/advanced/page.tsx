import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Brain, GitBranch, Repeat, Wand2, Workflow, Zap } from "lucide-react"
import { CodeBlock } from "@/components/content/code-block"
import { TableOfContents } from "@/components/content/table-of-contents"
import { ArticleNavigation } from "@/components/content/article-navigation"

const tocItems = [
  { id: "chain-of-thought", label: "Chain-of-Thought" },
  { id: "few-shot-learning", label: "Few-Shot Learning" },
  { id: "self-consistency", label: "Self-Consistency" },
  { id: "tree-of-thought", label: "Tree-of-Thought" },
  { id: "meta-prompting", label: "Meta-Prompting" },
  { id: "prompt-chaining", label: "Prompt Chaining" },
]

export default function AdvancedPage() {
  return (
    <div className="flex">
      <article className="flex-1 max-w-4xl px-6 py-10 lg:px-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary">Advanced</Badge>
            <span className="text-sm text-muted-foreground">20 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Advanced Techniques</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore sophisticated prompting strategies used by AI researchers and professionals to unlock deeper reasoning capabilities and achieve complex tasks.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Chain-of-Thought */}
        <section id="chain-of-thought" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Chain-of-Thought (CoT) Prompting</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Chain-of-Thought prompting encourages the model to break down complex problems into intermediate reasoning steps. This technique dramatically improves performance on tasks requiring multi-step reasoning, math, and logic.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <Card className="border-destructive/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-destructive">Without CoT</CardTitle>
                <CardDescription>Direct question, often wrong answer</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Q: A store has 23 apples. They sell 
17 apples, then receive 12 more. 
How many apples do they have?

A: 18 apples (incorrect)`}
                  language="text"
                />
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-primary">With CoT</CardTitle>
                <CardDescription>Step-by-step reasoning</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Q: A store has 23 apples. They sell 
17 apples, then receive 12 more. 
How many apples do they have?

Let's think step by step:
1. Start: 23 apples
2. After selling 17: 23 - 17 = 6
3. After receiving 12: 6 + 12 = 18

A: 18 apples (correct)`}
                  language="text"
                />
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="cot-variants">
              <AccordionTrigger>CoT Variants & Best Practices</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-medium mb-2">Zero-Shot CoT</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Simply add &quot;Let&apos;s think step by step&quot; to trigger reasoning without examples.
                    </p>
                    <code className="text-xs bg-background px-2 py-1 rounded">{`[Question] Let's think step by step.`}</code>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-medium mb-2">Few-Shot CoT</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide 2-3 examples showing the reasoning process you want the model to follow.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-medium mb-2">When to Use</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside">
                      <li>Math word problems</li>
                      <li>Multi-step reasoning tasks</li>
                      <li>Logical puzzles</li>
                      <li>Code debugging</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Few-Shot Learning */}
        <section id="few-shot-learning" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Few-Shot Learning</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Few-shot learning involves providing examples in your prompt to demonstrate the desired behavior. The model learns the pattern from these examples and applies it to new inputs.
          </p>

          <CodeBlock
            code={`# Few-Shot Classification Example

Classify the sentiment of each review as Positive, Negative, or Neutral.

Review: "This product exceeded all my expectations!"
Sentiment: Positive

Review: "Decent quality but overpriced for what you get."
Sentiment: Neutral

Review: "Complete waste of money. Broke after one day."
Sentiment: Negative

Review: "The customer service was incredibly helpful and resolved my issue quickly."
Sentiment:`}
            language="text"
            filename="few-shot-example.txt"
          />

          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h4 className="font-medium mb-3">Best Practices for Few-Shot Examples</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span><strong className="text-foreground">Diverse examples:</strong> Cover different cases and edge scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span><strong className="text-foreground">Consistent format:</strong> Keep the same structure across all examples</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span><strong className="text-foreground">Representative samples:</strong> Use examples similar to your actual use case</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span><strong className="text-foreground">3-5 examples:</strong> Usually sufficient; more isn&apos;t always better</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Self-Consistency */}
        <section id="self-consistency" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Repeat className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Self-Consistency</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Self-consistency sampling generates multiple reasoning paths and selects the most consistent answer through majority voting. This technique improves reliability for complex reasoning tasks.
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="font-medium mb-3">How It Works</h4>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium flex-shrink-0">1</span>
                      <span>Generate multiple responses (5-10) with higher temperature</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium flex-shrink-0">2</span>
                      <span>Extract the final answer from each response</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium flex-shrink-0">3</span>
                      <span>Select the most frequent answer (majority vote)</span>
                    </li>
                  </ol>
                </div>
                <div className="flex-1">
                  <CodeBlock
                    code={`# Response 1: Answer = 42
# Response 2: Answer = 42
# Response 3: Answer = 38
# Response 4: Answer = 42
# Response 5: Answer = 40

# Majority vote: 42 (3/5)
# Final answer: 42`}
                    language="text"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tree-of-Thought */}
        <section id="tree-of-thought" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <GitBranch className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Tree-of-Thought (ToT)</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Tree-of-Thought extends Chain-of-Thought by exploring multiple reasoning branches simultaneously. The model evaluates different paths and backtracks when necessary, similar to how humans solve complex problems.
          </p>

          <CodeBlock
            code={`# Tree-of-Thought Prompt Structure

You are solving a complex problem. For each step:

1. Generate 3 possible next steps
2. Evaluate each option (rate 1-10 for likelihood of leading to solution)
3. Select the best option and continue
4. If stuck, backtrack and try a different branch

Problem: [Your complex problem here]

## Step 1: Initial Approaches
Option A: [approach] - Evaluation: [score]
Option B: [approach] - Evaluation: [score]  
Option C: [approach] - Evaluation: [score]

Selected: Option [X] because [reasoning]

## Step 2: Building on Selected Approach
...continue branching and evaluating...`}
            language="markdown"
            filename="tot-template.md"
          />

          <Card className="mt-6 bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Ideal for:</strong> Complex planning tasks, puzzles (like 24-game), creative writing with constraints, strategic decision-making, and any problem where exploring alternatives is valuable.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Meta-Prompting */}
        <section id="meta-prompting" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Wand2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Meta-Prompting</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Meta-prompting uses the AI to help craft better prompts. This recursive approach leverages the model&apos;s understanding of what makes prompts effective.
          </p>

          <CodeBlock
            code={`# Meta-Prompt: Prompt Generator

You are an expert prompt engineer. Given a task description, 
create an optimized prompt that will produce the best results.

Task: [User's task description]

Create a prompt that includes:
1. Clear role definition
2. Specific instructions
3. Relevant constraints
4. Output format specification
5. 2-3 examples if helpful

Generated Prompt:
---
[The AI generates an optimized prompt here]
---

Explanation of prompt design choices:
[The AI explains why each element was included]`}
            language="markdown"
            filename="meta-prompt.md"
          />
        </section>

        {/* Prompt Chaining */}
        <section id="prompt-chaining" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Workflow className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Prompt Chaining</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Prompt chaining breaks complex tasks into smaller, sequential prompts where each step&apos;s output becomes the next step&apos;s input. This modular approach improves reliability and allows for quality checks between steps.
          </p>

          <div className="grid gap-4 mb-6">
            {[
              {
                step: 1,
                title: "Research & Extract",
                prompt: "Extract key facts about [topic] from the following text...",
                output: "List of key facts"
              },
              {
                step: 2,
                title: "Analyze & Organize",
                prompt: "Organize these facts into categories: [facts from step 1]...",
                output: "Categorized information"
              },
              {
                step: 3,
                title: "Generate & Refine",
                prompt: "Write a summary using this organized information: [output from step 2]...",
                output: "Final polished content"
              }
            ].map((item) => (
              <Card key={item.step}>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.prompt}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-primary">Output:</span>
                        <code className="text-xs bg-muted px-2 py-0.5 rounded">{item.output}</code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h4 className="font-medium mb-3">Benefits of Prompt Chaining</h4>
              <div className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Easier debugging - identify which step failed</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Quality checkpoints between steps</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Reusable prompt components</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Better handling of complex tasks</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <ArticleNavigation
          previous={{ href: "/core-concepts", label: "Core Concepts" }}
          next={{ href: "/examples", label: "Practical Examples" }}
        />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  )
}
