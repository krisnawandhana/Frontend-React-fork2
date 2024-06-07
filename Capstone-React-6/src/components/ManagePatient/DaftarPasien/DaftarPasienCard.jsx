const DaftarPasienCard = ({ name, date, time }) => {
	return (
		<div className="rounded-[32px] bg-white w-full overflow-hidden px-4 py-6 flex flex-row justify-between items-center">
			<img
				className="h-8 aspect-square rounded-full"
				src="/logo/daftar-pasien-item.svg"
			/>
			<div>
				<p className="text-base text-dark-2">Konsultasi dengan {name}</p>
				<p className="text-base text-dark-3">{date}</p>
			</div>
			<div className="rounded-[32px] text-primary-darker border border-light-1 px-2 py-1.5 text-sm font-medium">
				{time}
			</div>
		</div>
	)
}

export default DaftarPasienCard
