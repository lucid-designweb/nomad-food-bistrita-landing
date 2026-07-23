import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroBurger from "@/assets/hero-burger.png";
import catBurrito from "@/assets/cat-burrito.png";
import catSandwich from "@/assets/cat-sandwich.png";
import catFries from "@/assets/cat-fries.png";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "NOMAD Food",
  image: "https://id-preview--b8e42d9a-b2f0-4a49-9fa0-9aba7e0d50db.lovable.app/og.jpg",
  servesCuisine: ["Burrito", "Sandwich", "Street Food"],
  priceRange: "$",
  telephone: "+40744123456",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Str. Liviu Rebreanu 12",
    addressLocality: "Bistrița",
    postalCode: "420068",
    addressCountry: "RO",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "11:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "11:00", closes: "02:00" },
  ],
  acceptsReservations: "False",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOMAD Food — Burrito, Sandwich & Fries în Bistrița" },
      { name: "description", content: "NOMAD Food Bistrița — burrito, sandwich-uri, fries și băuturi reci. Mâncare bună, la fereastră. Comandă pe Bolt Food." },
      { property: "og:title", content: "NOMAD Food — Bistrița" },
      { property: "og:description", content: "Burrito, sandwich-uri și fries în Bistrița. Window food, făcut cu drag." },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantJsonLd) },
    ],
  }),
  component: Index,
});

type Item = { name: string; script: string; desc?: string; gr?: string; price: string; bestSeller?: boolean };
type Drink = { name: string; size: string; price: string };

const burrito: Item[] = [
  { name: "Crispy", script: "Burrito", gr: "285 gr.", desc: "Lipie 90g, strips 100g, cremă brânză, dulceață ardei iute, maioneză, salată mix, porumb, ardei copt, muștar, sos burger, ceapă crispy", price: "23,99", bestSeller: true },
  { name: "Chicken Kebab", script: "Burrito", gr: "280 gr.", desc: "Lipie 90g, piept de pui la plită 100g, cremă brânză, salată iceberg, salată ruccola, roșii, castraveți, ardei copt, sos, ceapă caramelizată", price: "24,99" },
  { name: "Beef Kebab", script: "Burrito", gr: "280 gr.", desc: "Lipie 90g, kebab vită la plită 100g, cremă de brânză, salată mix, ardei copt, castravete, sos special, ceapă caramelizată", price: "24,99" },
];

const sandwich: Item[] = [
  { name: "House", script: "Sandwich", gr: "275 gr.", desc: "Chiflă 120g, file piept de pui 100g, salată iceberg 70g, castravete, roșii, maioneză, muștar dulce", price: "20,99" },
  { name: "Panini", script: "Prosciutto", gr: "250 gr.", desc: "Chiflă 120g, brânză feta 70g, prosciutto cotto 100g, roșii, salată iceberg", price: "19,99" },
  { name: "Nomad", script: "Snitzel", gr: "315 gr.", desc: "Chiflă 120g, șnițel de pui 100g, salată iceberg 70g, brânză cheddar, castravete, muștar dulce", price: "23,99", bestSeller: true },
  { name: "Nomadic", script: "cu șuncă", gr: "290 gr.", desc: "Chiflă 120g, șuncă presată 70g, brânză cheddar, castravete murat, roșii, salată", price: "16,99" },
];

const fries: Item[] = [
  { name: "Cartofi", script: "Prăjiți", gr: "90 gr.", price: "7,00" },
  { name: "Nomad", script: "Fries", gr: "230 gr.", desc: "Cartofi, piept de pui, bacon, sos doner", price: "24,99" },
  { name: "Nomad", script: "Salad", gr: "280 gr.", desc: "Crispy 130g, salată mix, brânză feta, măsline negre, porumb, roșii, sos maioneză, chiflă prăjită", price: "26,99" },
  { name: "Crispy", script: "Minibox", gr: "380 gr.", desc: "Crispy strips, cartofi prăjiți, sos la alegere", price: "29,99", bestSeller: true },
];

