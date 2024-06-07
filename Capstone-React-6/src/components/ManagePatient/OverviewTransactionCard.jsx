const OverviewTransactionCard = ({ variant, title, count }) => {
	const variants = {
		blue: {
			icon: "/logo/user-transaction-1.svg",
			color: "bg-primary-subtle",
		},
		red: {
			icon: "/logo/user-transaction-2.svg",
			color: "bg-error-subtle",
		},
	}
	return (
		<div
			className={`rounded-3xl py-[30px] px-4 w-full h-full overflow-hidden flex justify-start items-center ${variants[variant].color}`}
		>
			<div className="flex flex-row gap-x-6 items-center justify-center">
				<div className="rounded-full h-14 aspect-square flex justify-center items-center bg-white/50">
					<img src={variants[variant].icon} />
				</div>
				<div className="gap-y-2 text-white font-semibold text-center text-base">
					<p className="text-start">{title}</p>
					<div className="flex flex-row items-center gap-x-1.5">
						<p className="text-3xl">{count}</p>
						<p>Pasien</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OverviewTransactionCard
