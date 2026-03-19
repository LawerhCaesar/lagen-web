import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md space-y-6 px-4 pb-16 pt-6 sm:px-6 sm:pt-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create your account
        </h1>
        <p className="text-sm text-zinc-400">
          Join La&apos;gen to access exclusive collections and rewards.
        </p>
      </header>

      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-200">
              First name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-3 text-base text-white outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-500 sm:py-2 sm:text-sm"
              placeholder="Stella"
              autoComplete="given-name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-200">
              Last name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-3 text-base text-white outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-500 sm:py-2 sm:text-sm"
              placeholder="La'gen"
              autoComplete="family-name"
            />
          </div>
        </div>

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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-200">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-3 text-base text-white outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-500 sm:py-2 sm:text-sm"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-200">
              Confirm password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-3 text-base text-white outline-none ring-0 transition focus:border-zinc-400 focus:ring-1 focus:ring-zinc-500 sm:py-2 sm:text-sm"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full min-h-[44px] items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-medium tracking-wide text-black transition hover:bg-zinc-200 sm:py-2"
        >
          Create account
        </button>
      </form>

      <p className="text-center text-xs text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-zinc-100 underline underline-offset-4"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}

