// src/pages/Testimoni.js
import React from "react";
import vector from "../assets/img/landingpage-testimoni-vector.png";
import stars from "../assets/img/landingpage-testimoni-stars.png";

function Testimoni() {
  return (
    <div className="mb-32">
      <div className="p-5">
        <div className="p-14">
          <h1 className="font-bold text-dark-1 font-sans text-4xl text-center mb-4">
            Apa Kata Pengguna Kami?
          </h1>
          <p className="text-dark-3 text-center">
            Bagaimana MindEase telah mengubah hidup banyak orang menjadi lebih
            baik. Banyak pengguna yang telah menemukan ketenangan, keseimbangan,
            dan kebahagiaan melalui layanan kesehatan mental kami.
          </p>
        </div>
      </div>
      <div className="columns-3 md:mx-20">
        <div className="relative p-5 bg-white rounded-2xl shadow-2xl">
          <div className="absolute top-0 left-0">
            <div className="p-5 bg-primary rounded-tl-2xl rounded-br-3xl">
              <img src={vector} alt="Quote Icon" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-14 mb-4">
            <img src={stars} alt="Stars Icon" />
          </div>
          <p className="text-dark-1 text-justify">
            Saya tidak pernah membayangkan betapa pentingnya menjaga kesehatan
            mental hingga saya mencoba aplikasi ini. Setiap sesi dengan terapis
            profesionalnya membuat saya merasa lebih tenang dan termotivasi. Ini
            benar-benar mengubah hidup saya.
          </p>
        </div>
        <div className="relative p-5 bg-white rounded-2xl shadow-2xl">
          <div className="absolute top-0 left-0">
            <div className="p-5 bg-primary rounded-tl-2xl rounded-br-3xl">
              <img src={vector} alt="Quote Icon" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-14 mb-4">
            <img src={stars} alt="Stars Icon" />
          </div>
          <p className="text-dark-1 text-justify">
            Kesibukan kerja sering membuat saya stres. Aplikasi ini memungkinkan
            saya mendapatkan bantuan kapan saja, di mana saja. Konselor yang
            ramah dan berpengalaman selalu siap membantu. Terima kasih atas
            layanan yang luar biasa ini! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="relative p-5 bg-white rounded-2xl shadow-2xl">
          <div className="absolute top-0 left-0">
            <div className="p-5 bg-primary rounded-tl-2xl rounded-br-3xl">
              <img src={vector} alt="Quote Icon" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-14 mb-4">
            <img src={stars} alt="Stars Icon" />
          </div>
          <p className="text-dark-1 text-justify">
            Awalnya, saya ragu dengan layanan online untuk kesehatan mental.
            Namun, sejak menggunakan aplikasi ini, saya merasa didengar dan
            dihargai. Fitur-fitur interaktifnya membuat saya bisa memantau
            perkembangan diri dan merasa lebih terarah
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
