export function SupportedProtocols() {
  const protocols = [
    { name: "TCP", color: "from-blue-500 to-cyan-500" },
    { name: "UDP", color: "from-green-500 to-emerald-500" },
    { name: "WebSocket", color: "from-teal-500 to-cyan-500" },
    { name: "KCP", color: "from-orange-500 to-amber-500" },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Lots of Protocols to Choose From, More Coming Soon
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-2xl mx-auto">
          {protocols.map((proto) => (
            <div
              key={proto.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/15 hover:bg-white/5"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${proto.color} opacity-40 transition-opacity group-hover:opacity-100`}
              >
                <span className="text-lg font-bold text-white">
                  {proto.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-medium text-neutral-400 transition-colors group-hover:text-white">
                {proto.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
