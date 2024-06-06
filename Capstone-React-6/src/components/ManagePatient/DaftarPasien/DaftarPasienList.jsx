import DaftarPasienCard from "./DaftarPasienCard"

const DaftarPasienList = () => {
	const data = [
		{
			name: "Kevin",
			time: "60 min",
			date: "Hari ini • 12:00",
		},
		{
			name: "Kevin",
			time: "60 min",
			date: "Hari ini • 12:00",
		},
		{
			name: "Kevin",
			time: "60 min",
			date: "Hari ini • 12:00",
		},
		{
			name: "Kevin",
			time: "60 min",
			date: "Hari ini • 12:00",
		},
	]
	return (
		<div className="flex flex-col gap-y-4">
			<div className="flex flex-row justify-between">
				<h2 className="text-base font-semibold text-dark-2">Daftar Pasien</h2>
				<button className="text-success-darker font-medium flex flex-row gap-x-1 items-center">
					<p className="text-start">Lihat Chat</p>
					<img src="/logo/chevron-right.svg" className="h-6 aspect-square" />
				</button>
			</div>
			<div className="flex flex-col gap-y-2">
				{data.map((item, idx) => (
					<DaftarPasienCard
						key={idx}
						date={item.date}
						name={item.name}
						time={item.time}
					/>
				))}
			</div>
		</div>
	)
}

export default DaftarPasienList
