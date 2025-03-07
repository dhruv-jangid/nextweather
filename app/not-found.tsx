import logo from "@/app/favicon.ico";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center text-center bg-black">
      <Image src={logo} width={120} height={120} alt="logo" className="mb-4" />
      <h2 className="text-4xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg text-white/60 mb-6">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-2 text-lg bg-white text-black rounded-2xl hover:bg-white/80 transition-all duration-300"
        replace
      >
        Return Home
      </Link>
    </div>
  );
}
