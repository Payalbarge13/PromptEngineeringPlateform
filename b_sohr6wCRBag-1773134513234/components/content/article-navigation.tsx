import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface NavigationLink {
  href: string
  label: string
}

interface ArticleNavigationProps {
  previous?: NavigationLink
  next?: NavigationLink
}

export function ArticleNavigation({ previous, next }: ArticleNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
      {previous ? (
        <Link href={previous.href} className="flex-1">
          <Card className="h-full hover:bg-muted/50 transition-colors group">
            <CardContent className="flex items-center gap-4 py-4">
              <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="text-xs text-muted-foreground mb-1">Previous</p>
                <p className="font-medium group-hover:text-primary transition-colors">{previous.label}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link href={next.href} className="flex-1">
          <Card className="h-full hover:bg-muted/50 transition-colors group">
            <CardContent className="flex items-center justify-end gap-4 py-4">
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Next</p>
                <p className="font-medium group-hover:text-primary transition-colors">{next.label}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  )
}
