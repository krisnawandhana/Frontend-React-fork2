// src/pages/OurServices.js
import React from "react";
import image from "../assets/img/landingpage-ourservices-img.png";

function OurServices() {
  return (
    <div id="ourservices" className="grid grid-cols-6 gap-4 m-10 pt-5">
      <div className="col-start-2 col-span-4 rounded">
        <div className="rounded text-center">
          <h1 className="font-bold text-dark-1 font-sans text-4xl">
            Jelajahi Berbagai Layanan Kami
          </h1>
        </div>
        <div className="mt-5 rounded text-center max-w-4xl mx-auto">
          <p className="text-dark-3">
            Kamu dapat menemukan berbagai layanan kesehatan mental yang kami
            sediakan! seperti Konsultasi, Meditasi, Mood Tracker, dan Forum &
            Komunitas
          </p>
        </div>
      </div>
      <div className="col-start-1 col-end-7  rounded">
        <div className="grid grid-cols-12 gap-4">
          <div className="p-5 col-span-4  rounded">
            <div className="grid gap-4 grid-cols-1">
              <div className=" p-5  rounded">
                <div className="flex content-end justify-end">
                  <div className="px-5 py-6 bg-ourservices-bg1 rounded-2xl text-right ">
                    <h1 className="text-ourservices-font1 text-4xl font-base">
                      1
                    </h1>
                  </div>
                </div>
                <div className="mt-5 rounded text-right">
                  <h1 className="font-bold text-dark-1 font-sans text-3xl">
                    Konsultasi
                  </h1>
                </div>
                <div className="mt-5 rounded text-right">
                  <p className="text-dark-3">
                    Konsultasi pribadi dengan psikiater berpengalaman untuk
                    membantu anda mengatasi stres, kecemasan, dan masalah
                    lainnya.
                  </p>
                </div>
              </div>
              <div className="p-5   rounded">
                <div className="flex content-end justify-end">
                  <div className="px-5 py-6 bg-ourservices-bg3 rounded-2xl text-right ">
                    <h1 className="text-ourservices-font3 text-4xl font-base">
                      3
                    </h1>
                  </div>
                </div>
                <div className="mt-5 rounded text-right">
                  <h1 className="font-bold text-dark-1 font-sans text-3xl">
                    Mood Tracker
                  </h1>
                </div>
                <div className="mt-5 rounded text-right">
                  <p className="text-dark-3">
                    Fitur untuk memantau suasana hati harian Anda, membantu
                    mengenali pola dan faktor pemicu emosi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5  col-span-4  rounded flex items-center justify-center h-full">
            <img src={image} alt="" className="max-h-full max-w-full" />
          </div>
          <div className="p-5  col-span-4  rounded">
            <div className="grid gap-4 grid-cols-1">
              <div className="p-5   rounded">
                <div className="flex content-star justify-start">
                  <div className="px-5 py-6 bg-ourservices-bg2 rounded-2xl text-left ">
                    <h1 className="text-ourservices-font2 text-4xl font-base">
                      2
                    </h1>
                  </div>
                </div>
                <div className="mt-5 rounded text-left">
                  <h1 className="font-bold text-dark-1 font-sans text-3xl">
                    Meditasi
                  </h1>
                </div>
                <div className="mt-5 rounded text-left">
                  <p className="text-dark-3">
                    Sesi meditasi untuk membantu Anda menemukan ketenangan,
                    mengelola stres, dan meningkatkan fokus.
                  </p>
                </div>
              </div>
              <div className="p-5   rounded">
                <div className="flex content-star justify-start">
                  <div className="px-5 py-6 bg-ourservices-bg4 rounded-2xl text-left ">
                    <h1 className="text-ourservices-font4 text-4xl font-base">
                      4
                    </h1>
                  </div>
                </div>
                <div className="mt-5 rounded text-left">
                  <h1 className="font-bold text-dark-1 font-sans text-3xl">
                    Forum
                  </h1>
                </div>
                <div className="mt-5 rounded text-left">
                  <p className="text-dark-3">
                    Tempat untuk berbagi pengalaman, mendapatkan dukungan, dan
                    belajar dari orang lain
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

export default OurServices;
