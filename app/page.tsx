export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 text-center">

        {/* Yıldızlar */}
        <div className="text-3xl mb-4">
          ⭐⭐⭐⭐⭐
        </div>

        {/* Başlık */}
        <h1 className="text-3xl font-bold text-gray-900">
          Bizi Değerlendirin
        </h1>

        {/* Açıklama */}
        <p className="mt-4 text-gray-600">
          Deneyiminizi Google'da paylaşmanız bizi çok mutlu eder.
        </p>

        {/* Google butonu */}
        <a
          href="https://search.google.com/local/writereview?placeid=ChIJMUh7PGW3yhQRRCroH17lxU8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-bold text-white hover:bg-blue-700 transition"
        >
          Google'da Yorum Yap
        </a>

        {/* NFC açıklaması */}
        <p className="mt-6 text-sm text-gray-500">
          📱 Telefonunuzu karta yaklaştırın
        </p>

      </div>
    </main>
  );
}