export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5 py-10 text-[#222]">
      <div className="mx-auto w-full max-w-xl">

        {/* İŞLETME */}
        <section className="text-center">

          {/* Logo */}
          <div className="mx-auto flex h-45 w-45 items-center justify-center bg-white shadow-md">
            <img
              src="/eczane-deniz.png"
              alt="Eczane Deniz"
              className="h-full w-full object-contain"
            />
          </div>

          {/* İşletme adı */}
          <h1 className="mt-6 text-4xl font-bold">
            Eczane Deniz
          </h1>

          {/* Açıklama */}
          <p className="mt-3 text-lg text-gray-600">
            KENDINIZI OZEL HISSEDIN
          </p>

        </section>

        {/* ANA BUTONLAR */}
        <section className="mt-10">

          {/* GOOGLE */}
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ_xFyxlRetRQRh2hVgfH15lk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[82px] items-center gap-5 rounded-2xl bg-white px-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl">
              ⭐
            </div>

            <div className="text-left">
              <p className="text-xl font-bold">
                Google'da Bizi Değerlendirin
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Görüşünüz bizim için çok değerli
              </p>
            </div>
          </a>

          {/* TELEFON */}
          <a
            href="tel:+02128556634"
            className="mt-4 flex min-h-[72px] items-center gap-5 rounded-2xl bg-white px-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl">
              📞
            </div>

            <div className="text-left">
              <p className="text-xl font-semibold">
                0212 855 66 34
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Bizi arayın
              </p>
            </div>
          </a>

        </section>

        {/* SOSYAL MEDYA */}
        <section className="mt-12">

          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-xl font-bold">
              Sosyal Medya
            </h2>

            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[72px] items-center gap-5 rounded-2xl bg-white px-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
              ◎
            </div>

            <p className="text-xl font-semibold">
              Instagram
            </p>
          </a>

        </section>

        {/* ALT */}
        <footer className="pb-6 pt-12 text-center">
          <p className="text-sm text-gray-400">
            NFC ile hızlı erişim
          </p>
        </footer>

      </div>
    </main>
  );
}