const PermintaanJanjiTemuCard = ({
	name,
	age,
	img,
	disease,
	date,
	time,
	status = "",
	gender,
	onStatusChange,
	openDetail,
}) => {
	if (!openDetail)
		return (
			<div className="grid grid-cols-10 text-dark-2 font-medium border-b border-b-light-2 py-2 px-3 ">
				<div className="col-span-2 flex flex-row gap-x-2 px-2">
					<img src={img} className="h-9 aspect-square rounded-full" />
					<p>{name}</p>
				</div>
				<div className="col-span-1 px-2">
					{gender} • {age}
				</div>
				<div className="col-span-3 px-2">{disease}</div>
				<div className="col-span-2 px-2">{date}</div>
				<div className="col-span-1 px-2">
					{time.start} - {time.end}
				</div>
				<div className="col-span-1 flex justify-center items-center px-4">
					{status === "" ? (
						<div className="flex flex-row justify-between gap-x-2 w-full">
							<button
								onClick={() => onStatusChange("accepted")}
								className="rounded-md aspect-square min-w-fit"
							>
								<img src="/logo/check.svg" />
							</button>
							<button
								onClick={() => onStatusChange("rejected")}
								className="rounded-md aspect-square min-w-fit"
							>
								<img src="/logo/cross.svg" />
							</button>
						</div>
					) : null}
					{status === "accepted" ? (
						<div className="bg-success text-white rounded-md px-1.5 py-1 flex justify-center items-center w-full min-w-fit">
							Diterima
						</div>
					) : null}
					{status === "rejected" ? (
						<div className="bg-error text-white rounded-md px-1.5 py-1 flex justify-center items-center w-full min-w-fit">
							Ditolak
						</div>
					) : null}
				</div>
			</div>
		)
	else
		return (
			<button
				onClick={openDetail}
				className="grid grid-cols-10 text-dark-2 font-medium border-b border-b-light-2 py-2 px-3 "
			>
				<div className="col-span-2 flex flex-row gap-x-2 px-2">
					<img src={img} className="h-9 aspect-square rounded-full" />
					<p>{name}</p>
				</div>
				<div className="col-span-1 px-2">
					{gender} • {age}
				</div>
				<div className="col-span-3 px-2">{disease}</div>
				<div className="col-span-2 px-2">{date}</div>
				<div className="col-span-1 px-2">
					{time.start} - {time.end}
				</div>
				<div className="col-span-1 flex justify-center items-center px-4">
					{status === "" ? (
						<div className="flex flex-row justify-between gap-x-2 w-full">
							<button
								onClick={() => onStatusChange("accepted")}
								className="rounded-md aspect-square min-w-fit"
							>
								<img src="/logo/check.svg" />
							</button>
							<button
								onClick={() => onStatusChange("rejected")}
								className="rounded-md aspect-square min-w-fit"
							>
								<img src="/logo/cross.svg" />
							</button>
						</div>
					) : null}
					{status === "accepted" ? (
						<div className="bg-success text-white rounded-md px-1.5 py-1 flex justify-center items-center w-full min-w-fit">
							Diterima
						</div>
					) : null}
					{status === "rejected" ? (
						<div className="bg-error text-white rounded-md px-1.5 py-1 flex justify-center items-center w-full min-w-fit">
							Ditolak
						</div>
					) : null}
				</div>
			</button>
		)
}

export default PermintaanJanjiTemuCard
