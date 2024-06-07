import PermintaanJanjiTemuTable from "./PermintaanJanjiTemuTable"

const PermintaanJanjiTemuList = () => {
	const data = [
		{
			name: "Tiara Dista",
			age: 22,
			img: "/avatar/foto-pasien.png",
			gender: "P",
			disease: "Gangguan Stres Pascatrauma (PTSD)",
			date: "Senin, 15 Januari 2024",
			time: {
				start: "13:00",
				end: "14:30",
			},
			status: "",
		},
		{
			name: "Tiara Dista",
			age: 22,
			img: "/avatar/foto-pasien.png",
			gender: "P",
			disease: "Gangguan Stres Pascatrauma (PTSD)",
			date: "Senin, 15 Januari 2024",
			time: {
				start: "13:00",
				end: "14:30",
			},
			status: "rejected",
		},
		{
			name: "Tiara Dista",
			age: 22,
			img: "/avatar/foto-pasien.png",
			gender: "P",
			disease: "Gangguan Stres Pascatrauma (PTSD)",
			date: "Senin, 15 Januari 2024",
			time: {
				start: "13:00",
				end: "14:30",
			},
			status: "",
		},
		{
			name: "Tiara Dista",
			age: 22,
			img: "/avatar/foto-pasien.png",
			gender: "P",
			disease: "Gangguan Stres Pascatrauma (PTSD)",
			date: "Senin, 15 Januari 2024",
			time: {
				start: "13:00",
				end: "14:30",
			},
			status: "accepted",
		},
		{
			name: "Tiara Dista",
			age: 22,
			img: "/avatar/foto-pasien.png",
			gender: "P",
			disease: "Gangguan Stres Pascatrauma (PTSD)",
			date: "Senin, 15 Januari 2024",
			time: {
				start: "13:00",
				end: "14:30",
			},
			status: "",
		},
	]

	return (
		<div className="rounded-[32px] flex flex-col gap-y-6 px-4 py-5 bg-white">
			<div className="flex flex-row justify-between">
				<h2 className="text-base font-semibold text-dark-2">
					Permintaan Janji Temu
				</h2>
				<button className="text-success-darker font-medium flex flex-row gap-x-1 items-center">
					<p className="text-start">Lihat Semua</p>
					<img src="/logo/chevron-right.svg" className="h-6 aspect-square" />
				</button>
			</div>
			<PermintaanJanjiTemuTable data={data.slice(0, 4)} />
		</div>
	)
}

export default PermintaanJanjiTemuList
