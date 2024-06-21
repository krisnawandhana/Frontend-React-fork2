import React, { useState, useEffect } from 'react';
import { getConsultationById } from '../../../utils/consultation';

const PatientDetailPopup = ({ consultationId, onClose }) => {
    const [consultation, setConsultation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTkzMzA0MzEsInJvbGUiOiJ1c2VyIiwidXNlcklkIjoxMn0.YheEq_mxQGQRQKUGsxnzQ7Z0LUc0gMPEvdagQ_rDVgo'; // Replace 'token' with your actual storage key

    useEffect(() => {
        console.log('Consultation ID:', consultationId); // Log consultationId
        if (!consultationId) {
            console.warn('Consultation ID is undefined or null.');
            return;
        }

        const fetchConsultationDetail = async () => {
            try {
                const { success, data, message } = await getConsultationById(consultationId, token);
                console.log('API Response:', data);
                if (success) {
                    setConsultation(data); // Assuming data structure matches expected consultation details
                } else {
                    console.error('Failed to fetch consultation detail:', message);
                }
            } catch (error) {
                console.error('Error fetching consultation detail:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching data
            }
        };

        fetchConsultationDetail();
    }, [consultationId]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                Loading...
            </div>
        );
    }

    if (!consultation) {
        return (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                Failed to load consultation data.
            </div>
        );
    }

    const doctor = consultation.doctor || {};
    const time = consultation.start_date ? `${new Date(consultation.start_date).toLocaleDateString()} ${new Date(consultation.start_date).toLocaleTimeString()} - ${new Date(consultation.end_date).toLocaleTimeString()}` : '';

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-2/5 flex flex-col">
                <div className="flex justify-between items-center bg-[#D5EDF3] rounded-t-xl mb-3 px-6 py-6">
                    <h2 className="text-xl font-semibold">Detail Konsultasi</h2>
                    <img src="/Content/close.svg" alt="" onClick={onClose} className="w-10 h-10 cursor-pointer" />
                </div>
                <div className="flex flex-col py-3 px-16">
                    <div className="grid grid-cols-2 gap-6 mb-5">
                        <div className="p-3 border rounded-xl flex justify-center gap-4 items-center">
                            <img src={doctor.profile_picture} alt="" className="w-12 h-12 rounded-full" />
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-semibold text-sm mb-1">{doctor.name}</p>
                                <p className="text-xs mb-1">{doctor.gender} • {doctor.experience} years of experience</p>
                                <p className="text-xs">{doctor.practice_location}, {doctor.practice_city}</p>
                            </div>
                        </div>
                        <div className="p-3 border rounded-xl flex flex-col justify-center items-center">
                            <p className="font-semibold text-sm mb-1">Consultation Status</p>
                            <p className="text-xs mb-1">{consultation.status}</p>
                            <p className="text-xs">Payment Status: {consultation.payment_status}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p className="font-semibold text-sm mb-1">Consultation Details:</p>
                        <div className="w-full p-3 h-24 border border-primary rounded-xl text-sm">
                            {consultation.message}
                        </div>
                    </div>
                    <div className="mb-8">
                        <p className="font-semibold text-sm mb-1">Doctor's Contact:</p>
                        <div className="w-full p-3 h-24 border border-primary rounded-xl text-sm">
                            {doctor.email}<br />
                            {doctor.phone_number}
                        </div>
                    </div>
                    <div className="flex justify-center mb-5">
                        <button className="text-sm bg-primary py-2 px-8 text-white font-medium rounded-lg hover:bg-primary-darker">
                            Continue to Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDetailPopup;
