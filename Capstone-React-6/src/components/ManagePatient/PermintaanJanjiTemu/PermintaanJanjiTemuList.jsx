import { useQuery } from "@tanstack/react-query"
import PermintaanJanjiTemuTable from "./PermintaanJanjiTemuTable"
import { Link } from "react-router-dom"
import { getConsultations } from "../../../utils/consultation"

const PermintaanJanjiTemuList = () => {
	const { data: consultations, isPending } = useQuery({
		queryKey: ["consultations"],
		queryFn: () => getConsultations({ page: 1, limit: 4 }),
	})

	// const data = [
	// 	{
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "P",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 	},
	// 	{
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "P",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "rejected",
	// 	},
	// 	{
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "P",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 	},
	// 	{
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "P",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "accepted",
	// 	},
	// 	{
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "P",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 	},
	// ]

	const data =
		consultations?.success && !isPending ? consultations?.data.data || [] : []

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
					<img src="/logo/chevron-right.svg" className="h-6 aspect-square" />
				</button>
			</div>
			<PermintaanJanjiTemuTable data={data} />
		</div>
	)
}

export default PermintaanJanjiTemuList
