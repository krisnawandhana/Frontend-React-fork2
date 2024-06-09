const JanjiTemuChart = ({ accepted, waiting, rejected }) => {
	const chart = {
		backgroundImage: `conic-gradient(#08B6D5 0% ${accepted}%, #A8B2FF ${accepted}% ${
			waiting + accepted
		}%, #CBD5E1 ${waiting + accepted}% ${waiting + accepted + rejected}%`,
	}

	const data = [
		{
			name: "Permintaan Diterima",
			percentage: `${accepted}%`,
			color: "#08B6D5",
		},
		{
			name: "Menunggu Persetujuan",
			percentage: `${waiting}%`,
			color: "#A8B2FF",
		},
		{
			name: "Permintaan Ditolak",
			percentage: `${rejected}%`,
			color: "#CBD5E1",
		},
	]

	return (
		<div className="flex flex-col gap-y-3">
			<div className="flex flex-row justify-between font-semibold text-dark-2">
				<p>Grafik Janji Temu</p>
				<select className="bg-[#FAFAFA] focus:outline-0">
					<option>Januari 2024</option>
				</select>
			</div>
			<div className="w-full p-8 flex flex-row gap-x-16 items-center bg-white rounded-[32px]">
				<div
					className="rounded-full w-1/2 aspect-square flex justify-center items-center"
					style={chart}
				>
					<div className="rounded-full w-1/2 aspect-square bg-white" />
				</div>
				<div className="flex flex-col justify-between gap-y-2">
					{data.map((item, idx) => (
						<div key={idx} className="flex flex-row items-center gap-x-3">
							<div
								className="rounded-full h-2 aspect-square"
								style={{ backgroundColor: item.color }}
							/>
							<p className="font-medium">
								{item.name} <b>•</b> {item.percentage}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default JanjiTemuChart
