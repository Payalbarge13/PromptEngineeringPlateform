import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, FileText, MessageCircle, Database, Image, Briefcase } from "lucide-react"
import { CodeBlock } from "@/components/content/code-block"
import { TableOfContents } from "@/components/content/table-of-contents"
import { ArticleNavigation } from "@/components/content/article-navigation"

const tocItems = [
  { id: "code-generation", label: "Code Generation" },
  { id: "content-writing", label: "Content Writing" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "conversation-design", label: "Conversation Design" },
  { id: "image-prompts", label: "Image Generation" },
  { id: "business-applications", label: "Business Applications" },
]

export default function ExamplesPage() {
  return (
    <div className="flex">
      <article className="flex-1 max-w-4xl px-6 py-10 lg:px-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary">Practical</Badge>
            <span className="text-sm text-muted-foreground">25 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Practical Examples</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-world prompt engineering examples across different domains. Copy, adapt, and learn from these battle-tested prompts.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Code Generation */}
        <section id="code-generation" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Code Generation</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Effective prompts for generating, reviewing, and debugging code across different programming languages.
          </p>

          <Tabs defaultValue="generate" className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="generate">Generate</TabsTrigger>
              <TabsTrigger value="review">Review</TabsTrigger>
              <TabsTrigger value="debug">Debug</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate" className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Function Generation</CardTitle>
                  <CardDescription>Generate well-documented, production-ready code</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`You are a senior TypeScript developer. Write a function that:

## Requirements
- Validates email addresses using RFC 5322 standard
- Returns an object with: isValid, errorMessage, normalizedEmail
- Handles edge cases: empty input, whitespace, unicode

## Constraints
- No external dependencies
- Must include JSDoc comments
- Include unit test examples in comments

## Output Format
\`\`\`typescript
// Your implementation here
\`\`\`

Generate the function now.`}
                    language="markdown"
                    filename="code-generation.md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="review" className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Code Review</CardTitle>
                  <CardDescription>Get thorough, actionable code reviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`You are a principal engineer conducting a code review.

Review this code for:
1. Security vulnerabilities (OWASP Top 10)
2. Performance issues (time/space complexity)
3. Code quality (readability, maintainability)
4. Best practices for [React/Node/etc.]

Code to review:
\`\`\`javascript
[paste code here]
\`\`\`

Provide feedback in this format:
## Critical Issues (must fix)
## Warnings (should fix)
## Suggestions (nice to have)
## What's Done Well`}
                    language="markdown"
                    filename="code-review.md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="debug" className="mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Debugging Assistant</CardTitle>
                  <CardDescription>Systematic approach to finding and fixing bugs</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`You are a debugging expert. Help me fix this issue.

## The Problem
[Describe what's happening vs. what should happen]

## Error Message
\`\`\`
[Paste error message/stack trace]
\`\`\`

## Relevant Code
\`\`\`[language]
[Paste the problematic code]
\`\`\`

## What I've Tried
- [List attempts]

Analyze step-by-step:
1. Identify the root cause
2. Explain why it's happening
3. Provide the fix with explanation
4. Suggest how to prevent this in the future`}
                    language="markdown"
                    filename="debugging.md"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Content Writing */}
        <section id="content-writing" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Content Writing</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Prompts for creating engaging, well-structured content for various platforms and purposes.
          </p>

          <div className="grid gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Blog Post Framework</CardTitle>
                <CardDescription>Create SEO-optimized, engaging blog content</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`You are an expert content strategist and SEO specialist.

Write a blog post about: [TOPIC]

## Requirements
- Target keyword: [PRIMARY KEYWORD]
- Word count: 1,500-2,000 words
- Target audience: [DESCRIBE AUDIENCE]
- Tone: [professional/casual/technical/etc.]

## Structure
1. Hook (attention-grabbing opening)
2. Problem/opportunity statement
3. Main content (3-5 key sections with H2 headers)
4. Practical examples or case studies
5. Actionable takeaways
6. Clear call-to-action

## SEO Requirements
- Include keyword in: title, first paragraph, 2-3 H2s, conclusion
- Write a meta description (150-160 chars)
- Suggest 3 internal linking opportunities
- Include 2-3 relevant statistics with sources

Begin writing:`}
                  language="markdown"
                  filename="blog-post.md"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Email Sequence</CardTitle>
                <CardDescription>High-converting email marketing sequences</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Create a 5-email welcome sequence for [PRODUCT/SERVICE].

