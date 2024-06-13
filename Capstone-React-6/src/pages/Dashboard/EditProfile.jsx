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
    address: 'Jl. Kebahagiaan No. 123, Kecamatan Senen, Jakarta Pusat'
  };

  return (
    <div className="px-6 overflow-hidden">
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