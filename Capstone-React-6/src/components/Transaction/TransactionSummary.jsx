const TransactionSummary = ({ variant, title, count }) => {
	const variants = {
		total: {
			icon: "/Transaction/total-transaction.svg",
			color: "bg-[#CBDDFF]",
            teks: "Total Transaksi"
		},
		today: {
			icon: "/Transaction/today-transaction.svg",
			color: "bg-[#FFC99A]",
            teks: "Transaksi Hari ini"
		},
        success:{
            icon: "/Transaction/transaction-success.svg",
			color: "bg-[#EDDEF7]",
            teks: "Transaksi Sukses"
        },
        failed:{
            icon: "/Transaction/transaction-failed.svg",
			color: "bg-[#FFAFAF]",
            teks: "Transaksi Gagal"
        },
	}
    return (
		<div className="rounded-3xl mt-8 py-1 px-4 w-11/12 h-full overflow-hidden flex justify-start items-center bg-white outline outline-1 outline-dark-4/50" >
			<div className="flex flex-row gap-x-6 items-center justify-center">
				<div className={`rounded-full h-14 aspect-square flex justify-center items-center ${variants[variant].color}`}>
					<img src={variants[variant].icon} className="p-3" />
				</div>
				<div className="gap-y-2 text-dark-2 font-semibold text-base">
                <p className="text-start">{title}</p>
                <div className="flex flex-col items-left gap-y-1.5">
                    <p className="text-xl">{count}</p>
                    <p className="text-sm">{variants[variant].teks}</p>
                </div>
                </div>
			</div>
		</div>
	)
}

export default TransactionSummary
