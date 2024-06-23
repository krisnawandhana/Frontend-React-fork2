import React, { useState } from "react";
import PermintaanJanjiTemuTable from "../../components/ManagePatient/PermintaanJanjiTemu/PermintaanJanjiTemuTable";
import PatientDetailPopup from "../../components/ManagePatient/PermintaanJanjiTemu/PatientDetailPopup";
import { useQuery } from "@tanstack/react-query";
import { getConsultations } from "../../utils/consultation";

export default function Detail() {
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    
    const token = localStorage.getItem('token'); // Replace 'token' with your actual storage key

    const { data: consultations, isPending } = useQuery({
        queryKey: ["consultations"],
        queryFn: () => getConsultations(token, 1, 10, 'start_date', 'asc'),
    });

    const data = consultations?.success && !isPending ? consultations?.data.data || [] : [];

    const handleRowClick = (patientId) => {
        setSelectedPatientId(patientId);
    };

    const handleClosePopup = () => {
        setSelectedPatientId(null);
    };

    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex flex-row flex-wrap justify-between">
                <div className="bg-white p-2.5 flex flex-row items-center gap-x-2 rounded-md border border-dark-4 text-dark-3 w-1/4 min-w-fit">
                    <img className="aspect-square" src="/logo/search.svg" alt="search icon" />
                    <input className="focus:outline-none" placeholder="Search For Something" />
                </div>
            </div>
            <div className="rounded-[32px] bg-white pt-4 overflow-hidden">
                <PermintaanJanjiTemuTable withHeader data={data} onRowClick={handleRowClick} />
            </div>
            {selectedPatientId && (
                <PatientDetailPopup consultationId={selectedPatientId} onClose={handleClosePopup} />
            )}
        </div>
    );
}
