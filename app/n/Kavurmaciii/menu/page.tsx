const menu = [
  {
    category: "KAVURMALAR",
    items: [
      {
        name: "Dana Kavurma",
        description: "Özel baharatlarla hazırlanan dana kavurma",
        price: "450₺",
      },
      {
        name: "Kuzu Kavurma",
        description: "Yumuşak ve lezzetli kuzu eti",
        price: "480₺",
      },
      {
        name: "Karışık Kavurma",
        description: "Dana ve kuzu etinin özel karışımı",
        price: "500₺",
      },
    ],
  },
  {
    category: "PİLAV & YAN ÜRÜNLER",
    items: [
      {
        name: "Pirinç Pilavı",
        description: "Tereyağlı pirinç pilavı",
        price: "100₺",
      },
      {
        name: "Bulgur Pilavı",
        description: "Geleneksel usul bulgur pilavı",
        price: "90₺",
      },
      {
        name: "Patates Kızartması",
        description: "Çıtır patates kızartması",
        price: "120₺",
      },
    ],
  },
  {
    category: "İÇECEKLER",
    items: [
      {
        name: "Ayran",
        description: "Geleneksel ev yapımı ayran",
        price: "50₺",
      },
      {
        name: "Kola",
        description: "Soğuk servis edilir",
        price: "70₺",
      },
      {
        name: "Su",
        description: "500 ml",
        price: "30₺",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#171512] px-5 py-8 text-[#f5f1e8]">
      <div className="mx-auto w-full max-w-md">

        {/* ÜST BÖLÜM */}
        <header className="pb-9 pt-3 text-center">

          <img
            src="/kavurmaciii-logo.png"
            alt="Kavurmaciii"
            className="mx-auto h-32 w-32 object-contain"
          />

          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#6b5334]" />

            <h1 className="text-3xl font-bold tracking-tight">
              Menü
            </h1>

            <div className="h-px w-10 bg-[#6b5334]" />
          </div>

          <p className="mt-3 text-sm text-[#918a7e]">
            Lezzetlerimizi keşfedin
          </p>

        </header>

        {/* MENÜ */}
        <div className="space-y-11">

          {menu.map((section) => (
            <section key={section.category}>

              {/* KATEGORİ BAŞLIĞI */}
              <div className="mb-5 flex items-center gap-3">

                <div className="h-px flex-1 bg-[#3d372f]" />

                <h2 className="text-xs font-bold tracking-[0.22em] text-[#c19d69]">
                  {section.category}
                </h2>

                <div className="h-px flex-1 bg-[#3d372f]" />

              </div>

              {/* ÜRÜNLER */}
              <div className="space-y-3">

                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-[#39332b] bg-[#211e19] px-5 py-4 transition hover:border-[#665137]"
                  >
                    <div className="flex items-start justify-between gap-5">

                      {/* ÜRÜN */}
                      <div className="min-w-0">

                        <h3 className="text-[17px] font-semibold text-[#f4efe6]">
                          {item.name}
                        </h3>

                        <p className="mt-1.5 text-sm leading-5 text-[#8f887d]">
                          {item.description}
                        </p>

                      </div>

                      {/* FİYAT */}
                      <div className="shrink-0 pt-0.5">
                        <span className="text-[16px] font-bold text-[#d1ad76]">
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
            className="flex min-h-[58px] items-center justify-center rounded-2xl border border-[#4a4033] bg-[#211e19] text-sm font-semibold text-[#c19d69] transition hover:border-[#765c3a] hover:bg-[#28231d]"
          >
            ← Ana Sayfaya Dön
          </a>

        </div>

        {/* FOOTER */}
        <footer className="pb-6 pt-9 text-center">

          <div className="mx-auto mb-4 h-px w-16 bg-[#3d372f]" />

          <p className="text-xs tracking-[0.18em] text-[#625b51]">
            KAVURMACIII
          </p>

          <p className="mt-2 text-[11px] text-[#4f4a43]">
            NFC ile hızlı erişim
          </p>

        </footer>

      </div>
    </main>
  );
}