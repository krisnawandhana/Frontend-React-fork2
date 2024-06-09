const DateCard = () => {
	return (
		<div className="rounded-[32px] bg-white w-full overflow-hidden">
			<div className="h-[60px] w-full bg-primary"></div>
			<div className="p-5 flex flex-col gap-y-6 items-center text-center">
				<h2 className="text-3xl text-dark-2 font-medium">Jumat</h2>
				<p className="text-primary-darker text-6xl font-medium">12</p>
				<p className="text-dark-2 text-2xl font-medium">Januari 2024</p>
			</div>
		</div>
	)
}

export default DateCard
