"use client";

import Image from "next/image";
import logo from "@/app/favicon.ico";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-dvh flex flex-col items-center justify-center text-center bg-black">
      <Image src={logo} width={120} height={120} alt="logo" className="mb-4" />
      <h2 className="text-4xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg opacity-50 mb-4">
        Sorry, couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button onClick={() => router.replace("/")}>Return Home</Button>
    </div>
  );
}
