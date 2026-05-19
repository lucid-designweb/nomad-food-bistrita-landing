import { createFileRoute } from "@tanstack/react-router";
import heroBurger from "@/assets/hero-burger.png";
import shaormaImg from "@/assets/shaorma.png";
import sandwichImg from "@/assets/sandwich.png";
import burgerSmall from "@/assets/burger-small.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOMAD Food — Burgers, Shaorma & Sandwich-uri în Bistrița" },
      { name: "description", content: "NOMAD Food Bistrița — burgeri suculenți, shaorma autentică și sandwich-uri făcute cu drag. Fereastra ta de mâncare bună." },
      { property: "og:title", content: "NOMAD Food — Bistrița" },
      { property: "og:description", content: "Burgeri, shaorma și sandwich-uri făcute cu drag în Bistrița." },
    ],
  }),
  component: Index,
});

const menu = {
  Burgeri: [
    { name: "Nomad Classic", desc: "Vită 150g, cheddar, salată, roșii, sos casă", price: "28 lei" },
    { name: "Double Trouble", desc: "Dublu patty, dublu cheddar, bacon, ceapă caramelizată", price: "38 lei" },
    { name: "Spicy Wanderer", desc: "Vită, jalapeño, pepper jack, sos chipotle", price: "32 lei" },
    { name: "Chicken Crunch", desc: "Pui crocant, slaw, sos buffalo", price: "26 lei" },
  ],
  "Shaorma": [
    { name: "Shaorma Clasică", desc: "Pui, salată, roșii, castraveți, varză, cartofi, sos alb", price: "22 lei" },
    { name: "Shaorma Picantă", desc: "Pui marinat, ardei iute, sos picant", price: "24 lei" },
    { name: "Shaorma Vită", desc: "Vită fragedă, sos de usturoi, legume proaspete", price: "28 lei" },
    { name: "Shaorma Mixt", desc: "Pui și vită, toate de toate", price: "30 lei" },
  ],
  "Sandwich-uri": [
    { name: "Club Nomad", desc: "Pui, bacon, ou, salată, roșii, maioneză", price: "24 lei" },
    { name: "Grilled Cheese Deluxe", desc: "Trei brânzeturi topite, unt de fermă", price: "20 lei" },
    { name: "Steak & Cheese", desc: "Vită feliată, ceapă, ardei, mozzarella", price: "30 lei" },
    { name: "Veggie Dream", desc: "Brânză feta, avocado, legume coapte, pesto", price: "22 lei" },
  ],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-wider">NOMAD</span>
            <span className="eyebrow text-primary">food</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#meniu" className="hover:text-primary transition">Meniu</a>
            <a href="#despre" className="hover:text-primary transition">Despre</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
            Comandă
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="font-script text-primary text-xl md:text-2xl mb-6 text-glow">made with love in Bistrița</p>

          <h1 className="font-display text-[18vw] md:text-[12rem] leading-[0.85] tracking-tight">
            NOMAD
            <span className="block text-primary text-glow">FOOD</span>
          </h1>

          <div className="relative -mt-20 md:-mt-32 flex justify-center animate-float">
            <img
              src={heroBurger}
              alt="Burger gigant Nomad"
              width={1280}
              height={1280}
              className="w-[80vw] max-w-[600px] h-auto drop-shadow-[0_20px_60px_oklch(0.78_0.18_60/0.4)]"
            />
          </div>

          <p className="eyebrow text-muted-foreground -mt-8 md:-mt-16">
            Burgeri · Shaorma · Sandwich-uri
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#meniu" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_40px_oklch(0.78_0.18_60/0.4)]">
              Vezi meniul
            </a>
            <a href="#contact" className="border border-border px-8 py-4 rounded-full font-semibold hover:bg-card transition">
              Sună acum
            </a>
          </div>
        </div>
      </section>

      {/* DESPRE */}
      <section id="despre" className="py-32 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-5">Povestea noastră</p>
          <h2 className="font-display text-5xl md:text-7xl mb-8">FEREASTRA TA<br/>DE MÂNCARE BUNĂ</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Suntem un mic window food din inima Bistriței. Nu avem mese de lux, nu avem chelneri în costum —
            avem doar ingrediente proaspete, rețete făcute cu drag și o pasiune obsesivă pentru aroma perfectă.
            Vino, ia-ți pachetul și bucură-te de fiecare îmbucătură.
          </p>
        </div>
      </section>

      {/* MENIU */}
      <section id="meniu" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="eyebrow mb-4">Ce găsești la noi</p>
            <h2 className="font-display text-6xl md:text-8xl">MENIU</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { img: burgerSmall, label: "Burgeri" },
              { img: shaormaImg, label: "Shaorma" },
              { img: sandwichImg, label: "Sandwich-uri" },
            ].map((c) => (
              <a key={c.label} href={`#cat-${c.label}`} className="group text-center">
                <div className="aspect-square bg-card rounded-2xl flex items-center justify-center overflow-hidden border border-border group-hover:border-primary transition">
                  <img src={c.img} alt={c.label} width={768} height={768} loading="lazy" className="w-full h-full object-contain p-4 group-hover:scale-110 transition duration-500" />
                </div>
                <p className="font-display text-3xl mt-4 group-hover:text-primary transition">{c.label}</p>
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {Object.entries(menu).map(([cat, items]) => (
              <div key={cat} id={`cat-${cat}`}>
                <div className="flex items-baseline gap-4 mb-8 border-b border-border pb-4">
                  <h3 className="font-display text-4xl md:text-5xl text-primary">{cat}</h3>
                  <span className="eyebrow text-muted-foreground">Alege favoritul</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                  {items.map((item) => (
                    <div key={item.name} className="flex justify-between gap-4 group">
                      <div>
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="font-display text-2xl text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-5">Vino la fereastră</p>
          <h2 className="font-display text-5xl md:text-7xl mb-12">NE GĂSEȘTI ÎN<br/>BISTRIȚA</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="eyebrow mb-3">Adresă</p>
              <p className="font-semibold">Str. Liviu Rebreanu 12</p>
              <p className="text-muted-foreground text-sm">420068 Bistrița</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="eyebrow mb-3">Program</p>
              <p className="font-semibold">Lun–Joi: 11:00 – 23:00</p>
              <p className="font-semibold">Vin–Dum: 11:00 – 02:00</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="eyebrow mb-3">Comandă</p>
              <p className="font-display text-2xl">0744 123 456</p>
              <p className="text-muted-foreground text-sm">livrare în tot orașul</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl tracking-wider">NOMAD</span>
            <span className="eyebrow">food</span>
          </div>
          <p className="text-sm text-muted-foreground font-script">cu drag, din Bistrița · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
