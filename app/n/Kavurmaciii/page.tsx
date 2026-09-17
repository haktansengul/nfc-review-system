export default function BusinessPage() {
  return (
    // ANA SAYFA ARKA PLAN RENGİ
    <main className="min-h-screen bg-[#006400] px-5 py-10 text-[#f5f1e8]">
      <div className="mx-auto w-full max-w-md">

        {/* LOGO / BAŞLIK */}
        <section className="pt-4 text-center">
          <img
            src="/kavurmaciii-logo.png"
            alt="Kavurmaciii"
            className="mx-auto h-36 w-36 object-contain"
          />

          {/* ÜST AÇIKLAMA YAZI RENGİ */}
          <p className="mt-3 text-sm tracking-[0.2em] text-[#b99a6a]">
            LEZZETİN ADRESİ
          </p>
        </section>

        {/* ANA BUTONLAR */}
        <section className="mt-10 space-y-4">

          {/* MENÜ */}
          <a
            href="/n/Kavurmaciii/menu"

            // BUTON ARKA PLAN + KENARLIK + HOVER RENKLERİ
            className="flex min-h-[78px] items-center justify-between rounded-2xl border border-[#4a4033] bg-[#211e19] px-6 transition hover:border-[#b99a6a] hover:bg-[#28231d]"
          >
            <div className="flex items-center gap-5">

              {/* BUTON İÇİNDEKİ İKON ARKA PLAN RENGİ */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#30291f] text-2xl">
                🍽️
              </div>

              <div>

                {/* BUTON ANA YAZI RENGİ */}
                <p className="text-lg font-bold">
                  Menümüz
                </p>

                {/* BUTON ALT YAZI RENGİ */}
                <p className="mt-1 text-sm text-[#9e9689]">
                  Lezzetlerimizi keşfedin
                </p>
              </div>
            </div>

            {/* OK İŞARETİ RENGİ */}
            <span className="text-xl text-[#b99a6a]">
              →
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/kavurmaciii.tr/"
            target="_blank"
            rel="noopener noreferrer"

            // BUTON ARKA PLAN + KENARLIK + HOVER RENKLERİ
            className="flex min-h-[78px] items-center justify-between rounded-2xl border border-[#4a4033] bg-[#211e19] px-6 transition hover:border-[#b99a6a] hover:bg-[#28231d]"
          >
            <div className="flex items-center gap-5">

              {/* İKON ARKA PLAN RENGİ */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#30291f] text-2xl">
                ◎
              </div>

              <div>

                {/* BUTON ANA YAZI RENGİ */}
                <p className="text-lg font-bold">
                  Instagram
                </p>

                {/* BUTON ALT YAZI RENGİ */}
                <p className="mt-1 text-sm text-[#9e9689]">
                  Bizi Instagram'da takip edin
                </p>
              </div>
            </div>

            {/* OK İŞARETİ RENGİ */}
            <span className="text-xl text-[#b99a6a]">
              →
            </span>
          </a>

          {/* GOOGLE */}
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJG7IQkGNftRQR_U9A9gJJfK0"
            target="_blank"
            rel="noopener noreferrer"

            // BUTON ARKA PLAN + KENARLIK + HOVER RENKLERİ
            className="flex min-h-[78px] items-center justify-between rounded-2xl border border-[#4a4033] bg-[#211e19] px-6 transition hover:border-[#b99a6a] hover:bg-[#28231d]"
          >
            <div className="flex items-center gap-5">

              {/* İKON ARKA PLAN RENGİ */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#30291f] text-2xl">
                ⭐
              </div>

              <div>

                {/* BUTON ANA YAZI RENGİ */}
                <p className="text-lg font-bold">
                  Google'da Bizi Değerlendirin
                </p>

                {/* BUTON ALT YAZI RENGİ */}
                <p className="mt-1 text-sm text-[#9e9689]">
                  Görüşünüz bizim için çok değerli
                </p>
              </div>
            </div>

            {/* OK İŞARETİ RENGİ */}
            <span className="text-xl text-[#b99a6a]">
              →
            </span>
          </a>

        </section>

        {/* AYIRICI */}
        <div className="my-10 flex items-center gap-4">

          {/* AYIRICI ÇİZGİ RENGİ */}
          <div className="h-px flex-1 bg-[#3d372f]" />

          {/* "İLETİŞİM" YAZI RENGİ */}
          <span className="text-xs tracking-[0.25em] text-[#80786c]">
            İLETİŞİM
          </span>

          {/* AYIRICI ÇİZGİ RENGİ */}
          <div className="h-px flex-1 bg-[#3d372f]" />
        </div>

        {/* TELEFON */}
        <section className="space-y-3">

          <a
            href="tel:+905553869191"

            // İLETİŞİM KUTUSU ARKA PLAN + KENARLIK
            className="flex min-h-[68px] items-center gap-4 rounded-2xl border border-[#3a342c] bg-[#211e19] px-5 transition hover:border-[#b99a6a]"
          >

            {/* İKON ARKA PLAN RENGİ */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#30291f] text-xl">
              ☎
            </div>

            <div>

              {/* TELEFON YAZI RENGİ */}
              <p className="text-base font-semibold">
                0555 386 91 91
              </p>

              {/* ALT YAZI RENGİ */}
              <p className="mt-1 text-xs text-[#918a7e]">
                Bizi arayın
              </p>
            </div>
          </a>

          {/* E-POSTA */}
          <a
            href="mailto:"

            // İLETİŞİM KUTUSU ARKA PLAN + KENARLIK
            className="flex min-h-[68px] items-center gap-4 rounded-2xl border border-[#3a342c] bg-[#211e19] px-5 transition hover:border-[#b99a6a]"
          >

            {/* İKON ARKA PLAN RENGİ */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#30291f] text-xl">
              ✉
            </div>

            <div>

              {/* E-POSTA YAZI RENGİ */}
              <p className="text-base font-semibold">
                E-posta
              </p>

              {/* ALT YAZI RENGİ */}
              <p className="mt-1 text-xs text-[#918a7e]">
                Bize ulaşın
              </p>
            </div>
          </a>

        </section>

        {/* FOOTER */}
        <footer className="pb-5 pt-12 text-center">

          {/* FOOTER ANA YAZI RENGİ */}
          <p className="text-xs tracking-wide text-[#665f54]">
            KAVURMACIII
          </p>

          {/* FOOTER ALT YAZI RENGİ */}
          <p className="mt-2 text-[11px] text-[#514b43]">
            NFC ile hızlı erişim
          </p>

        </footer>

      </div>
    </main>
  );
} 