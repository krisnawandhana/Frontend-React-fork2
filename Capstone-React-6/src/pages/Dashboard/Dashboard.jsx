import React from 'react';

const Dashboard = () => {
    // Dummy data
    const permintaanKonsultasi = [
        { id: 1, avatar: 'boy1.svg', name: 'Kevin Putra', date: '15 Januari 2024', time: '13:00-14:30' },
        { id: 2, avatar: 'girl1.svg', name: 'Viona Mida', date: '14 Januari 2024', time: '10:00-11:30' },
        { id: 3, avatar: 'boy2.svg', name: 'Ariel Alex', date: '14 Januari 2024', time: '09:00-09:30' },
        { id: 4, avatar: 'girl2.svg', name: 'Tiara Dista', date: '14 Januari 2024', time: '09:00-09:30' },
    ];

    const transaksi = [
        { id: 'ME002121', avatar: 'girl2.svg', name: 'Siti Aisyah', issue: 'Depresi', date: '11 Januari 2024', time: '23:31', total: 'Rp150.000', status: 'Sukses' },
        { id: 'ME002120', avatar: 'girl1.svg', name: 'Lia Melinda', issue: 'Skizofrenia', date: '11 Januari 2024', time: '19:49', total: 'Rp100.000', status: 'Sukses' },
        { id: 'ME002119', avatar: 'boy1.svg', name: 'Budi Santoso', issue: 'Gangguan Kecemasan', date: '10 Januari 2024', time: '11:35', total: 'Rp150.000', status: 'Sukses' },
    ];

    const summaryCard = {
        permintaan: 35,
        belumKonsultasi: 5,
        pasienHariIni: 10,
        totalTransaksi: 2000
    };

    return (
        <div className="px-6 overflow-hidden">
            {/* Top bar */}
            <div className="flex justify-between items-center py-2 px-4 mb-4 bg-[#D5EDF3] rounded-[30px]">
                <div className="flex">
                    <img src="../../../public/Dashboard/back.svg" alt="" />
                    <h1 className="text-md font-semibold ml-3 text-primary-darker">Overview</h1>
                </div>
                <div className="flex items-center">
                    <button className="w-8 h-8 mr-3 rounded-full bg-gray-300 overflow-hidden">
                        <img src="../../../public/Dashboard/avatar.png" alt="Profile" className="w-full h-full object-cover" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white flex justify-center items-center mr-1">
                        <img src="../../../public/Dashboard/notification.svg" alt="Notification" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-4 gap-8 mb-4">
                <div className="bg-primary-subtle text-white flex justify-center items-center py-6 px-8 rounded-3xl">
                    <div className="w-14 h-14 rounded-full bg-white opacity-50 flex justify-center items-center mr-6">
                        <img src="../../../public/Dashboard/permintaan.svg" alt="Permintaan Icon" className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-md">Permintaan</h2>
                        <p className="text-md flex items-center gap-2 pl-1 pt-1"><span className="text-2xl font-semibold">{summaryCard.permintaan}</span>Pasien</p>
                    </div>
                </div>
                <div className="bg-warning text-white flex justify-center items-center py-6 px-8 rounded-3xl">
                    <div className="w-14 h-14 rounded-full bg-white opacity-50 flex justify-center items-center mr-6">
                        <img src="../../../public/Dashboard/belumkonsul.svg" alt="Belum Konsultasi Icon" className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-md">Belum Konsultasi</h2>
                        <p className="text-md flex items-center gap-2 pl-2 pt-1"><span className="text-2xl font-semibold">{summaryCard.belumKonsultasi}</span>Pasien</p>
                    </div>
                </div>
                <div className="bg-error-subtle text-white flex justify-center items-center py-6 px-8 rounded-3xl">
                    <div className="w-14 h-14 rounded-full bg-white opacity-50 flex justify-center items-center mr-6">
                        <img src="../../../public/Dashboard/pasien.svg" alt="Pasien Icon" className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-md">Pasien Hari Ini</h2>
                        <p className="text-md flex items-center gap-2 pl-2 pt-1"><span className="text-2xl font-semibold">{summaryCard.pasienHariIni}</span>Pasien</p>
                    </div>
                </div>
                <div className="bg-primary text-white flex justify-center items-center py-6 px-8 rounded-3xl">
                    <div className="w-14 h-14 rounded-full bg-white opacity-50 flex justify-center items-center mr-6">
                        <img src="../../../public/Dashboard/totaltransaksi.svg" alt="Total Transaksi Icon" className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-md">Total Transaksi</h2>
                        <p className="text-2xl font-semibold pl-3 pt-1">{summaryCard.totalTransaksi}</p>
                    </div>
                </div>
            </div>

            {/* Graph and Consultation Requests */}
            <div className="grid grid-cols-2 gap-7 mb-4">
                {/* Consultation Requests */}
                <div className="bg-white px-4 pt-4 pb-2 rounded-xl border shadow text-dark-2">
                    <div className="flex justify-between items-center text-center mb-4">
                        <h3 className="text-lg font-semibold">Permintaan Konsultasi</h3>
                        <div className="flex justify-center items-center">
                            <a href="" className="text-success-darker font-medium text-sm">Lihat Semua</a>
                            <img src="../../../public/Dashboard/lihatsemua.svg" alt="" />
                        </div>
                    </div>
                    <table className="w-full">
                    <tbody>
                        {permintaanKonsultasi.map((item) => (
                            <tr key={item.id} className="border-b">
                                <td className="py-4 flex">
                                    <img src={`../../../public/Dashboard/${item.avatar}`} alt="Avatar" className="w-9 h-9 mr-4" />
                                    <div>
                                        <p className="font-semibold text-sm">{item.name}</p>
                                        <p className="font-normal text-xs">{item.date}</p>
                                    </div>
                                </td>
                                <td className="py-4 text-sm">{item.time}</td>
                                <td className="py-4 flex justify-end mr-2">
                                    <button className="mr-4">
                                        <img src="../../../public/Dashboard/Check.svg" alt="" className="w-5 h-5" />
                                    </button>
                                    <button>
                                        <img src="../../../public/Dashboard/Clear.svg" alt="" className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>

                {/* Graph Placeholder */}
                <div className="bg-white px-4 pt-4 pb-2 rounded-xl border shadow text-dark-2">
                    <div className="flex justify-between items-center text-center mb-7">
                        <h3 className="text-lg font-semibold">Top Konten Meditasi</h3>
                        <div className="flex justify-center items-center">
                            <a href="" className="text-success-darker font-medium text-sm">Lihat Semua</a>
                            <img src="../../../public/Dashboard/lihatsemua.svg" alt="" />
                        </div>
                    </div>
                    {/* Placeholder for graph */}
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                        <span>Graph Placeholder</span>
                    </div>
                </div>
            </div>

            {/* Transactions */}
            <div className="text-dark-2">
                <div className="flex justify-between items-center text-center mb-4">
                    <h3 className="text-lg font-semibold">Transaksi</h3>
                    <div className="flex justify-center items-center">
                        <a href="" className="text-success-darker font-medium text-sm">Lihat Semua</a>
                        <img src="../../../public/Dashboard/lihatsemua.svg" alt="" />
                    </div>
                </div>
                <div className="rounded-xl border shadow">
                    <table className="w-full rounded-xl overflow-hidden">
                        <thead className="border-b bg-[#D5EDF3]">
                            <tr>
                                <th className="py-2 text-sm text-left pl-20 w-1/6">Pasien</th>
                                <th className="py-2 text-sm text-center">Keluhan</th>
                                <th className="py-2 text-sm text-center">Tanggal</th>
                                <th className="py-2 text-sm text-center">Waktu</th>
                                <th className="py-2 text-sm text-center">Total</th>
                                <th className="py-2 text-sm text-center">Status</th>
                                <th className="py-2 text-sm text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaksi.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-2 text-sm flex pl-7">
                                        <img src={`../../../public/Dashboard/${item.avatar}`} alt="Avatar" className="w-9 h-9 mr-4" />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="font-normal text-xs">ID: {item.id}</p>
                                        </div>
                                    </td>
                                    <td className="py-2 text-sm text-center">{item.issue}</td>
                                    <td className="py-2 text-sm text-center">{item.date}</td>
                                    <td className="py-2 text-sm text-center">{item.time}</td>
                                    <td className="py-2 text-sm text-center">{item.total}</td>
                                    <td className="py-2 text-sm text-center">
                                        <span className={`px-3 py-1 rounded text-sm ${item.status === 'Sukses' ? 'bg-[#D5EDF3] text-primary-darker rounded-xl' : 'bg-red-500 text-white'}`}>{item.status}</span>
                                    </td>
                                    <td className="py-2 text-center">
                                        <button>
                                            <img src="../../../public/Dashboard/hapus.svg" alt="" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