const coldDrinks: Drink[] = [
  { name: "Dorna Apă plată", size: "500ml", price: "6" },
  { name: "Dorna Apă minerală", size: "500ml", price: "6" },
  { name: "Coca Cola Original", size: "500ml", price: "8" },
  { name: "Coca Cola Original", size: "330ml", price: "7" },
  { name: "Coca Cola Zero", size: "500ml", price: "8" },
  { name: "Coca Cola Zero", size: "330ml", price: "7" },
  { name: "Coca Cola Lime", size: "500ml", price: "8" },
  { name: "Coca Cola Lime", size: "330ml", price: "7" },
  { name: "Fanta Portocale", size: "500ml", price: "8" },
  { name: "Fanta Portocale", size: "330ml", price: "7" },
  { name: "Fanta Madness", size: "500ml", price: "8" },
  { name: "Fanta Madness", size: "330ml", price: "7" },
  { name: "Sprite", size: "500ml", price: "8" },
  { name: "Sprite", size: "330ml", price: "7" },
];

const hotDrinks: Drink[] = [
  { name: "Espresso", size: "40ml", price: "6" },
  { name: "Espresso Grande", size: "80ml", price: "6" },
  { name: "Espresso cu lapte", size: "230ml", price: "7" },
  { name: "Espresso cu lapte vegetal", size: "230ml", price: "10" },
  { name: "Cappuccino", size: "220ml", price: "8" },
  { name: "Cappuccino Vegetal", size: "220ml", price: "11" },
  { name: "Latte Grande", size: "325ml", price: "8" },
  { name: "Latte Vegetal Grande", size: "325ml", price: "11" },
  { name: "Ceai", size: "325ml", price: "7" },
];

function PriceTag({ value }: { value: string }) {
  return (
    <span className="price-tag">
      <span className="text-base md:text-lg">{value}</span>
      <span className="ron">RON</span>
    </span>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="relative bg-card/40 border border-border/60 rounded-2xl p-6 hover:border-primary/60 hover:-translate-y-1 transition duration-300 group">
      {item.bestSeller && <span className="best-seller-badge">★ Best seller</span>}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h4 className="font-display text-3xl md:text-4xl text-primary leading-none">{item.name}</h4>
          <p className="font-script text-3xl md:text-4xl text-foreground -mt-1">{item.script}</p>
        </div>
        <PriceTag value={item.price} />
      </div>
      {item.desc && <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>}
      {item.gr && <p className="text-xs text-muted-foreground mt-3 font-semibold">{item.gr}</p>}
    </div>
  );
}

function CategoryHeader({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center mb-12">
      {kicker && <p className="eyebrow mb-4">{kicker}</p>}
      <div className="flex items-center justify-center gap-4">
        <span className="divider-line text-primary" />
        <h3 className="font-display text-5xl md:text-6xl tracking-wide">{title}</h3>
        <span className="divider-line text-primary" />
      </div>
    </div>
  );
}

// Live open/closed status based on Bistrița schedule
function useOpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);
  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Sun ... 6=Sat
      const mins = now.getHours() * 60 + now.getMinutes();
      // Fri(5), Sat(6), Sun(0): 11:00 – 02:00; Mon-Thu: 11:00 – 23:00
      const lateNight = day === 5 || day === 6 || day === 0;
      const closeMins = lateNight ? 26 * 60 : 23 * 60; // 02:00 = 26h
      const openMins = 11 * 60;
      const isOpen = mins >= openMins && mins < closeMins;
      // handle overnight: also open if before 02:00 on Sat(6), Sun(0), Mon(1)
      const overnight = (day === 6 || day === 0 || day === 1) && mins < 2 * 60;
      const open = isOpen || overnight;
      setStatus({
        open,
        label: open
          ? `Deschis acum · închide la ${lateNight ? "02:00" : "23:00"}`
          : "Închis · deschidem la 11:00",
      });
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}

type Tab = "Burrito" | "Sandwich" | "Fries" | "Drinks";

