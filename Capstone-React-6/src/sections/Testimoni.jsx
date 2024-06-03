// src/pages/Testimoni.js
import React from "react";
import vector from "../img/landingpage-testimoni-vector.png";
import stars from "../img/landingpage-testimoni-stars.png";

function Testimoni() {
  return (
    <div className="grid grid-cols-6 gap-4 m-10">
      <div className="p-5 col-start-1 col-end-7  rounded">
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="p-5 row-span-2 col-span-2  rounded flex items-center justify-center">
            <div className="p-5  rounded max-w-xl mx-auto text-left">
              <h1 className="font-bold text-dark-1 font-sans text-4xl mb-4">
                Apa Kata Pengguna Kami?
              </h1>
              <p className="text-dark-3 text-justify">
                Bagaimana MindEase telah mengubah hidup banyak orang menjadi
                lebih baik. Banyak pengguna yang telah menemukan ketenangan,
                keseimbangan, dan kebahagiaan melalui layanan kesehatan mental
                kami.
              </p>
            </div>
          </div>
          <div className="p-5 row-span-3 col-span-3 bg-white rounded">
            <div className="grid gap-0 grid-rows-3">
              <div className="relative px-5 bg-white rounded-2xl max-w-md mx-auto shadow-2xl z-10">
                <div className="absolute top-0 left-0">
                  <div className="p-5 bg-primary rounded-tl-2xl rounded-br-3xl">
                    <img src={vector} alt="Quote Icon" />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-14 mb-4">
                  <img src={stars} alt="Stars Icon" />
                </div>
                <p className="text-dark-1 text-justify">
                  Saya tidak pernah membayangkan betapa pentingnya menjaga
                  kesehatan mental hingga saya mencoba aplikasi ini. Setiap sesi
                  dengan terapis profesionalnya membuat saya merasa lebih tenang
                  dan termotivasi. Ini benar-benar mengubah hidup saya.
                </p>
              </div>
              <div className="relative px-5 bg-white rounded-2xl max-w-md mx-auto shadow-2xl z-20 -mt-7">
                <div className="absolute top-0 left-0">
                  <div className="p-5 bg-primary rounded-tl-2xl rounded-br-3xl">
                    <img src={vector} alt="Quote Icon" />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-14 mb-4">
                  <img src={stars} alt="Stars Icon" />
                </div>
                <p className="text-dark-1 text-justify">
                  Kesibukan kerja sering membuat saya stres. Aplikasi ini
                  memungkinkan saya mendapatkan bantuan kapan saja, di mana
                  saja. Konselor yang ramah dan berpengalaman selalu siap
                  membantu. Terima kasih atas layanan yang luar biasa ini!
                </p>
              </div>
              <div className="relative px-5 bg-white rounded-2xl max-w-md mx-auto shadow-2xl z-30 -mt-7">
                <div className="absolute top-0 left-0">
                  <div className="p-5 bg-primary rounded-tl-2xl rounded-br-3xl">
                    <img src={vector} alt="Quote Icon" />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-14 mb-4">
                  <img src={stars} alt="Stars Icon" />
                </div>
                <p className="text-dark-1 text-justify">
                  Awalnya, saya ragu dengan layanan online untuk kesehatan
                  mental. Namun, sejak menggunakan aplikasi ini, saya merasa
                  didengar dan dihargai. Fitur-fitur interaktifnya membuat saya
                  bisa memantau perkembangan diri dan merasa lebih terarah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
