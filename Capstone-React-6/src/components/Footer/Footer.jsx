import React from 'react'

export default function Footer() {
  
  return (
    <>
      <footer className="bg-primary-darker px-20 py-16">
        <div className="text-white flex flex-col">
          <div className="mb-14">
            <h1 className="text-3xl">Siap Melangkah Menuju Kebahagiaan Dirimu?</h1>
          </div>

          <div className="flex items-start w-full gap-40 pr-10">
            <div className="w-1/4 pr-10 mr-10">
              <p className="text-sm text-justify font-light justify-normal mb-20">MindEase menyediakan layanan kesehatan mental yang progresif dan terjangkau, dapat diakses melalui ponsel dan online untuk semua orang</p>
              <p className="text-sm font-light justify-normal">&copy; MindEase 2024. All rights reserved</p>
            </div>

            <div className="w-1/5">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li className="pb-2"><a href="#" className="text-sm font-light">About</a></li>
                <li className="pb-2"><a href="#" className="text-sm font-light">Service</a></li>
                <li className="pb-2"><a href="#" className="text-sm font-light">Community</a></li>
                <li><a href="#" className="text-sm font-light">Apps</a></li>
              </ul>
            </div>
            
            <div className="w-1/3">
              <h3 className="text-lg font-semibold mb-5">Contact us</h3>
              <p className="text-sm mb-3 flex items-center font-light">
                <img src="../../../public/Footer/mobile.svg" alt="Phone" className="mr-2 w-5 h-5" /> +1234 - 5679
              </p>
              <p className="text-sm mb-7 flex items-center font-light">
                <img src="../../../public/Footer/forwardEmail.svg" alt="Email" className="mr-2 w-5 h-5" /> mindease@gmail.com
              </p>
              <div>
                <a href="#"><img src="../../../public/Footer/socialMedia.svg" alt="SosialMedia" className="" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
