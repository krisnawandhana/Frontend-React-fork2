// src/pages/WhyChooseUs.js
import React from "react";
import image from "../assets/img/landingpage-whychooseus-img.png";
import icon_1 from "../assets/img/landingpage-whychooseus-icon-stethoscope.png";
import icon_2 from "../assets/img/landingpage-whychooseus-icon-warning.png";
import icon_3 from "../assets/img/landingpage-whychooseus-icon-cloud.png";
import icon_4 from "../assets/img/landingpage-whychooseus-icon-usercircle.png";

function WhyChooseUs() {
  return (
    <div className="w-full grid bg-primary-lighter">
      <div className=" col-start-2 col-span-4 rounded pt-16">
        <h1 className="font-bold text-dark-1 font-sans text-4xl text-center">
          Kenapa Memilih Kami?
        </h1>
        <div className=" rounded text-center max-w-3xl mx-auto mt-5">
          <p className="text-dark-3">
            Jangan tunggu lagi! Unduh aplikasi MindEase sekarang dan temukan
            solusi kesehatan mental yang telah membantu ribuan orang merasa
            lebih baik dan lebih bahagia.
          </p>
        </div>
      </div>
      <div className="mt-5 col-start-1 col-end-7  rounded pb-16">
        <div className="grid grid-rows-2 grid-flow-col ml-16">
          <div className="flex items-center content-center row-span-3 col-span-3  rounded">
            <img src={image} alt="" />
          </div>
          <div className="flex items-center content-center row-span-3 col-span-3 mt-10">
            <div className="grid gap-4 grid-cols-2">
              <div className="max-w-sm mx-auto mr-10">
                <div className="flex content-start justify-start">
                  <div className="px-5 py-6 bg-ourservices-bg2 rounded-lg text-left ">
                    <img src={icon_1} alt="" />
                  </div>
                </div>
                <div className="rounded mt-5">
                  <h1 className="font-bold text-dark-1 font-sans text-base ">
                    Dukungan Profesional yang Terpercaya
                  </h1>
                </div>
                <div className="rounded mt-5 max-w-xs mx-auto">
                  <p className="text-dark-3">
                    Di MindEase, anda akan mendapatkan bantuan dari ahli yang
                    memahami kebutuhan kesehatan mental Anda dengan mendalam.
                  </p>
                </div>
              </div>
              <div className="max-w-sm mx-auto mr-10">
                <div className="flex content-start justify-start">
                  <div className="px-5 py-6 bg-ourservices-bg3 rounded-lg text-left ">
                    <img src={icon_2} alt="" />
                  </div>
                </div>
                <div className="mt-5 rounded ">
                  <h1 className="font-bold text-dark-1 font-sans text-base">
                    Privasi dan Keamanan Terjamin
                  </h1>
                </div>
                <div className="mt-5 rounded max-w-xs mx-auto">
                  <p className="text-dark-3">
                    Di MindEase, anda akan mendapatkan bantuan dari ahli yang
                    memahami kebutuhan kesehatan mental Anda dengan mendalam.
                  </p>
                </div>
              </div>
              <div className="mt-5 max-w-sm mx-auto mr-10">
                <div className="flex content-start justify-start">
                  <div className="px-5 py-6 bg-ourservices-bg4 rounded-lg text-left ">
                    <img src={icon_3} alt="" />
                  </div>
                </div>
                <div className="mt-5 rounded">
                  <h1 className="font-bold text-dark-1 font-sans text-base">
                    Akses Mudah dan Fleksibel
                  </h1>
                </div>
                <div className="mt-5 rounded max-w-xs mx-auto">
                  <p className="text-dark-3">
                    Kami mengerti bahwa setiap individu memiliki jadwal yang
                    berbeda. Anda bisa mengakses layanan kesehatan mental kapan
                    saja dan di mana saja.
                  </p>
                </div>
              </div>
              <div className="mt-5 max-w-sm mx-auto mr-10">
                <div className="flex content-start justify-start">
                  <div className="px-5 py-6 bg-ourservices-bg1 rounded-lg text-left ">
                    <img src={icon_4} alt="" />
                  </div>
                </div>
                <div className="mt-5 rounded">
                  <h1 className="font-bold text-dark-1 font-sans text-base">
                    Komunitas Pendukung yang Solid
                  </h1>
                </div>
                <div className="mt-5 rounded max-w-xs mx-auto">
                  <p className="text-dark-3">
                    Di MindEase, Anda tidak hanya mendapatkan bantuan dari
                    profesional, tetapi juga bisa bergabung dengan komunitas
                    yang mendukung satu sama lain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
