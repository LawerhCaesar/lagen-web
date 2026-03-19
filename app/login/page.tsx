import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 pb-16 pt-6 sm:px-6 sm:pt-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-zinc-400">
          Sign in to access your La&apos;gen account.
        </p>
      </header>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-zinc-200">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-3 text-base text-white outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-500 sm:py-2 sm:text-sm"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <label className="font-medium text-zinc-200">Password</label>
            <button
              type="button"
              className="text-xs text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
            >
              Forgot password?
            </button>
          </div>
          <input
            type="password"
            className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-3 text-base text-white outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-500 sm:py-2 sm:text-sm"
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="flex w-full min-h-[44px] items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-medium tracking-wide text-black transition hover:bg-zinc-200 sm:py-2"
        >
          Sign in
        </button>
      </form>

      <p className="text-center text-xs text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-zinc-100 underline underline-offset-4"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}

