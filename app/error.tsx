"use client";

export default function ErrorBoundary() {
  return (
    <div className="h-dvh text-2xl flex flex-col items-center justify-center gap-6 w-1/2 lg:w-1/3 mx-auto text-center">
      <p>Something went wrong. Please come after few hours!</p>
    </div>
  );
}
