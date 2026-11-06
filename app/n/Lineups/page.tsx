export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-[#001d3d] px-5 py-10 text-[#222]">
      <div className="mx-auto w-full max-w-xl">

        {/* İŞLETME */}
        <section className="text-center">

          {/* Logo */}
          <div className="mx-auto flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full bg-[#000000] shadow-md">
            <img
              src="/Linesup logo.jpeg"
              alt="Lineups"
              className="h-full w-full object-contain"
            />
          </div>

         {/* İşletme adı */}
          <h1 className="mt-6 text-4xl font-bold text-[#dee2e6]">
            Lineups
          </h1>

          {/* Açıklama */}
          <p className="mt-3 text-lg text-gray-300 font-bold text-[#e5e5e5]">
            Yeni Tarzın, Yeni Sen
          </p>

        </section>

        {/* ANA BUTONLAR */}
        <section className="mt-10">

          {/* GOOGLE */}
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ52FQGGxftRQRWpGoiX0pSOo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[82px] items-center gap-5 rounded-2xl bg-[#ced4da] px-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg"
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

          {/* WEB SİTESİ */}
          <a
            href="https://www.kolayrandevu.com/isletme/lineups-barber?website=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-[72px] items-center gap-5 rounded-2xl bg-[#ced4da] px-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-2xl">
              🌐
            </div>

            <p className="text-xl font-semibold">
              Randevu Almak İçin Tıkla
            </p>
          </a>

          {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/lineupsbarber/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex min-h-[72px] items-center gap-5 rounded-2xl bg-[#ced4da] px-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
          ◎
        </div>

        <p className="text-xl font-semibold">
          Instagram
        </p>
      </a>

      {/* WHATSAPP */}
    <a
      href="https://wa.me/905536671260"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 flex min-h-[72px] items-center gap-5 rounded-2xl bg-[#ced4da] px-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
        ◎
      </div>

      <p className="text-xl font-semibold">
        WhatsApp
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