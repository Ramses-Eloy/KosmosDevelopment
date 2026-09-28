import Link from "next/link";
import { Wordmark } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <Wordmark className="mx-auto h-10 w-auto" title="Kosmos Development" />
        <h1 className="mt-10 font-display text-5xl font-bold text-slate-900 dark:text-white">404</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Esta página se perdió en el espacio. <span lang="en">This page got lost in space.</span>
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">
            Volver al inicio
          </Link>
          <Link href="/en" className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 dark:border-white/15 dark:text-white">
            English
          </Link>
        </div>
      </div>
    </main>
  );
}
