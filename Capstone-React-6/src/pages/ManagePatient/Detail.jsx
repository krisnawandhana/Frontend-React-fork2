import PermintaanJanjiTemuTable from "../../components/ManagePatient/PermintaanJanjiTemu/PermintaanJanjiTemuTable"

export default function Detail() {
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
		<div className="flex flex-col gap-y-6">
			<div className="flex flex-row flex-wrap justify-between">
				<h1 className="mb-6 text-4xl text-dark-2 font-medium">
					Permintaan Janji Temu
				</h1>
				<div className="bg-white p-2.5 flex flex-row items-center gap-x-2 rounded-md border border-dark-4 text-dark-3 w-1/4 min-w-fit">
					<img className="aspect-square" src="/logo/search.svg" />
					<input
						className="focus:outline-none "
						placeholder="Search For Something"
					/>
				</div>
			</div>
			<div className="rounded-[32px] bg-white pt-4 overflow-hidden">
				<PermintaanJanjiTemuTable withHeader data={data} />
			</div>
		</div>
	)
}
