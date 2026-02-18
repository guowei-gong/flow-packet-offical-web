import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Cloudstar",
    initials: "AC",
    role: "Game Backend Engineer",
    review:
      "FlowPacket completely changed how we test our game server protocols. The visual canvas makes it so easy to design complex test sequences that used to take hours of scripting.",
    rating: 5,
  },
  {
    name: "Pranto Chakraborty",
    initials: "PC",
    role: "Network Engineer",
    review:
      "The real-time packet monitoring is incredible. Being able to watch packets flow through our test sequences in real time has cut our debugging time in half.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    initials: "SM",
    role: "QA Lead",
    review:
      "We integrated FlowPacket into our CI/CD pipeline and it's been a game changer. Automated test sequences run on every commit and catch protocol issues early.",
    rating: 5,
  },
  {
    name: "David Kim",
    initials: "DK",
    role: "Full Stack Developer",
    review:
      "As someone who works with WebSocket connections daily, FlowPacket's protocol-aware testing saves me so much time. The auto-handshake handling is brilliant.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    initials: "ER",
    role: "DevOps Engineer",
    review:
      "The sandbox environment is perfect for testing network edge cases. We can simulate packet loss, latency, and disconnections without touching production.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    initials: "MC",
    role: "Game Developer",
    review:
      "Import from Wireshark captures is a killer feature. We capture real game traffic and convert it into repeatable test flows in seconds. Absolute time saver.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <div className="relative flex h-5 w-5 items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" />
              <div className="relative h-3.5 w-3.5 rounded-full bg-black" />
            </div>
            <AnimatedGradientText className="text-sm font-medium">
              Reviews
            </AnimatedGradientText>
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            The Innovators Are{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Already Here
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Join hundreds of engineers who are already building better tests
            with FlowPacket.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="mb-4 flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm leading-relaxed text-neutral-300">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-gradient-to-br from-teal-600 to-emerald-600 text-xs">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
