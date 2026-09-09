"use client";

import { useState } from "react";

export default function BusinessPage() {
  const [copiedIBAN, setCopiedIBAN] = useState(false);
  const [copiedName, setCopiedName] = useState(false);

  const iban = "TR000000000000000000000000";
  const accountName = "Haktan Eren Şengül";

  async function copyIBAN() {
    await navigator.clipboard.writeText(iban);
    setCopiedIBAN(true);

    setTimeout(() => {
      setCopiedIBAN(false);
    }, 2000);
  }

  async function copyName() {
    await navigator.clipboard.writeText(accountName);
    setCopiedName(true);

    setTimeout(() => {
      setCopiedName(false);
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-[#f6f6f4] px-5 py-10 text-[#1f1f1f]">
      <div className="mx-auto w-full max-w-md">

        {/* BAŞLIK */}
        <section className="pt-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl shadow-sm">
            🖼️
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Galeri Tufan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Güvenli ve kolay ödeme
          </p>
        </section>

        {/* SAHİBİNDEN */}
        <section className="mt-8">
          <a
            href="https://ozerlermotors.sahibinden.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[72px] items-center justify-between rounded-2xl bg-white px-5 shadow-sm transition hover:scale-[1.01] hover:shadow-md"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f1ef] text-2xl">
                🏷️
              </div>

              <div className="text-left">
                <p className="text-lg font-bold">
                  Sahibinden İlanlarımız
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Güncel araçlarımızı görüntüleyin
                </p>
              </div>

            </div>

            <span className="text-xl text-gray-400">
              →
            </span>
          </a>
        </section>

        {/* IBAN */}
        <section className="mt-5">
          <div className="rounded-2xl bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">
                IBAN
              </p>

              <span className="text-xl">
                ₺
              </span>
            </div>

            <div className="mt-4 rounded-xl bg-[#f6f6f4] px-4 py-4">
              <p className="break-all text-[15px] font-semibold tracking-wide">
                {iban}
              </p>
            </div>

            <button
              onClick={copyIBAN}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1f1f1f] px-5 py-4 text-base font-semibold text-white transition hover:bg-black"
            >
              {copiedIBAN
                ? "✓ IBAN Kopyalandı"
                : "⧉ IBAN'ı Kopyala"}
            </button>

          </div>
        </section>

        {/* HESAP SAHİBİ */}
        <section className="mt-5 rounded-2xl bg-white p-5 shadow-sm">

          <p className="text-xs font-semibold tracking-[0.18em] text-gray-400">
            HESAP SAHİBİ
          </p>

          <div className="mt-3 flex items-center justify-between gap-4">

            <p className="text-lg font-semibold">
              {accountName}
            </p>

            <button
              onClick={copyName}
              className="shrink-0 rounded-xl bg-[#f6f6f4] px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
            >
              {copiedName
                ? "✓ Kopyalandı"
                : "⧉ Kopyala"}
            </button>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="pb-6 pt-10 text-center">
          <p className="text-xs text-gray-400">
            Galeri Tufan
          </p>
        </footer>

      </div>
    </main>
  );
}