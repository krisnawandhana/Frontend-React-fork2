const NewestCard = ({ variant, detail, count, date, name, id, avatar }) => {
	const variants = {
		sukses: {

            color: "bg-success",
		},
        gagal: {
            color: "bg-error",
		},
	}
	const nominalAmount = parseFloat(count);

	return (
		<div className="rounded-full w-full h-full overflow-hidden flex justify-start items-center bg-white outline outline-2 outline-dark-4" >
			<div className="flex flex-row gap-x-2 items-center justify-center">
				<div className="h-16 aspect-square flex justify-center items-center">
					<img src={`/Dashboard/${avatar}`} alt={avatar} className="p-2 rounded-full" />
				</div>
				<div className="gap-y-2 text-dark-2 font-semibold text-center text-base">
					<p className="text-start">{name}</p>
					<div className="flex flex-row items-center gap-x-1.5">
						<p className="text-body1">{id}</p>
					</div>
				</div>
                <div className="flex flex-row gap-x-6 mx-auto ml-3 align-middle items-center text-dark-2 text-body1 font-semibold">
                    <p className="text-center">{nominalAmount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                    <p className="text-center">{date}</p>
                    <p className={`text-white p-2 rounded-full w-24 text-center uppercase ${variants[variant].color}`}>{detail}</p>
                </div>
			</div>
		</div>
	)
}

export default NewestCard
