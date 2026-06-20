import Link from "next/link";

import { AuthShell, OAuthButtons } from "./auth/AuthShell";

export default function Login() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in"
      description="Continue to your Reqpilot AI workspace."
    >
      <form className="space-y-5">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <a
              href="#"
              className="text-sm font-medium text-cyan-700 hover:text-cyan-800"
            >
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        {/* <label className="flex items-center gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-600"
          />
          Remember me on this device
        </label> */}

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-md bg-cyan-700 px-4 text-base font-semibold text-white transition hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
        >
          Sign in
        </button>
      </form>

      <div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        or
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <OAuthButtons label="Sign up" />

      <p className="mt-8 text-center text-sm text-slate-600">
        New to Reqpilot AI?{" "}
        <Link
          href="/signup"
          className="font-semibold text-cyan-700 hover:text-cyan-800"
        >
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
