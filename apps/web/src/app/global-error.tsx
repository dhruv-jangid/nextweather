"use client";

import { mainFont } from "@/lib/static/fonts";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body
        className={`${mainFont.className} h-dvh text-2xl flex flex-col items-center justify-center gap-6 w-1/2 mx-auto text-center pt-48 bg-accent`}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-accent-foreground">
            We&apos;re sorry, but we couldn&apos;t complete your request at this
            time. We are looking into the issue and hope to have it resolved
            soon.
          </p>
          <Button variant="outline" className="opacity-75" onClick={reset}>
            Try Again
          </Button>
        </div>
        <div className="mt-48 text-sm text-muted-foreground underline underline-offset-4 break-words line-clamp-1 max-w-xl">
          {error.message.trim() ?? "Something went wrong"}
        </div>
      </body>
    </html>
  );
}