## Context
- Product: [Brief description]
- Target customer: [Demographics, pain points]
- Main value proposition: [Key benefit]
- Desired action: [What you want them to do]

## Email Structure for Each
Subject line (A/B test options: 2 versions)
Preview text (40-50 chars)
Body (150-250 words)
CTA button text

## Sequence Flow
Email 1 (Day 0): Welcome + immediate value
Email 2 (Day 2): Address main pain point
Email 3 (Day 4): Social proof + success story
Email 4 (Day 7): Overcome common objection
Email 5 (Day 10): Urgency + clear CTA

Write all 5 emails now.`}
                  language="markdown"
                  filename="email-sequence.md"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Analysis */}
        <section id="data-analysis" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Data Analysis</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Prompts for extracting insights, analyzing patterns, and creating reports from data.
          </p>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Data Analysis Framework</CardTitle>
              <CardDescription>Comprehensive analysis with actionable insights</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`You are a data analyst. Analyze the following dataset.

## Dataset
[Paste data or describe the dataset]

## Analysis Requirements
1. Summary Statistics
   - Key metrics (mean, median, mode, std dev)
   - Data quality assessment (missing values, outliers)

2. Pattern Recognition
   - Identify trends over time
   - Find correlations between variables
   - Segment the data meaningfully

3. Insights Generation
   - Top 3 most significant findings
   - Unexpected patterns or anomalies
   - Comparison to industry benchmarks (if known)

4. Recommendations
   - Data-driven action items
   - Areas needing further investigation
   - Potential risks or opportunities

## Output Format
Present findings with:
- Executive summary (3-4 sentences)
- Detailed analysis by section
- Data visualizations suggestions
- Confidence levels for each insight`}
                language="markdown"
                filename="data-analysis.md"
              />
            </CardContent>
          </Card>
        </section>

        {/* Conversation Design */}
        <section id="conversation-design" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Conversation Design</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            System prompts for building AI assistants and chatbots with specific personalities and capabilities.
          </p>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Customer Support Bot</CardTitle>
              <CardDescription>Friendly, helpful support assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`# System Prompt: Customer Support Assistant

You are Maya, a friendly and knowledgeable customer support 
specialist for [COMPANY NAME].

## Your Personality
- Warm, empathetic, and patient
- Professional but not robotic
- Proactive in offering solutions
- Uses the customer's name when known

## Your Knowledge
- Product catalog and features: [Link/describe]
- Pricing and plans: [Details]
- Common issues and solutions: [List]
- Policies: Returns, refunds, shipping

## Conversation Guidelines
1. Greet warmly, acknowledge their concern
2. Ask clarifying questions if needed
3. Provide clear, step-by-step solutions
4. Confirm the issue is resolved
5. Offer additional help before closing

## Escalation Rules
Transfer to human agent when:
- Customer requests it
- Issue requires account access you don't have
- Complaint involves legal/safety concerns
- Conversation exceeds 10 exchanges without resolution

## Response Format
- Keep responses under 150 words
- Use bullet points for multi-step instructions
- Include relevant links when helpful
- End with a clear next step or question`}
                language="markdown"
                filename="support-bot.md"
              />
            </CardContent>
          </Card>
        </section>

        {/* Image Generation */}
        <section id="image-prompts" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Image className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Image Generation Prompts</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Structured prompts for AI image generators like DALL-E, Midjourney, and Stable Diffusion.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {[
              {
                title: "Product Photography",
                prompt: `Professional product photo of [ITEM], 
