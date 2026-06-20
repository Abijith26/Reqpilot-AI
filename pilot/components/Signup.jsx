import Link from "next/link";

import { AuthShell, OAuthButtons } from "./auth/AuthShell";

export default function Signup() {
  return (
    <AuthShell
      eyebrow="Start free"
      title="Create your workspace"
      description="Set up Reqpilot AI for your product and delivery team."
    >
      <form className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-slate-700"
            >
              First name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              placeholder="Asha"
              className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="text-sm font-medium text-slate-700"
            >
              Last name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              placeholder="Mehta"
              className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-medium text-slate-700"
          >
            Work email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
            className="mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        {/* <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input
            type="checkbox"
            name="terms"
            className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-600"
          />
          <span>
            I agree to receive product updates and accept the workspace terms.
          </span>
        </label> */}

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-md bg-cyan-700 px-4 text-base font-semibold text-white transition hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
        >
          Create account
        </button>
      </form>

      <div className="my-6 flex items-center gap-4 text-xs font-semibold uppercase text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        or
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <OAuthButtons label="Sign up" />

      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-cyan-700 hover:text-cyan-800"
        >
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
