// src/pages/ContactUs.js
import React from "react";
import logo from "../img/Logo-img.png";
import iconMobile from "../img/landingpage-contactus-icon-mobile.png";
import iconEmail from "../img/landingpage-contactus-icon-forwardemail.png";
import iconTwitter from "../img/landingpage-contactus-icon-twitter.png";
import iconInstagram from "../img/landingpage-contactus-icon-instagram.png";
import iconDiscord from "../img/landingpage-contactus-icon-discord.png";

function ContactUs() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-6 m-10 bg-white">
        <div className="p-5 col-start-1 col-end-7 rounded mt-20">
          <div className="grid grid-cols-12">
            <div className="p-5 col-span-5 rounded max-w-md mx-auto">
              <div className="grid grid-cols-1">
                <img src={logo} alt="" />
                <div className="p-5 rounded">
                  <p className="text-dark-1 text-justify">
                    MindEase menyediakan layanan kesehatan mental yang progresif
                    dan terjangkau, dapat diakses melalui ponsel dan online
                    untuk semua orang
                  </p>
                  <p className="text-dark-3 mt-5">
                    ©MindEase 2024. All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 col-span-3 bg-white">
              <div className="grid gap-4 grid-cols-1">
                <div className="p-5">
                  <h1 className="font-bold text-primary font-sans text-2xl">
                    Company
                  </h1>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div>
                      <p className="text-dark-1">About</p>
                    </div>
                    <div>
                      <p className="text-dark-1">Service</p>
                    </div>
                    <div>
                      <p className="text-dark-1">Community</p>
                    </div>
                    <div>
                      <p className="text-dark-1">Apps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 col-span-3">
              <div className="grid gap-4 grid-cols-1">
                <div className="p-5">
                  <h1 className="font-bold text-primary font-sans text-2xl">
                    Contact Us
                  </h1>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-start content-start">
                      <img src={iconMobile} alt="" />
                      <p className="text-dark-1">+1234 - 5679</p>
                    </div>
                    <div className="flex items-start content-start">
                      <img src={iconEmail} alt="" />
                      <p className="text-dark-1">mindease@gmail.com</p>
                    </div>
                    <div className="flex space-x-4 pt-6">
                      <div className="rounded-full bg-primary p-2">
                        <img src={iconTwitter} alt="" className="" />
                      </div>
                      <div className="rounded-full bg-white p-2">
                        <img src={iconInstagram} alt="" className="" />
                      </div>
                      <div className="rounded-full bg-primary p-2">
                        <img src={iconDiscord} alt="" className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
