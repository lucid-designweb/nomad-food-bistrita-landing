import { createFileRoute } from "@tanstack/react-router";
import wheelBurger from "@/assets/wheel-burger.png";
import wheelWrap from "@/assets/wheel-wrap.png";
import wheelFries from "@/assets/wheel-fries.png";
import catBurrito from "@/assets/cat-burrito.png";
import catSandwich from "@/assets/cat-sandwich.png";
import catFries from "@/assets/cat-fries.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOMAD Food — Burrito, Sandwich & Fries în Bistrița" },
      { name: "description", content: "NOMAD Food Bistrița — burrito, sandwich-uri, fries și băuturi reci. Mâncare bună, la fereastră." },
      { property: "og:title", content: "NOMAD Food — Bistrița" },
      { property: "og:description", content: "Burrito, sandwich-uri și fries în Bistrița." },
    ],
  }),
  component: Index,
});

type Item = { name: string; script: string; desc?: string; gr?: string; price: string };
type Drink = { name: string; size: string; price: string };

const burrito: Item[] = [
  { name: "Crispy", script: "Burrito", gr: "285 gr.", desc: "Lipie 90g, strips 100g, cremă brânză, dulceață ardei iute, maioneză, salată mix, porumb, ardei copt, muștar, sos burger, ceapă crispy", price: "23,99" },
  { name: "Chicken Kebab", script: "Burrito", gr: "280 gr.", desc: "Lipie 90g, piept de pui la plită 100g, cremă brânză, salată iceberg, salată ruccola, roșii, castraveți, ardei copt, sos, ceapă caramelizată", price: "24,99" },
  { name: "Beef Kebab", script: "Burrito", gr: "280 gr.", desc: "Lipie 90g, kebab vită la plită 100g, cremă de brânză, salată mix, ardei copt, castravete, sos special, ceapă caramelizată", price: "24,99" },
];

const sandwich: Item[] = [
  { name: "House", script: "Sandwich", gr: "275 gr.", desc: "Chiflă 120g, file piept de pui 100g, salată iceberg 70g, castravete, roșii, maioneză, muștar dulce", price: "20,99" },
  { name: "Panini", script: "Prosciutto", gr: "250 gr.", desc: "Chiflă 120g, brânză feta 70g, prosciutto cotto 100g, roșii, salată iceberg", price: "19,99" },
  { name: "Nomad", script: "Snitzel", gr: "315 gr.", desc: "Chiflă 120g, șnițel de pui 100g, salată iceberg 70g, brânză cheddar, castravete, muștar dulce", price: "23,99" },
  { name: "Nomadic", script: "cu șuncă", gr: "290 gr.", desc: "Chiflă 120g, șuncă presată 70g, brânză cheddar, castravete murat, roșii, salată", price: "16,99" },
];

