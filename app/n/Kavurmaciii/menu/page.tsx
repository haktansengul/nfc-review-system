const menu = [
  {
    category: "EKMEK ARASI",
    items: [
      {
        name: "100 GR",
        description: "Ekmek arası kavurma",
        price: "430 TL",
      },
      {
        name: "150 GR",
        description: "Ekmek arası kavurma",
        price: "595 TL",
      },
      {
        name: "200 GR",
        description: "Ekmek arası kavurma",
        price: "790 TL",
      },
    ],
  },

  {
    category: "PORSİYON",
    items: [
      {
        name: "100 GR",
        description: "Porsiyon kavurma",
        price: "510 TL",
      },
      {
        name: "150 GR",
        description: "Porsiyon kavurma",
        price: "680 TL",
      },
      {
        name: "200 GR",
        description: "Porsiyon kavurma",
        price: "890 TL",
      },
    ],
  },

  {
    category: "EKSTRALAR",
    items: [
      {
        name: "Patates Kızartması",
        description: "Çıtır patates kızartması",
        price: "150 TL",
      },
    ],
  },

  {
    category: "İÇECEKLER",
    items: [
      {
        name: "Coca Cola",
        description: "330 ml",
        price: "85 TL",
      },
      {
        name: "Sprite",
        description: "330 ml",
        price: "85 TL",
      },
      {
        name: "Fanta",
        description: "330 ml",
        price: "85 TL",
      },
      {
        name: "Fuse Tea",
        description: "Limon / Şeftali - 350 ml",
        price: "85 TL",
      },
      {
        name: "Soda",
        description: "200 ml",
        price: "50 TL",
      },
      {
        name: "Şalgam",
        description: "Acılı / Acısız - 300 ml",
        price: "70 TL",
      },
      {
        name: "Su",
        description: "500 ml",
        price: "30 TL",
      },
      {
        name: "Ayran Kutu",
        description: "285 ml",
        price: "60 TL",
      },
      {
        name: "Şişe Ayran",
        description: "245 ml",
        price: "70 TL",
      },
      {
        name: "Açık Ayran",
        description: "Taze servis",
        price: "60 TL",
      },
    ],
  },

  {
    category: "KAVURMA BURGER MENÜ",
    items: [
      {
        name: "110 GR",
        description: "Karamelize Soğan Salatalık Turşusu Çedar Peyniri Ve Patates ile Servis Edilir",
        price: "510 TL",
      },
    ],
  },

  {
    category: "MENÜ KAMPANYALARI",
    items: [
      {
        name: "Ekmek Arası Kavurma Menü",
        description:
          "Ekmek Arası Kavurma + Turşu + İstediğin Soğuk İçecek + İstediğin Tatlı",
        price: "499 TL",
      },
      {
        name: "Kavurma Burger Tam Menü",
        description:
          "Kavurma Burger + Patates + Turşu + İstediğin Soğuk İçecek + İstediğin Tatlı",
        price: "499 TL",
      },
    ],
  },

  {
    category: "TATLILAR",
    items: [
      {
        name: "Hayrabolu Tatlısı",
        description: "Bol Tahin Ve Yer Fıstığı İle Birlikte Servis Edilir",
        price: "140 TL",
      },
      {
        name: "Kavurma Sonrası Tatlısı",
        description:
          "Mevsim Yeşillikleri Ve Yer fıstığı İle Hazırlanan Eşsiz Lezzet",
        price: "190 TL",
      },
      {
        name: "Profesyonel Sütlaç",
        description: "Geleneksel Fırınlanmış Sütlaç",
        price: "190 TL",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    // ANA SAYFA ARKA PLAN RENGİ
    <main className="min-h-screen bg-[#054a29] px-5 py-8 text-[#F5F0E6]">
      <div className="mx-auto w-full max-w-md">

        {/* ÜST BÖLÜM */}
        <header className="pb-9 pt-3 text-center">

          <img
            src="/kavurmaciii-logo.png"
            alt="Kavurmaciii"
            className="mx-auto h-32 w-32 object-contain"
          />

          <div className="mt-5 flex items-center justify-center gap-3">

            {/* BAŞLIK YANLARINDAKİ ÇİZGİ RENGİ */}
            <div className="h-px w-10 bg-[#356049]" />

            {/* MENÜ BAŞLIK YAZI RENGİ */}
            <h1 className="text-3xl font-bold tracking-tight text-[#F5F0E6]">
              Menü
            </h1>

            {/* BAŞLIK YANLARINDAKİ ÇİZGİ RENGİ */}
            <div className="h-px w-10 bg-[#356049]" />

          </div>

          {/* ÜST AÇIKLAMA YAZI RENGİ */}
          <p className="mt-3 text-sm text-[#B8C5BA]">
            Lezzetlerimizi keşfedin
          </p>

        </header>

        {/* MENÜ */}
        <div className="space-y-11">

          {menu.map((section) => (
            <section key={section.category}>

              {/* KATEGORİ BAŞLIĞI */}
              <div className="mb-5 flex items-center gap-3">

                {/* KATEGORİ YAN ÇİZGİ RENGİ */}
                <div className="h-px flex-1 bg-[#356049]" />

                {/* KATEGORİ BAŞLIK YAZI RENGİ */}
                <h2 className="text-xs font-bold tracking-[0.22em] text-[#C5A35A]">
                  {section.category}
                </h2>

                {/* KATEGORİ YAN ÇİZGİ RENGİ */}
                <div className="h-px flex-1 bg-[#356049]" />

              </div>

              {/* ÜRÜNLER */}
              <div className="space-y-3">

                {section.items.map((item) => (
                  <div
                    key={item.name}

                    // ÜRÜN KUTUSU ARKA PLAN + KENARLIK + HOVER RENGİ
                    className="rounded-2xl border border-[#3C6B52] bg-[#123A28] px-5 py-4 transition hover:border-[#C5A35A] hover:bg-[#1C5639]"
                  >
                    <div className="flex items-start justify-between gap-5">

                      {/* ÜRÜN */}
                      <div className="min-w-0">

                        {/* ÜRÜN ADI YAZI RENGİ */}
                        <h3 className="text-[17px] font-semibold text-[#F5F0E6]">
                          {item.name}
                        </h3>

                        {/* ÜRÜN AÇIKLAMA YAZI RENGİ */}
                        <p className="mt-1.5 text-sm leading-5 text-[#B8C5BA]">
                          {item.description}
                        </p>

                      </div>

                      {/* FİYAT */}
                      <div className="shrink-0 pt-0.5">

                        {/* FİYAT YAZI RENGİ */}
                        <span className="text-[16px] font-bold text-[#C5A35A]">
                          {item.price}
                        </span>

                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </section>
          ))}

        </div>

        {/* ANA SAYFAYA DÖN */}
        <div className="mt-12">

          <a
            href="/n/Kavurmaciii"

            // GERİ DÖN BUTONU ARKA PLAN + KENARLIK + YAZI + HOVER
            className="flex min-h-[58px] items-center justify-center rounded-2xl border border-[#3C6B52] bg-[#123A28] text-sm font-semibold text-[#C5A35A] transition hover:border-[#C5A35A] hover:bg-[#1C5639]"
          >
            ← Ana Sayfaya Dön
          </a>

        </div>

        {/* FOOTER */}
        <footer className="pb-6 pt-9 text-center">

          {/* FOOTER ÇİZGİ RENGİ */}
          <div className="mx-auto mb-4 h-px w-16 bg-[#356049]" />

          {/* FOOTER ANA YAZI RENGİ */}
          <p className="text-xs tracking-[0.18em] text-[#789487]">
            KAVURMACIII
          </p>

          {/* FOOTER ALT YAZI RENGİ */}
          <p className="mt-2 text-[11px] text-[#62806A]">
            NFC ile hızlı erişim
          </p>

          {/* KDV BİLGİSİ */}
          <p className="mt-3 text-[10px] text-[#62806A]">
            Fiyatlarımız KDV dahildir.
          </p>

        </footer>

      </div>
    </main>
  );
}