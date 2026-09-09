export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-10 text-[#222]">
      <div className="mx-auto w-full max-w-xl">

        {/* LOGO / BAŞLIK */}
        <section className="text-center pt-6">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-black text-5xl shadow-lg">
            📱
          </div>

          <h1 className="mt-7 text-4xl font-bold tracking-tight">
            NFC Google Yorum Sistemi
          </h1>

          <p className="mt-4 text-lg leading-7 text-gray-600">
            Müşterileriniz telefonlarını yaklaştırsın,
            Google'da yorum bıraksın.
          </p>
        </section>

        {/* ANA BUTON */}
        <section className="mt-8">
          <a
            href="https://wa.me/905063860958"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[64px] items-center justify-center rounded-2xl bg-black px-6 text-lg font-bold text-white shadow-lg transition hover:scale-[1.01]"
          >
            📞 Bilgi Alın
          </a>
        </section>

        {/* ÖZELLİKLER */}
        <section className="mt-10 grid gap-4">

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="text-3xl">⭐</div>
            <h2 className="mt-3 text-xl font-bold">
              Google Yorumlarını Artırın
            </h2>
            <p className="mt-2 text-gray-600">
              Müşterilerinizin Google yorum sayfanıza
              ulaşmasını kolaylaştırın.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="text-3xl">📱</div>
            <h2 className="mt-3 text-xl font-bold">
              Tek Dokunuşla
            </h2>
            <p className="mt-2 text-gray-600">
              Müşteriniz telefonunu NFC ürününe yaklaştırır
              ve yorum sayfanız açılır.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <div className="text-3xl">⚡</div>
            <h2 className="mt-3 text-xl font-bold">
              Kullanımı Çok Kolay
            </h2>
            <p className="mt-2 text-gray-600">
              Uygulama indirmeye gerek yok.
              Telefonu yaklaştırmak yeterli.
            </p>
          </div>

        </section>

        {/* NASIL ÇALIŞIR */}
        <section className="mt-12">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-bold">
              Nasıl Çalışır?
            </h2>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="space-y-4">

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                1
              </div>
              <p className="font-semibold">
                NFC ürününüzü işletmenize yerleştirin.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                2
              </div>
              <p className="font-semibold">
                Müşteriniz telefonunu yaklaştırsın.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                3
              </div>
              <p className="font-semibold">
                Google yorum sayfanız açılsın.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                4
              </div>
              <p className="font-semibold">
                Müşteriniz yorumunu bıraksın.
              </p>
            </div>

          </div>
        </section>

        {/* İŞLETME ÇÖZÜMÜ */}
        <section className="mt-12 rounded-3xl bg-black p-7 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold">
            İşletmeniz İçin NFC Yorum Sistemi
          </h2>

          <p className="mt-3 leading-6 text-gray-300">
            Kafe, restoran, berber, güzellik merkezi,
            eczane, otel ve tüm işletmeler için.
          </p>

          <a
            href="https://wa.me/905063860958"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-2xl bg-white px-6 py-4 text-lg font-bold text-black transition hover:scale-[1.01]"
          >
            WhatsApp'tan Bilgi Al
          </a>
        </section>

        {/* ALT */}
        <footer className="pb-6 pt-12 text-center">
          <p className="text-sm text-gray-400">
            NFC Google Yorum Sistemi
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Google yorumlarınıza daha kolay ulaşın.
          </p>
        </footer>

      </div>
    </main>
  );
}