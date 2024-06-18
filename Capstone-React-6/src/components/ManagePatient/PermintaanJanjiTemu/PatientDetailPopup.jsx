import React from 'react';

const PatientDetailPopup = ({ patient, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-2/5 flex flex-col">
                <div className="flex justify-between items-center bg-[#D5EDF3] rounded-t-xl mb-3 px-6 py-6">
                    <h2 className="text-xl font-semibold">Detail Pasien</h2>
                    <img src="/Content/close.svg" alt="" onClick={onClose} className="w-10 h-10" />
                </div>
                <div className="flex flex-col py-3 px-16">
                    <div className="grid grid-cols-2 gap-6 mb-5">
                        <div className="p-3 border rounded-xl flex justify-center gap-4 items-center">
                            <img src={patient.img} alt="" className="w-12 h-12 rounded-full" />
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-semibold text-sm mb-1">{patient.name}</p>
                                <p className="text-xs mb-1">{patient.gender} • {patient.age} Tahun</p>
                                <p className="text-xs">{patient.address}</p>
                            </div>
                        </div>
                        <div className="p-3 border rounded-xl flex flex-col justify-center items-center">
                            <p className="font-semibold text-sm mb-1">Waktu Konsultasi</p>
                            <p className="text-xs mb-1">{patient.date}</p>
                            <p className="text-xs">{patient.time.start} - {patient.time.end}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p className="font-semibold text-sm mb-1">Detail Keluhan:</p>
                        <div className="w-full p-3 h-24 border border-primary rounded-xl text-sm">
                            {patient.complaintDetail}
                        </div>
                    </div>
                    <div className="mb-8">
                        <p className="font-semibold text-sm mb-1">Riwayat Penyakit:</p>
                        <div className="w-full p-3 h-24 border border-primary rounded-xl text-sm">
                            {patient.diseaseHistory}
                        </div>
                    </div>
                    <div className="flex justify-center mb-5">
                        <button className="text-sm bg-primary py-2 px-8 text-white font-medium rounded-lg hover:bg-primary-darker">
                            Lanjut ke Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetailPopup;
