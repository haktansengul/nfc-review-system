export default function CrepressoPage() {
  return (
    <main className="min-h-screen bg-[#F6F1E9] px-5 py-8 text-[#2B211B]">
      <div className="mx-auto w-full max-w-md">

        {/* ÜST GÖRSEL */}
        <header className="text-center">
          <div className="relative overflow-hidden rounded-3xl bg-[#3B281D]">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
              alt="Crepresso kafe"
              className="h-56 w-full object-cover opacity-80"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25">
              <p className="text-4xl font-semibold tracking-wide text-white">
                Crepresso
              </p>
              <p className="mt-2 text-xs tracking-[0.35em] text-[#F6E8D3]">
                CRÊPE & COFFEE
              </p>
            </div>
          </div>

          {/* GERÇEK CREPRESSO LOGOSU */}
          <div className="relative mx-auto -mt-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-[#F6F1E9] bg-white shadow-md">
            <img
              src="https://qrdijitalmenu.com/uploads/logo/logo_e5b19f7233bced8e5a510aa6606a36ef.jpg"
              alt="Crepresso Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Crepresso
          </h1>

          <p className="mt-2 text-xs tracking-[0.3em] text-[#806B5A]">
            CRÊPE & COFFEE
          </p>

          <p className="mt-4 text-sm text-[#78695D]">
            Kahve ve tatlı keyfinize bekleriz.
          </p>
        </header>

        {/* ANA BUTONLAR */}
        <section className="mt-8 space-y-4">

          {/* GOOGLE YORUM */}
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJvWeL5YGlyhQRR55-EJ_0kf0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[72px] items-center justify-between rounded-2xl bg-[#69462F] px-6 text-white shadow-md transition hover:bg-[#543723]"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">⭐</span>

              <div>
                <p className="text-base font-semibold">
                  Google'da Yorum Yap
                </p>
                <p className="mt-1 text-xs text-[#E8D9C5]">
                  Görüşünüz bizim için değerli
                </p>
              </div>
            </div>

            <span className="text-2xl">›</span>
          </a>

          {/* MENÜ */}
          <a
            href="https://qrdijitalmenu.com/crepresso#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[72px] items-center justify-between rounded-2xl border border-[#E1D4C5] bg-white px-6 shadow-sm transition hover:border-[#B89A79] hover:bg-[#FCFAF6]"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl">📖</span>

              <div>
                <p className="text-base font-semibold">
                  Menüyü Görüntüle
                </p>
                <p className="mt-1 text-xs text-[#88796C]">
                  Yiyecek ve içeceklerimiz
                </p>
              </div>
            </div>

            <span className="text-2xl">›</span>
          </a>

        </section>

        {/* İLETİŞİM */}
        <section className="mt-9">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#DED0BF]" />

            <h2 className="text-xs font-semibold tracking-[0.2em] text-[#806B5A]">
              BİZİ KEŞFEDİN
            </h2>

            <div className="h-px flex-1 bg-[#DED0BF]" />
          </div>

          <div className="grid grid-cols-2 gap-3">

            {/* WEB SİTESİ */}
            <a
              href="https://crepresso.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#E5D9CB] bg-white p-5 text-center transition hover:bg-[#FCFAF6]"
            >
              <span className="text-2xl">🌐</span>
              <p className="mt-2 text-sm font-semibold">
                Web Sitesi
              </p>
            </a>

            {/* KONUM */}
            <a
              href="https://www.google.com/maps/place/Crepresso/@41.0361409,28.8552105,17z/data=!4m6!3m5!1s0x14caa581e58b67bd:0xfd91f49f107e9e47!8m2!3d41.0361409!4d28.8552105!16s%2Fg%2F11zkhvsm08?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[#E5D9CB] bg-white p-5 text-center transition hover:bg-[#FCFAF6]"
            >
              <span className="text-2xl">📍</span>
              <p className="mt-2 text-sm font-semibold">
                Konum
              </p>
            </a>

          </div>
        </section>

        {/* ALT GÖRSEL */}
        <section className="mt-8 overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85"
            alt="Kahve sunumu"
            className="h-48 w-full object-cover"
          />
        </section>

        {/* FOOTER */}
        <footer className="pb-6 pt-8 text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-[#C6AD91]" />

          <p className="text-sm font-semibold tracking-[0.2em]">
            CREPRESSO
          </p>

          <p className="mt-2 text-xs text-[#88796C]">
            CRÊPE & COFFEE
          </p>
        </footer>

      </div>
    </main>
  );
}