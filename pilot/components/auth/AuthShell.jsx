const providers = [{ name: "Google", mark: "G" }];

export function OAuthButtons({ label }) {
  return (
    <div className="flex justify-center items-center">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[11px] font-bold text-white">
            {provider.mark}
          </span>
          <span>{provider.name}</span>
          <span className="sr-only">
            {label} with {provider.name}
          </span>
        </button>
      ))}
    </div>
  );
}

export function AuthShell({ eyebrow, title, description, children }) {
  return (
    <main className="min-h-screen bg-[#f6f8fb] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 lg:flex-row lg:gap-8 lg:px-8">
        <section className="relative flex min-h-80 overflow-hidden rounded-lg bg-[#123047] px-6 py-7 text-white lg:min-h-0 lg:w-[48%] lg:flex-col lg:justify-between lg:px-10 lg:py-10">
          <div className="relative z-10 flex w-full flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-200">
                Reqpilot AI
              </p>
              <h1 className="mt-7 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Turn requirements into clear delivery plans.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-200">
                Review specs, align teams, and track decisions from one focused
                workspace.
              </p>
            </div>

            {/* <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="block text-2xl font-semibold text-white">
                  24
                </span>
                Active briefs
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="block text-2xl font-semibold text-white">
                  8
                </span>
                Teams synced
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="block text-2xl font-semibold text-white">
                  96%
                </span>
                On track
              </div>
            </div> */}
          </div>

          {/* <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-64 rounded-tl-lg bg-cyan-300/10" /> */}
        </section>

        <section className="flex flex-1 items-center justify-center py-8 lg:py-10">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <p className="text-sm font-semibold uppercase text-cyan-700">
                Reqpilot AI
              </p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-950">
                {eyebrow}
              </h1>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase text-cyan-700">
                  {eyebrow}
                </p>
                <h2 className="text-2xl font-semibold text-slate-950">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>

              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
