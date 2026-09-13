export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-[#171512] px-5 py-10 text-[#f5f1e8]">
      <div className="mx-auto w-full max-w-md">

        {/* LOGO / BAŞLIK */}
        <section className="pt-4 text-center">
          <img
            src="/kavurmaciii-logo.png"
            alt="Kavurmaciii"
            className="mx-auto h-36 w-36 object-contain"
          />

          <p className="mt-3 text-sm tracking-[0.2em] text-[#b99a6a]">
            LEZZETİN ADRESİ
          </p>
        </section>

        {/* ANA BUTONLAR */}
        <section className="mt-10 space-y-4">

          {/* MENÜ */}
          <a
            href="/n/Kavurmaciii/menu"
            className="flex min-h-[78px] items-center justify-between rounded-2xl border border-[#4a4033] bg-[#211e19] px-6 transition hover:border-[#b99a6a] hover:bg-[#28231d]"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#30291f] text-2xl">
                🍽️
              </div>

              <div>
                <p className="text-lg font-bold">
                  Menümüz
                </p>

                <p className="mt-1 text-sm text-[#9e9689]">
                  Lezzetlerimizi keşfedin
                </p>
              </div>
            </div>

            <span className="text-xl text-[#b99a6a]">
              →
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/kavurmaciii.tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[78px] items-center justify-between rounded-2xl border border-[#4a4033] bg-[#211e19] px-6 transition hover:border-[#b99a6a] hover:bg-[#28231d]"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#30291f] text-2xl">
                ◎
              </div>

              <div>
                <p className="text-lg font-bold">
                  Instagram
                </p>

                <p className="mt-1 text-sm text-[#9e9689]">
                  Bizi Instagram'da takip edin
                </p>
              </div>
            </div>

            <span className="text-xl text-[#b99a6a]">
              →
            </span>
          </a>

          {/* GOOGLE */}
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJG7IQkGNftRQR_U9A9gJJfK0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[78px] items-center justify-between rounded-2xl border border-[#4a4033] bg-[#211e19] px-6 transition hover:border-[#b99a6a] hover:bg-[#28231d]"
          >
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#30291f] text-2xl">
                ⭐
              </div>

              <div>
                <p className="text-lg font-bold">
                  Google'da Bizi Değerlendirin
                </p>

                <p className="mt-1 text-sm text-[#9e9689]">
                  Görüşünüz bizim için çok değerli
                </p>
              </div>
            </div>

            <span className="text-xl text-[#b99a6a]">
              →
            </span>
          </a>

        </section>

        {/* AYIRICI */}
        <div className="my-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#3d372f]" />

          <span className="text-xs tracking-[0.25em] text-[#80786c]">
            İLETİŞİM
          </span>

          <div className="h-px flex-1 bg-[#3d372f]" />
        </div>

        {/* TELEFON */}
        <section className="space-y-3">

          <a
            href="tel:+905553869191"
            className="flex min-h-[68px] items-center gap-4 rounded-2xl border border-[#3a342c] bg-[#211e19] px-5 transition hover:border-[#b99a6a]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#30291f] text-xl">
              ☎
            </div>

            <div>
              <p className="text-base font-semibold">
                0555 386 91 91
              </p>

              <p className="mt-1 text-xs text-[#918a7e]">
                Bizi arayın
              </p>
            </div>
          </a>

          {/* E-POSTA */}
          <a
            href="mailto:"
            className="flex min-h-[68px] items-center gap-4 rounded-2xl border border-[#3a342c] bg-[#211e19] px-5 transition hover:border-[#b99a6a]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#30291f] text-xl">
              ✉
            </div>

            <div>
              <p className="text-base font-semibold">
                E-posta
              </p>

              <p className="mt-1 text-xs text-[#918a7e]">
                Bize ulaşın
              </p>
            </div>
          </a>

        </section>

        {/* FOOTER */}
        <footer className="pb-5 pt-12 text-center">
          <p className="text-xs tracking-wide text-[#665f54]">
            KAVURMACIII
          </p>

          <p className="mt-2 text-[11px] text-[#514b43]">
            NFC ile hızlı erişim
          </p>
        </footer>

      </div>
    </main>
  );
}