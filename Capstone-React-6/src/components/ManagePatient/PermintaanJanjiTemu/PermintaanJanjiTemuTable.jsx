import PermintaanJanjiTemuCard from "./PermintaanJanjiTemuCard"

const PermintaanJanjiTemuTable = ({ data, withHeader = false }) => {
	const changeStatus = (status, id) => {
		console.log(status)
		console.log(id)
	}
	return (
		<div className="overflow-x-auto w-full">
			<div className="flex flex-col gap-y-6  min-w-[1000px]">
				{withHeader === true ? (
					<div className="grid grid-cols-10 text-dark-2 font-medium border-b border-b-light-2 py-2 px-3 text-center">
						<div className="col-span-2 px-2 text-start">Nama</div>
						<div className="col-span-1 px-2 text-start">JK • Umur</div>
						<div className="col-span-3 px-2">Keluhan</div>
						<div className="col-span-2 px-2">Tanggal</div>
						<div className="col-span-1 px-2">Waktu</div>
						<div className="col-span-1 px-4">Aksi</div>
					</div>
				) : null}
				{data.map((item, idx) => (
					<PermintaanJanjiTemuCard
						key={idx}
						age={item.age}
						gender={item.gender}
						date={item.date}
						disease={item.disease}
						img={item.img}
						name={item.name}
						status={item.status}
						time={item.time}
						onStatusChange={(status) => changeStatus(status, idx)}
					/>
				))}
			</div>
		</div>
	)
}

export default PermintaanJanjiTemuTable