const fries: Item[] = [
  { name: "Cartofi", script: "Prăjiți", gr: "90 gr.", price: "7,00" },
  { name: "Nomad", script: "Fries", gr: "230 gr.", desc: "Cartofi, piept de pui, bacon, sos doner", price: "24,99" },
  { name: "Nomad", script: "Salad", gr: "280 gr.", desc: "Crispy 130g, salată mix, brânză feta, măsline negre, porumb, roșii, sos maioneză, chiflă prăjită", price: "26,99" },
  { name: "Crispy", script: "Minibox", gr: "380 gr.", desc: "Crispy strips, cartofi prăjiți, sos la alegere", price: "29,99" },
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
    <div className="relative bg-card/40 border border-border/60 rounded-2xl p-6 hover:border-primary/60 transition group">
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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

        {/* Decorative side script */}
        <p className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 font-script text-2xl text-primary/40 -rotate-90 origin-left whitespace-nowrap tracking-widest">since 2023 · bistrița</p>
        <p className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 font-script text-2xl text-primary/40 rotate-90 origin-right whitespace-nowrap tracking-widest">window · food · co.</p>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-5 text-primary">
            <span className="divider-line" />
            <span className="eyebrow text-primary">Bistrița · Window Food</span>
            <span className="divider-line" />
          </div>

          <h1 className="font-display text-[16vw] md:text-[8.5rem] leading-[0.85] tracking-wide">
            NOMAD
            <span className="block text-primary text-glow">FOOD</span>
          </h1>
          <p className="font-script text-4xl md:text-5xl text-foreground -mt-3 md:-mt-4">made with love</p>

          <div className="relative mx-auto mt-2 md:mt-4 w-[92vw] max-w-[560px] md:max-w-[620px] wheel-stage">
            <div className="wheel-plane">
              <div className="wheel-rotor">
                {[
                  { src: wheelBurger, alt: "Burger Nomad", angle: 0 },
                  { src: wheelWrap, alt: "Crispy chicken wrap", angle: 120 },
                  { src: wheelFries, alt: "Box cu cartofi prăjiți și crispy strips", angle: 240 },
                ].map((it) => (
                  <div
                    key={it.angle}
                    className="wheel-item"
                    style={{ transform: `rotate(${it.angle}deg) translateY(-32%)` }}
                  >
                    {/* counter the item's positional rotation so it sits upright before the rotor's spin counter applies */}
                    <div style={{ transform: `rotate(${-it.angle}deg)`, width: "100%", height: "100%" }}>
                      <div className="wheel-counter">
                        <div className="wheel-item-inner" style={{ animationDelay: `${(it.angle / 360) * -5}s` }}>
                          <img src={it.src} alt={it.alt} width={1024} height={1024} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="wheel-shadow" />
          </div>

          <p className="eyebrow text-muted-foreground -mt-2 md:-mt-6">
            Burrito · Sandwich · Fries · Drinks
          </p>


          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#meniu" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-[0_0_40px_oklch(0.62_0.24_25/0.4)]">
              Vezi meniul
            </a>
            <a href="#contact" className="border border-border px-8 py-4 rounded-full font-semibold hover:bg-card transition">
              Sună acum
            </a>
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

          {/* Stats */}
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
            <div key={f.title} className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition group">
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
          <div className="text-center mb-20">
            <p className="eyebrow mb-4">Ce găsești la noi</p>
            <h2 className="font-display text-7xl md:text-9xl tracking-wide">MENIU</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { img: catBurrito, label: "Burrito" },
              { img: catSandwich, label: "Sandwich" },
              { img: catFries, label: "Fries & More" },
            ].map((c) => (
              <a key={c.label} href={`#cat-${c.label}`} className="group text-center">
                <div className="aspect-square bg-card rounded-2xl flex items-center justify-center overflow-hidden border border-border group-hover:border-primary transition">
                  <img src={c.img} alt={c.label} width={768} height={768} loading="lazy" className="w-full h-full object-contain p-6 group-hover:scale-110 transition duration-500" />
                </div>
                <p className="font-display text-3xl mt-4 group-hover:text-primary transition tracking-wide">{c.label}</p>
              </a>
            ))}
          </div>

          {/* Burrito */}
          <div id="cat-Burrito" className="mb-24">
            <CategoryHeader kicker="Specialitatea casei" title="BURRITO" />
            <div className="grid md:grid-cols-2 gap-6">
              {burrito.map((i) => <ItemCard key={i.name + i.script} item={i} />)}
            </div>
          </div>

          {/* Sandwich */}
          <div id="cat-Sandwich" className="mb-24">
            <CategoryHeader kicker="La fereastră" title="SANDWICH" />
            <div className="grid md:grid-cols-2 gap-6">
              {sandwich.map((i) => <ItemCard key={i.name + i.script} item={i} />)}
            </div>
          </div>

          {/* Fries */}
          <div id="cat-Fries" className="mb-24">
            <CategoryHeader kicker="Pentru poftă" title="FRIES & MORE" />
            <div className="grid md:grid-cols-2 gap-6">
              {fries.map((i) => <ItemCard key={i.name + i.script} item={i} />)}
            </div>
          </div>

          {/* Drinks */}
          <div id="cat-Drinks" className="grid md:grid-cols-2 gap-16">
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
              <div key={t.a} className="bg-card border border-border rounded-2xl p-7 hover:border-primary transition">
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
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-5">Vino la fereastră</p>
          <h2 className="font-display text-5xl md:text-7xl mb-2 tracking-wide">NE GĂSEȘTI ÎN</h2>
          <p className="font-script text-6xl md:text-7xl text-primary mb-12">Bistrița</p>

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
              <p className="font-display text-2xl tracking-wide">0744 123 456</p>
              <p className="text-muted-foreground text-sm">livrare în tot orașul</p>
            </div>
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
    </div>
  );
}
