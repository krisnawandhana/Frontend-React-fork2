import React from 'react';

const PatientChat = ({ onSelectPatient }) => {
    const patients = [
      { id: 1, name: 'Andi Pratama', time: '11:12 PM', message: 'Saya merasa cemas hampir...', unread: false, avatar: '/Chat/laki.svg' },
      { id: 2, name: 'Viona Mida', time: '11:00 PM', message: 'Selamat pagi dokter, saya...', unread: true, avatar: '/Chat/perempuan.svg' },
      { id: 3, name: 'Rizky Ananda', time: '10:12 PM', message: 'Tidak ada yang spesifik, hanya...', unread: false, avatar: '/Chat/laki.svg' },
      { id: 4, name: 'Dewi Anggraeni', time: '09:12 PM', message: 'Selamat siang, kemarin saya...', unread: true, avatar: '/Chat/perempuan.svg' },
      { id: 5, name: 'Nina Kartika', time: 'Kemarin', message: 'Terima kasih, Dokter. Saya sangat...', unread: false, avatar: '/Chat/perempuan.svg' },
      { id: 6, name: 'Tina Susanti', time: 'Kemarin', message: 'Terimakasih banyak dokter, saya...', unread: false, avatar: '/Chat/perempuan.svg' },
      { id: 7, name: 'Fajar Nugroho', time: 'Kemarin', message: 'Sangat membantu sekali dok...', unread: false, avatar: '/Chat/laki.svg' },
      { id: 8, name: 'Siti Aisyah', time: 'Kemarin', message: 'Doakan saya cepat sembuh...', unread: false, avatar: '/Chat/perempuan.svg' },
    ];

    return (
        <div>
            <div className="relative ">
                <img src="/Content/Search.svg" alt="" className="absolute left-5 top-1/3 transform -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Temukan Message"
                    className="py-3 px-4 pl-12 w-full text-sm rounded-2xl mb-6 border-2 border-gray-300 focus:outline-none focus:ring focus:border-primary"
                />
            </div>
            <div className="overflow-y-auto h-[560px]">
                {patients.map((patient) => (
                    <div
                        key={patient.id}
                        className={`flex items-center justify-between shadow px-3 py-5 ${patient.unread ? 'bg-blue-100' : ''} rounded-md mb-1 cursor-pointer`}
                        onClick={() => onSelectPatient(patient)}
                    >
                        <div className="flex items-center">
                            <img src={patient.avatar} alt={patient.name} className="w-9 h-9 rounded-full mr-3" />
                            <div>
                                <h4 className="font-semibold text-sm">{patient.name}</h4>
                                <p className="text-gray-600 text-xs">{patient.message}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs">{patient.time}</p>
                            {patient.unread && <span className="bg-red-500 text-white text-xs rounded-full px-1 mr-3">2</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientChat;
