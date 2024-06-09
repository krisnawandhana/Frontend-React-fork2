import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EditProfile = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); 

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const notifications = [
    { id: 1, message: 'Janji temu baru dengan pasien Pramita pada 27 Mei 2024 pukul 09.00', time: 'Baru Saja' },
    { id: 2, message: 'Janji temu baru dengan pasien Budi pada 27 Mei 2024 pukul 10.00', time: 'Baru Saja' },
    { id: 3, message: 'Janji temu baru dengan pasien Siti pada 27 Mei 2024 pukul 11.00', time: 'Baru Saja' },
    { id: 4, message: 'Janji temu baru dengan pasien Dedi pada 27 Mei 2024 pukul 12.00', time: 'Baru Saja' },
    { id: 5, message: 'Janji temu baru dengan pasien Lina pada 27 Mei 2024 pukul 13.00', time: 'Baru Saja' },
  ];

  const profile = {
    name: 'dr. Andre Wirawan Santoso, Sp.KJ',
    specialization: 'Psikiater Dewasa',
    edu1: 'S1 Psikologi - Universitas Indonesia',
    edu2: 'S2 Psikologi - Universitas Gajah Mada',
    day: 'Senin - Jumat',
    time: '09.00 - 17.00',
    address: 'Jl. Kebahagiaan No. 123, Kecamatan Senen, Jakarta Pusat'
  };

  return (
    <div className="px-6 overflow-hidden">
      {/* Top bar */}
      <div className="flex justify-between items-center py-2 px-4 mb-4 bg-[#D5EDF3] rounded-[30px]">
        <div className="flex">
          <Link to="/dashboard/profile">
            <img src="../../../public/Dashboard/back.svg" alt="" />
          </Link>
          <h1 className="text-md font-semibold ml-3 text-primary-darker">Edit Profile</h1>
        </div>
        <div className="flex items-center">
          <button className="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1" onClick={toggleNotification}>
            <img src="../../../public/Dashboard/notification.svg" alt="Notification" className="w-6 h-6" />
          </button>

          {/* Notification Modal */}
          {isNotificationOpen && (
            <div className="text-dark-2">
              <div className="fixed inset-0 bg-black opacity-30 z-10" onClick={toggleNotification}></div>
              <div className="absolute top-20 right-10 w-1/4 bg-white shadow-lg rounded-lg p-4 z-20">
                <div className="flex justify-between items-center">
                  <div className="mb-4">
                    <h3 className="text-md font-semibold ml-2">Notifikasi</h3>
                  </div>
                  <div className="flex justify-between mb-7">
                    <button className="text-primary text-sm py-2 px-3 shadow">Belum Dibaca</button>
                    <button className="text-gray-600 text-sm py-2 px-3 mr-4 shadow">Semua</button>
                  </div>
                </div>
                <div className="overflow-y-auto max-h-96">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="mb-4">
                      <div className="flex items-start mb-2">
                        <img src="../../../public/Dashboard/Ellipse.svg" alt="" className="w-4 mr-3"/>
                          <div className="mr-1">
                            <p className="text-sm">{notification.message}</p>
                            <a href="#" className="text-primary text-sm pt-3">{notification.time}</a>
                          </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit */}
      <div className="mt-8">
        <div className="p-4 rounded-lg shadow flex justify-between items-center">
          <div className="flex items-center">
            <img src="../../../public/Profile/ava2.png" alt="" className="rounded-full mr-10" />
            <div>
              <h2 className="text-lg text-dark-1 font-semibold mb-2">{profile.name}</h2>
              <p className="text-sm text-dark-2">{profile.specialization}</p>
            </div>
          </div>
          <div>
            <button className="bg-primary py-2 px-7 rounded-3xl text-white text-sm hover:bg-primary-darker">Edit</button>
          </div>
        </div>

        <div className="p-4 rounded-lg shadow mt-8">
          <form action="">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 text-dark-1 text-sm font-medium">Nama</label>
              <input type="text" placeholder={profile.name} className="border border-dark-4 text-sm py-2 px-4 rounded-3xl" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="jenisKelamin" className="mb-2 text-dark-1 text-sm font-medium">Jenis Kelamin</label>
              <select name="jenisKelamin" id="jenisKelamin" className="border border-dark-4 text-sm py-2 px-4 rounded-3xl text-dark-3">
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 text-dark-1 text-sm font-medium">Bidang</label>
              <input type="text" placeholder={profile.specialization} className="border border-dark-4 text-sm py-2 px-4 rounded-3xl" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="pendidikan" className="mb-2 text-dark-1 text-sm font-medium">Pendidikan</label>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder={profile.edu1} className="border border-dark-4 text-sm py-2 px-4 rounded-3xl" />
                <input type="text" placeholder={profile.edu2} className="border border-dark-4 text-sm py-2 px-4 rounded-3xl" />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="bukaPraktik" className="mb-2 text-dark-1 text-sm font-medium">Buka Praktik</label>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder={profile.day} className="border border-dark-4 text-sm py-2 px-4 rounded-3xl" />
                <input type="text" placeholder={profile.time} className="border border-dark-4 text-sm py-2 px-4 rounded-3xl" />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="alamat" className="mb-2 text-dark-1 text-sm font-medium">Alamat Praktik</label>
              <input type="text" placeholder={profile.address} className="border border-dark-4 text-sm py-2 px-4 rounded-3xl" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile;