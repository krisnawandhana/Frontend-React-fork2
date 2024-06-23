import { useQuery } from "@tanstack/react-query";
import PermintaanJanjiTemuTable from "./PermintaanJanjiTemuTable";
import { Link } from "react-router-dom";
import { getConsultations } from "../../../utils/consultation";

const PermintaanJanjiTemuList = () => {
    const token = localStorage.getItem('token'); // Ensure the token is correctly retrieved from local storage

    const { data: consultations, isPending, error } = useQuery({
        queryKey: ["consultations"],
        queryFn: () => getConsultations(token, 1, 10, "start_date", "asc"),
        onError: (error) => {
            if (error.response?.status === 401) {
                localStorage.removeItem('token');
                window.location.href = "/login";
            }
        }
    });

    const data = consultations?.success && !isPending ? consultations.data.data || [] : [];

    return (
        <div className="rounded-[32px] flex flex-col gap-y-6 px-4 bg-white">
            <div className="flex flex-row justify-between">
                <h2 className="text-base font-semibold text-dark-2">
                    Permintaan Janji Temu
                </h2>
                <button className="text-success-darker font-medium flex flex-row gap-x-1 items-center">
                    <Link to="/dashboard/managepatient/detail" className="text-start">
                        Lihat Semua
                    </Link>
                    <img src="/logo/chevron-right.svg" className="h-6 aspect-square" alt="chevron icon" />
                </button>
            </div>
            <PermintaanJanjiTemuTable data={data} />
        </div>
    );
};

export default PermintaanJanjiTemuList;
