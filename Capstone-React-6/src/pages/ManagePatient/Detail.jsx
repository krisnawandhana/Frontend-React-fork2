import React, { useState } from "react"
import PermintaanJanjiTemuTable from "../../components/ManagePatient/PermintaanJanjiTemu/PermintaanJanjiTemuTable"
import PatientDetailPopup from "../../components/ManagePatient/PermintaanJanjiTemu/PatientDetailPopup"
import { useQuery } from "@tanstack/react-query"
import { getConsultations } from "../../utils/consultation"

export default function Detail() {
	const [selectedPatient, setSelectedPatient] = useState(null)

	const { data: consultations, isPending } = useQuery({
		queryKey: ["consultations"],
		queryFn: () => getConsultations(),
	})

	const data =
		consultations?.success && !isPending ? consultations?.data.data || [] : []

	//dummy data
	// const data = [
	// 	{
	// 		id: 1,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Caca Marica",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Februari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "rejected",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "accepted",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 5,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 6,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 1,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "rejected",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 7,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 8,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "accepted",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// 	{
	// 		id: 9,
	// 		name: "Tiara Dista",
	// 		age: 22,
	// 		img: "/avatar/foto-pasien.png",
	// 		gender: "Perempuan",
	// 		address: "Jakarta, Indonesia",
	// 		disease: "Gangguan Stres Pascatrauma (PTSD)",
	// 		date: "Senin, 15 Januari 2024",
	// 		time: {
	// 			start: "13:00",
	// 			end: "14:30",
	// 		},
	// 		status: "",
	// 		complaintDetail: "Mengalami mimpi buruk berulang...",
	//           diseaseHistory: "Tidak ada riwayat penyakit serius...",
	// 	},
	// ]

	const handleRowClick = (patientId) => {
		const patient = data.find((p) => p.id === patientId)
		setSelectedPatient(patient)
	}

	const handleClosePopup = () => {
		setSelectedPatient(null)
	}

	return (
		<div className="flex flex-col gap-y-6">
			<div className="flex flex-row flex-wrap justify-between">
				<div className="bg-white p-2.5 flex flex-row items-center gap-x-2 rounded-md border border-dark-4 text-dark-3 w-1/4 min-w-fit">
					<img className="aspect-square" src="/logo/search.svg" />
					<input
						className="focus:outline-none "
						placeholder="Search For Something"
					/>
				</div>
			</div>
			<div className="rounded-[32px] bg-white pt-4 overflow-hidden">
				<PermintaanJanjiTemuTable
					withHeader
					data={data}
					onRowClick={handleRowClick}
				/>
			</div>
			{selectedPatient && (
				<PatientDetailPopup
					patient={selectedPatient}
					onClose={handleClosePopup}
				/>
			)}
		</div>
	)
}
