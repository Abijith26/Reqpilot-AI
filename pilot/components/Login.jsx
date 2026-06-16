export default function Login() {
  return (
    <main className="flex min-h-screen bg-[#f6f7fb] text-slate-950">
      <section className="hidden w-[46%] flex-col justify-between bg-[#102a43] p-10 text-white lg:flex">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Reqpilot AI
          </p>
          <h1 className="mt-8 max-w-md text-5xl font-semibold leading-tight">
            Turn requirements into clear delivery plans.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-200">
            Review specs, align teams, and track decisions from one focused
            workspace.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm text-slate-200">
          <div className="rounded-lg border border-white/15 bg-white/10 p-4">
            <span className="block text-2xl font-semibold text-white">24</span>
            Active briefs
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-4">
            <span className="block text-2xl font-semibold text-white">8</span>
            Teams synced
          </div>
          <div className="rounded-lg border border-white/15 bg-white/10 p-4">
            <span className="block text-2xl font-semibold text-white">96%</span>
            On track
          </div>
        </div>
      </section>

      <section className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Reqpilot AI
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-950">
              Welcome back
            </h1>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-950">Sign in</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Continue to your Reqpilot AI workspace.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
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

              <label className="flex items-center gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-600"
                />
                Remember me on this device
              </label>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-md bg-cyan-700 px-4 text-base font-semibold text-white transition hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              New to Reqpilot AI?{" "}
              <a
                href="#"
                className="font-semibold text-cyan-700 hover:text-cyan-800"
              >
                Request access
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
