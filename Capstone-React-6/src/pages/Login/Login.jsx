import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from '../../utils/auth';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { success, token, message } = await login(username, password);

      if (success) {
        setIsLoggedIn(true); // Update login status
        window.location.reload();
      } else {
        setError(message || 'Login failed');
      }
    } catch (error) {
      setError(error.message || 'Login failed');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen">
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-heading1 font-normal mb-6 text-dark-1 text-center">Selamat Datang di MindEase</h1>
          <h1 className="text-normal font-lighter mb-6 text-dark-1 text-center">Dukungan Profesional untuk Kesehatan Mental Anda</h1>

          {/* form login */}
          <form action="#" method="POST" className="space-y-4" onSubmit={handleLogin}>

            {/* username */}
            <div>
              <label htmlFor="username" className="block text-sm font-light text-dark-1">Username</label>
              <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} className="bg-white mt-1 p-2 w-full border rounded-md focus:border-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"/>
            </div>

            <div>
              {/* password */}
              <label htmlFor="password" className="block text-sm font-light text-dark-1">
                Password
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" name="password" onChange={(e) => setPassword(e.target.value)} className="bg-white mt-1 p-2 w-full border rounded-md focus:border-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
                />
                <svg
                  className="h-6 text-gray-700 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25826 7.99993C6.25826 7.03402 7.03402 6.25826 7.99993 6.25826C8.96583 6.25826 9.74159 7.03402 9.74159 7.99993C9.74159 8.96583 8.96583 9.74159 7.99993 9.74159C7.03402 9.74159 6.25826 8.96583 6.25826 7.99993ZM6.71659 7.99993C6.71659 8.70902 7.29083 9.28326 7.99993 9.28326C8.70902 9.28326 9.28326 8.70902 9.28326 7.99993C9.28326 7.29083 8.70902 6.71659 7.99993 6.71659C7.29083 6.71659 6.71659 7.29083 6.71659 7.99993Z"
                    fill="#8F90A6"
                    stroke="#8F90A6"
                    strokeWidth="0.666667"
                  />
                  <path
                    d="M14.6504 8.43783L14.6631 8.41921L14.6731 8.39905C14.7951 8.1552 14.7951 7.84475 14.6731 7.6009L14.6631 7.58074L14.6504 7.56212C13.7218 6.20114 12.7766 5.21562 11.6953 4.57283C10.6095 3.92731 9.41068 3.64164 8 3.64164C6.58932 3.64164 5.39046 3.92731 4.30466 4.57283C3.22345 5.21562 2.27816 6.20114 1.34965 7.56212L1.34963 7.56211L1.34765 7.56508C1.17301 7.82704 1.17301 8.17291 1.34765 8.43488L1.34763 8.43489L1.34965 8.43783C2.27816 9.79881 3.22345 10.7843 4.30466 11.4271C5.39046 12.0726 6.58932 12.3583 8 12.3583C9.41068 12.3583 10.6095 12.0726 11.6953 11.4271C12.7766 10.7843 13.7218 9.79881 14.6504 8.43783ZM8 3.18331C9.88299 3.18331 11.2854 3.70058 12.3883 4.46461C13.4973 5.23281 14.3195 6.26146 15.0228 7.31006C15.2955 7.71934 15.3009 8.24948 15.0213 8.69207C14.318 9.728 13.4961 10.7556 12.3878 11.5263C11.2844 12.2936 9.88211 12.8166 8 12.8166C6.11789 12.8166 4.71558 12.2936 3.61219 11.5263C2.50285 10.7549 1.68039 9.72597 0.976641 8.68901C0.702075 8.27621 0.702231 7.72288 0.977108 7.31024C1.68036 6.26158 2.50268 5.23285 3.61169 4.46461C4.71463 3.70058 6.11701 3.18331 8 3.18331Z"
                    fill="#8F90A6"
                    stroke="#8F90A6"
                    strokeWidth="0.666667"
                  />
                </svg>
              </div>
              {/* forget password input */}
              <div className="my-2 text-sm text-gray-600 text-right">
                <p>Lupa password? <a href="#" className="text-primary hover:text-primary-darker">Klik disini</a></p>
              </div>
            </div>
            
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            
            <div>
              <button type="submit" className="btn btn-outline w-full bg-white text-primary p-2 rounded-md hover:bg-primary hover:text-white focus:outline-none focus:bg-primary-darker focus:text-white focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300">Login</button>
            </div>
          </form>


          {/* form login dengan google atau fb */}
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Or</p>
          </div>
          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
              <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1896_3002)">
                <path d="M7.46721 0.658267C5.4689 1.3515 3.74556 2.66728 2.55032 4.41233C1.35508 6.15739 0.750946 8.23974 0.826651 10.3535C0.902355 12.4673 1.65391 14.5011 2.97092 16.1562C4.28794 17.8113 6.10099 19.0004 8.14377 19.5489C9.7999 19.9762 11.535 19.995 13.2 19.6036C14.7083 19.2648 16.1028 18.5401 17.2469 17.5005C18.4376 16.3854 19.302 14.9668 19.7469 13.3973C20.2305 11.6906 20.3166 9.89566 19.9985 8.15045H10.6985V12.0083H16.0844C15.9768 12.6236 15.7461 13.2108 15.4062 13.7349C15.0663 14.2589 14.6242 14.7091 14.1063 15.0583C13.4486 15.4933 12.7072 15.786 11.9297 15.9176C11.1499 16.0626 10.3501 16.0626 9.57033 15.9176C8.78 15.7542 8.03236 15.428 7.37502 14.9598C6.319 14.2123 5.52608 13.1503 5.1094 11.9255C4.68567 10.6776 4.68567 9.32484 5.1094 8.07702C5.406 7.20235 5.89632 6.40598 6.54377 5.74733C7.2847 4.97975 8.22273 4.43107 9.25495 4.16151C10.2872 3.89195 11.3737 3.91191 12.3953 4.2192C13.1934 4.46419 13.9232 4.89223 14.5266 5.4692C15.1339 4.86504 15.7401 4.25931 16.3453 3.65202C16.6578 3.32545 16.9985 3.01452 17.3063 2.68014C16.3853 1.82307 15.3042 1.15617 14.125 0.717642C11.9777 -0.0620611 9.62811 -0.0830149 7.46721 0.658267Z" fill="#E53535"/>
                <path d="M7.46709 0.657074C9.62781 -0.0847125 11.9774 -0.0643102 14.1249 0.714886C15.3043 1.15639 16.3849 1.82651 17.3046 2.68676C16.9921 3.02114 16.6624 3.33364 16.3437 3.65864C15.7374 4.26384 15.1317 4.86697 14.5265 5.46801C13.9231 4.89104 13.1933 4.463 12.3952 4.21801C11.3739 3.90964 10.2874 3.88852 9.25493 4.15698C8.22243 4.42544 7.28383 4.97311 6.54209 5.73989C5.89464 6.39854 5.40432 7.19491 5.10771 8.06957L1.86865 5.56176C3.02804 3.26264 5.03545 1.50399 7.46709 0.657074Z" fill="#E53535"/>
                <path d="M1.00942 8.04688C1.18352 7.18405 1.47255 6.34848 1.86879 5.5625L5.10786 8.07656C4.68413 9.32438 4.68413 10.6772 5.10786 11.925C4.02869 12.7583 2.949 13.5958 1.86879 14.4375C0.876842 12.463 0.574314 10.2133 1.00942 8.04688Z" fill="#F8BD00"/>
                <path d="M10.6984 8.14844H19.9984C20.3166 9.89365 20.2305 11.6885 19.7469 13.3953C19.3019 14.9648 18.4376 16.3834 17.2469 17.4984C16.2016 16.6828 15.1516 15.8734 14.1063 15.0578C14.6245 14.7082 15.0668 14.2576 15.4067 13.733C15.7467 13.2084 15.9771 12.6205 16.0844 12.0047H10.6984C10.6969 10.7203 10.6984 9.43438 10.6984 8.14844Z" fill="#587DBD"/>
                <path d="M1.86719 14.4383C2.9474 13.6049 4.02708 12.7674 5.10625 11.9258C5.52376 13.1511 6.31782 14.2131 7.375 14.9602C8.03439 15.4262 8.78364 15.7497 9.575 15.9102C10.3548 16.0551 11.1546 16.0551 11.9344 15.9102C12.7119 15.7785 13.4533 15.4858 14.1109 15.0508C15.1563 15.8664 16.2062 16.6758 17.2516 17.4914C16.1076 18.5316 14.7132 19.2568 13.2047 19.5961C11.5397 19.9875 9.80457 19.9687 8.14844 19.5414C6.8386 19.1917 5.61512 18.5751 4.55469 17.7305C3.43228 16.8394 2.51556 15.7164 1.86719 14.4383Z" fill="#319F43"/>
                </g>
                <defs>
                <clipPath id="clip0_1896_3002">
                <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
              </svg>Google</button>
            </div>
            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
              <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1896_5345)">
                <path d="M20.5 10C20.5 4.47719 16.0228 0 10.5 0C4.97719 0 0.5 4.47719 0.5 10C0.5 14.9913 4.15687 19.1284 8.9375 19.8785V12.8906H6.39844V10H8.9375V7.79688C8.9375 5.29063 10.4305 3.90625 12.7147 3.90625C13.8088 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6922C12.4499 6.5625 12.0625 7.33336 12.0625 8.12422V10H14.8359L14.3926 12.8906H12.0625V19.8785C16.8431 19.1284 20.5 14.9913 20.5 10Z" fill="#1877F2"/>
                <path d="M14.3926 12.8906L14.8359 10H12.0625V8.12422C12.0625 7.33328 12.4499 6.5625 13.6922 6.5625H14.9531V4.10156C14.9531 4.10156 13.8088 3.90625 12.7146 3.90625C10.4305 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C9.45439 19.9595 9.9768 20.0001 10.5 20C11.0232 20.0002 11.5456 19.9595 12.0625 19.8785V12.8906H14.3926Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1896_5345">
                <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
              </svg>Facebook</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center justify-center flex-1 bg-primary text-black relative overflow-hidden">
        <div className="absolute z-0 items-center justify-center w-full h-full mt-36">
          <img src="/Login/chat2.png" alt="" className="max-h-20 z-0 ml-12" />
          <img src="/Login/chat1.png" alt="" className="max-h-20 mt-10 z-0 ml-48" />
        </div>
        <div className="mt-24 max-w-md w-full lg:max-w-full lg:flex-initial text-center relative z-10">
          <img src="/Login/scientist.png" alt="" className="max-h-90 mt-4 " />
        </div>
      </div>
    </div>
  );
}