studio lighting, white background, 
commercial photography, 8k, 
sharp focus, minimalist aesthetic, 
centered composition`,
              },
              {
                title: "Portrait Style",
                prompt: `Portrait of [SUBJECT DESCRIPTION],
[lighting style: natural/studio/dramatic],
[camera: 85mm lens, f/1.8],
[style: editorial/candid/formal],
[mood: warm/cool/neutral tones]`,
              },
              {
                title: "Landscape Scene",
                prompt: `[Environment type] landscape at [time of day],
[weather conditions], [season],
[artistic style: photorealistic/painterly],
[composition: rule of thirds/leading lines],
atmospheric perspective, high detail`,
              },
              {
                title: "UI/Web Design",
                prompt: `Modern [website/app] interface design for [PURPOSE],
clean minimalist aesthetic, 
[color scheme: e.g., blue and white],
UI/UX design, Figma style,
high fidelity mockup, professional`,
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CodeBlock code={item.prompt} language="text" />
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h4 className="font-medium mb-3">Image Prompt Formula</h4>
              <div className="space-y-2 text-sm">
                <code className="block text-muted-foreground bg-muted px-3 py-2 rounded">
                  [Subject] + [Style] + [Composition] + [Lighting] + [Quality modifiers]
                </code>
                <p className="text-muted-foreground">
                  Combine these elements in order of importance. Be specific about what you want, but leave room for creative interpretation where appropriate.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Business Applications */}
        <section id="business-applications" className="scroll-mt-20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Business Applications</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Prompts for common business tasks like meeting summaries, SWOT analysis, and strategic planning.
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Meeting Summary</CardTitle>
                <CardDescription>Transform meeting transcripts into actionable summaries</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Summarize this meeting transcript.

## Meeting Details
- Date: [DATE]
- Participants: [NAMES]
- Duration: [TIME]

## Transcript
[Paste transcript]

## Output Format
### Executive Summary
(2-3 sentences capturing the meeting's purpose and outcome)

### Key Discussion Points
- Point 1: [What was discussed, different viewpoints]
- Point 2: ...

### Decisions Made
1. [Decision]: Rationale, owner if mentioned

### Action Items
| Task | Owner | Due Date | Priority |
|------|-------|----------|----------|
| ...  | ...   | ...      | ...      |

### Open Questions
- Questions that need follow-up

### Next Meeting
- Suggested topics/date if mentioned`}
                  language="markdown"
                  filename="meeting-summary.md"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">SWOT Analysis</CardTitle>
                <CardDescription>Comprehensive strategic analysis framework</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`Conduct a SWOT analysis for [COMPANY/PRODUCT/INITIATIVE].

## Context
- Industry: [INDUSTRY]
- Company stage: [Startup/Growth/Mature]
- Main competitors: [LIST]
- Current situation: [BRIEF DESCRIPTION]

## Analysis Requirements
For each quadrant, provide:
- 5-7 specific, actionable points
- Evidence or reasoning for each
- Prioritization (High/Medium/Low impact)

## Output Format
### Strengths (Internal, Positive)
What competitive advantages exist?

### Weaknesses (Internal, Negative)
What areas need improvement?

### Opportunities (External, Positive)
What market trends or gaps can be leveraged?

### Threats (External, Negative)
What external risks should be monitored?

### Strategic Recommendations
Based on this analysis:
1. Leverage: How to maximize strengths + opportunities
2. Defend: How to use strengths to mitigate threats
3. Improve: How to address weaknesses to capture opportunities
4. Monitor: Weaknesses that could amplify threats`}
                  language="markdown"
                  filename="swot-analysis.md"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <ArticleNavigation
          previous={{ href: "/advanced", label: "Advanced Techniques" }}
          next={{ href: "/", label: "Back to Home" }}
        />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  )
}
