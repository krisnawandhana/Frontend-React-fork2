const TransactionCard = ({ variant, title, count }) => {
	const variants = {
		blue: {
			icon: "/Transaction/this-week.svg",
			color: "bg-[#DEEBF7]",
		},
		pink: {
			icon: "/Transaction/this-month.svg",
			color: "bg-[#F7DEE4]",
		},
        purple:{
            icon: "/Transaction/this-year.svg",
			color: "bg-[#ECDEF7]",
        },
	}
	return (
		<div className={`rounded-3xl py-[30px] px-4 w-10/12 h-full overflow-hidden flex justify-start items-center bg-white ${variants[variant].color}`} >
			<div className="flex flex-row gap-x-6 items-center justify-center">
				<div className="rounded-xl h-14 aspect-square flex justify-center items-center bg-light-4">
					<img src={variants[variant].icon} className="p-3" />
				</div>
				<div className="gap-y-2 text-dark-2 font-semibold text-center text-base">
					<p className="text-start">{title}</p>
					<div className="flex flex-row items-center gap-x-1.5">
						<p className="text-3xl">{count}</p>
						<p>Transaksi</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TransactionCard
