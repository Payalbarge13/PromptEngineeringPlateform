"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
}

export function CodeBlock({ code, language = "text", filename, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <div className="relative group rounded-lg border border-border bg-muted/50 overflow-hidden">
      {/* Header */}
      {(filename || language !== "text") && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/80">
          <span className="text-xs font-medium text-muted-foreground">
            {filename || language}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-3 w-3 text-primary" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      )}

      {/* Code content */}
      <div className="relative">
        {!filename && language === "text" && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-3 w-3 text-primary" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        )}
        <pre className="p-4 overflow-x-auto text-sm">
          <code className={cn("font-mono", showLineNumbers && "flex flex-col")}>
            {showLineNumbers ? (
              lines.map((line, i) => (
                <span key={i} className="flex">
                  <span className="text-muted-foreground w-8 flex-shrink-0 select-none">
                    {i + 1}
                  </span>
                  <span>{line}</span>
                </span>
              ))
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}
