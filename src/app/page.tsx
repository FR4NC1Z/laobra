
import Image from "next/image";

const redes = [
  {
    nombre: "Instagram",
    descripcion: "Inspírate con nuestras flores",
    href: "https://www.instagram.com/",
    icono: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    nombre: "TikTok",
    descripcion: "Descubre el mundo de La Obra",
    href: "https://www.tiktok.com/",
    icono: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M19.6 7.2a6.7 6.7 0 0 1-4.1-1.4v8.1a6.1 6.1 0 1 1-5.3-6V12a2.5 2.5 0 1 0 1.8 2.4V2h3.5a6.7 6.7 0 0 0 4.1 4.2v1Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F3E2CE] px-6 py-12 text-black">
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#E7C5A5]/40 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-center">
        <div className="relative mb-5 h-52 w-52">
          <Image
            src="/logo-la-obra.png"
            alt="La Obra"
            fill
            priority
            sizes="208px"
            className="object-contain mix-blend-multiply"
          />
        </div>


        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/65">
            EXPERIENCIAS CON FLORES
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/65">
            POR MATEO CONTRERAS
          </p>
        </div>

        <h1 className="mt-7 text-center text-6xl font-semibold uppercase leading-none tracking-[-0.06em]">
          SÍGUENOS
        </h1>

        <p className="mt-4 max-w-[280px] text-center text-base leading-7 text-black/65">
          Sé parte de La Obra.
        </p>

        <div className="mt-9 flex w-full flex-col gap-4">
          {redes.map((red, index) => (
            <a
              key={red.nombre}
              href={red.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[88px] items-center gap-4 rounded-2xl border border-black/10 bg-white/65 px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black text-[#F3E2CE] transition-transform duration-300 group-hover:scale-105">
                {red.icono}
              </span>

              <span className="flex flex-1 flex-col gap-1">
                <span className="text-xl font-semibold">{red.nombre}</span>
                <span className="text-xs text-black/55">
                  {red.descripcion}
                </span>
              </span>

              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}
        </div>
        <footer className="mt-12 text-center">
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-black/45">
            ARTE CON FLORES, DETALLES Y MÁS
          </p>
        </footer>
      </div>
    </main>
  );
}