function Index() {
  const [tab, setTab] = useState<Tab>("Burrito");
  const status = useOpenStatus();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pb-20 md:pb-0">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-wider">NOMAD</span>
            <span className="eyebrow">food</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#meniu" className="hover:text-primary transition">Meniu</a>
            <a href="#despre" className="hover:text-primary transition">Despre</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
            {status && (
              <span className="inline-flex items-center gap-2 text-xs">
                <span className={`status-dot ${status.open ? "" : "closed"}`} />
                <span className={status.open ? "text-foreground" : "text-muted-foreground"}>{status.label}</span>
              </span>
            )}
          </div>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
            Comandă
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center justify-center pt-20 pb-12">
        <div className="absolute inset-0 hero-glow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-primary/10 blur-3xl" />

        <p className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 font-script text-2xl text-primary/40 -rotate-90 origin-left whitespace-nowrap tracking-widest">since 2023 · bistrița</p>
        <p className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-script text-2xl text-primary/40 rotate-90 origin-right whitespace-nowrap tracking-widest">window · food · co.</p>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 text-primary">
            <span className="divider-line" />
            <span className="eyebrow text-primary">Bistrița · Window Food</span>
            <span className="divider-line" />
          </div>

          {status && (
            <div className="inline-flex md:hidden items-center gap-2 mb-5 bg-card border border-border rounded-full px-4 py-1.5 text-xs">
              <span className={`status-dot ${status.open ? "" : "closed"}`} />
              <span>{status.label}</span>
            </div>
          )}

          <h1 className="font-display text-[16vw] md:text-[8.5rem] leading-[0.85] tracking-wide">
            NOMAD
            <span className="block text-primary text-glow">FOOD</span>
          </h1>
          <p className="font-script text-4xl md:text-5xl text-foreground -mt-3 md:-mt-4">made with love</p>

          <div className="relative -mt-4 md:-mt-8 flex justify-center animate-float">
            <img
              src={heroBurger}
              alt="Burger Nomad"
              width={1280}
              height={1280}
              className="w-[80vw] max-w-[420px] md:max-w-[460px] h-auto drop-shadow-[0_30px_80px_oklch(0.62_0.24_25/0.55)]"
            />
          </div>

          <p className="eyebrow text-muted-foreground -mt-2 md:-mt-6">
            Burrito · Sandwich · Fries · Drinks
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#meniu" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_40px_oklch(0.62_0.24_25/0.4)]">
              Vezi meniul
            </a>
            <a href="https://food.bolt.eu/" target="_blank" rel="noopener noreferrer" className="border border-border px-8 py-4 rounded-full font-semibold hover:bg-card transition">
              Comandă pe Bolt
            </a>
          </div>

          {/* Delivery / rating credibility strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="text-primary text-base">★</span>
              <span><strong className="text-foreground">4.9</strong> pe Bolt Food · 1200+ comenzi</span>
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span>Livrare în tot Bistrița</span>
            <span className="hidden md:inline text-border">|</span>
            <span>Plată card / cash / online</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-primary text-primary-foreground overflow-hidden py-4">
        <div className="flex gap-12 whitespace-nowrap animate-marquee font-display text-2xl md:text-3xl tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["INGREDIENTE PROASPETE", "★", "FĂCUT CU DRAG", "★", "LA FEREASTRĂ DIN 2023", "★", "BISTRIȚA", "★", "BURRITO · SANDWICH · FRIES", "★"].map((t, j) => (
                <span key={j} className="shrink-0">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DESPRE */}
      <section id="despre" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-5">Povestea noastră</p>
          <h2 className="font-display text-5xl md:text-7xl mb-4 tracking-wide">FEREASTRA TA</h2>
          <p className="font-script text-5xl md:text-6xl text-primary mb-8">de mâncare bună</p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Suntem un window food din inima Bistriței. Fără chichițe, fără pretenții —
            doar ingrediente proaspete, rețete făcute cu drag și o pasiune obsesivă pentru aroma perfectă.
            Vino, ia-ți pachetul și bucură-te.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-12 mt-16 max-w-3xl mx-auto">
            {[
              { n: "20+", l: "Rețete pe meniu" },
              { n: "5★", l: "Recenzii Bolt Food" },
              { n: "100%", l: "Ingrediente fresh" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-5xl md:text-6xl text-primary text-glow">{s.n}</p>
                <p className="eyebrow mt-2 text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: "🔥", title: "Gătit la comandă", script: "fresh", desc: "Nimic ținut pe raft. Totul plită, în clipa aia." },
            { icon: "🌿", title: "Ingrediente locale", script: "from Bistrița", desc: "Pâine, legume și carne de la furnizori din zonă." },
            { icon: "⚡", title: "Rapid la fereastră", script: "go!", desc: "Comanzi, iei și te-ai dus. Sau livrăm în tot orașul." },
          ].map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-2xl p-8 hover:border-primary hover:-translate-y-1 transition duration-300 group">
              <div className="text-4xl mb-4">{f.icon}</div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-display text-3xl tracking-wide group-hover:text-primary transition">{f.title}</h3>
                <span className="font-script text-2xl text-primary">{f.script}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENIU */}
      <section id="meniu" className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Ce găsești la noi</p>
            <h2 className="font-display text-7xl md:text-9xl tracking-wide">MENIU</h2>
          </div>

          {/* Tabs */}
          <div className="sticky top-16 z-40 -mx-6 px-6 py-4 mb-12 bg-background/85 backdrop-blur-md border-y border-border">
            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar justify-start md:justify-center">
              {(["Burrito", "Sandwich", "Fries", "Drinks"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`shrink-0 font-display tracking-wider text-lg md:text-xl px-5 py-2 rounded-full border transition ${
                    tab === t
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_oklch(0.62_0.24_25/0.4)]"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Category art */}
          <div className="flex justify-center mb-12">
            <img
              src={tab === "Burrito" ? catBurrito : tab === "Sandwich" ? catSandwich : tab === "Fries" ? catFries : catBurrito}
              alt={tab}
              width={512}
              height={512}
              loading="lazy"
              className={`w-40 h-40 md:w-52 md:h-52 object-contain drop-shadow-[0_20px_40px_oklch(0.62_0.24_25/0.35)] transition duration-500 ${tab === "Drinks" ? "hidden" : ""}`}
            />
          </div>

          {tab === "Burrito" && (
            <div>
              <CategoryHeader kicker="Specialitatea casei" title="BURRITO" />
              <div className="grid md:grid-cols-2 gap-6">
                {burrito.map((i) => <ItemCard key={i.name + i.script} item={i} />)}
              </div>
            </div>
          )}

          {tab === "Sandwich" && (
            <div>
              <CategoryHeader kicker="La fereastră" title="SANDWICH" />
              <div className="grid md:grid-cols-2 gap-6">
                {sandwich.map((i) => <ItemCard key={i.name + i.script} item={i} />)}
              </div>
            </div>
          )}

          {tab === "Fries" && (
            <div>
              <CategoryHeader kicker="Pentru poftă" title="FRIES & MORE" />
              <div className="grid md:grid-cols-2 gap-6">
                {fries.map((i) => <ItemCard key={i.name + i.script} item={i} />)}
              </div>
            </div>
          )}

          {tab === "Drinks" && (
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-baseline gap-3 mb-6 border-b border-border pb-3">
                  <p className="font-script text-4xl text-primary">Cold</p>
                  <p className="font-script text-4xl text-foreground">Drinks</p>
                </div>
                <ul className="divide-y divide-border/60">
                  {coldDrinks.map((d, idx) => (
                    <li key={idx} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="font-semibold">{d.name}</span>
                      <span className="flex items-center gap-4">
                        <span className="text-muted-foreground text-xs">{d.size}</span>
                        <span className="price-tag text-xs"><span>{d.price}</span><span className="ron">RON</span></span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-muted-foreground mt-4">* Prețul include taxa SGR de 0,5 lei / sticlă sau doză aluminiu.</p>
              </div>

              <div>
                <div className="flex items-baseline gap-3 mb-6 border-b border-border pb-3">
                  <p className="font-script text-4xl text-primary">Hot</p>
                  <p className="font-script text-4xl text-foreground">Drinks</p>
                </div>
                <ul className="divide-y divide-border/60">
                  {hotDrinks.map((d, idx) => (
                    <li key={idx} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="font-semibold">{d.name}</span>
                      <span className="flex items-center gap-4">
                        <span className="text-muted-foreground text-xs">{d.size}</span>
                        <span className="price-tag text-xs"><span>{d.price}</span><span className="ron">RON</span></span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <p className="text-center text-xs text-muted-foreground mt-16 italic">* imaginile produselor sunt cu titlu de prezentare</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Ce zic clienții</p>
            <div className="flex items-center justify-center gap-4">
              <span className="divider-line text-primary" />
              <h2 className="font-display text-5xl md:text-6xl tracking-wide">VOCEA STRĂZII</h2>
              <span className="divider-line text-primary" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Cel mai bun burrito din oraș. Mă întorc săptămânal.", a: "Andrei P.", r: "Bistrița" },
              { q: "Crispy minibox-ul e periculos de bun. Recomand!", a: "Maria T.", r: "Centru" },
              { q: "Comandat pe Bolt, ajuns rapid, cald și gustos.", a: "Vlad M.", r: "Independenței" },
            ].map((t) => (
              <div key={t.a} className="bg-card border border-border rounded-2xl p-7 hover:border-primary hover:-translate-y-1 transition duration-300">
                <div className="text-primary text-lg mb-3">★★★★★</div>
                <p className="font-script text-2xl leading-snug mb-5">"{t.q}"</p>
                <p className="font-display tracking-wider text-sm">{t.a} <span className="text-muted-foreground font-body font-normal">· {t.r}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="eyebrow mb-5">Vino la fereastră</p>
          <h2 className="font-display text-5xl md:text-7xl mb-2 tracking-wide">NE GĂSEȘTI ÎN</h2>
          <p className="font-script text-6xl md:text-7xl text-primary mb-12">Bistrița</p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="eyebrow mb-3">Adresă</p>
              <p className="font-semibold">Str. Liviu Rebreanu 12</p>
              <p className="text-muted-foreground text-sm mb-3">420068 Bistrița</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Str.+Liviu+Rebreanu+12+Bistrița"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-primary hover:opacity-80"
              >
                Deschide în Maps →
              </a>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="eyebrow mb-3">Program</p>
              <p className="font-semibold">Lun–Joi: 11:00 – 23:00</p>
              <p className="font-semibold">Vin–Dum: 11:00 – 02:00</p>
              {status && (
                <p className="mt-3 inline-flex items-center gap-2 text-xs">
                  <span className={`status-dot ${status.open ? "" : "closed"}`} />
                  <span>{status.label}</span>
                </p>
              )}
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="eyebrow mb-3">Comandă</p>
              <a href="tel:+40744123456" className="font-display text-2xl tracking-wide hover:text-primary transition">0744 123 456</a>
              <p className="text-muted-foreground text-sm">livrare în tot orașul</p>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-border">
            <iframe
              title="Locația NOMAD Food"
              src="https://www.google.com/maps?q=Str.%20Liviu%20Rebreanu%2012%2C%20Bistrița&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale contrast-125"
              style={{ border: 0, filter: "grayscale(1) invert(0.92) hue-rotate(180deg)" }}
            />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://food.bolt.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#34D186] text-black px-7 py-4 rounded-full font-bold hover:scale-105 transition shadow-[0_0_30px_rgba(52,209,134,0.35)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
              Comandă pe Bolt Food
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white hover:scale-105 transition shadow-[0_0_30px_rgba(225,48,108,0.35)]"
              style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Urmărește-ne pe Instagram
            </a>
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
          <p className="font-script text-2xl text-muted-foreground">cu drag, din Bistrița · {new Date().getFullYear()}</p>
        </div>
      </footer>

      {/* Sticky mobile order bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border p-3 flex gap-2">
        <a
          href="tel:+40744123456"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-border rounded-full py-3 text-sm font-semibold"
        >
          Sună
        </a>
        <a
          href="https://food.bolt.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] inline-flex items-center justify-center gap-2 bg-[#34D186] text-black rounded-full py-3 text-sm font-bold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
          Comandă pe Bolt
        </a>
      </div>
    </div>
  );
}
