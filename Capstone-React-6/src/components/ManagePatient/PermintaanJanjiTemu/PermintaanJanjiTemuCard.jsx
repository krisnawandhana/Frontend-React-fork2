import React from 'react';

const PermintaanJanjiTemuCard = ({
    id,
    name,
    age,
    img,
    disease,
    date,
    time = {},
    status = "",
    gender,
    onStatusChange,
    openDetail,
    onRowClick,
}) => {
    if (!openDetail) {
        return (
            <div className="grid grid-cols-10 text-dark-2 font-medium border-b border-b-light-2 py-2 px-3">
                <div onClick={() => onRowClick(id)} className="col-span-2 flex items-center gap-x-2 px-2 cursor-pointer">
                    <img src={img} alt={name} className="h-9 aspect-square rounded-full" />
                    <p>{name}</p>
                </div>
                <div className="col-span-1 px-2">
                    {gender} • {age}
                </div>
                <div className="col-span-3 px-2">{disease}</div>
                <div className="col-span-2 px-2">{date}</div>
                <div className="col-span-1 px-2">
                    {time.start ? `${time.start} - ${time.end}` : ""}
                </div>
                <div className="col-span-1 flex justify-center items-center px-4">
                    {status === "" ? (
                        <div className="flex gap-x-2">
                            <button
                                onClick={() => onStatusChange("accepted")}
                                className="rounded-md aspect-square min-w-fit"
                            >
                                <img src="/logo/check.svg" alt="Accept" />
                            </button>
                            <button
                                onClick={() => onStatusChange("rejected")}
                                className="rounded-md aspect-square min-w-fit"
                            >
                                <img src="/logo/cross.svg" alt="Reject" />
                            </button>
                        </div>
                    ) : (
                        <div className={`bg-${status === "accepted" ? "success" : "error"} text-white rounded-md px-1.5 py-1 flex justify-center items-center min-w-fit`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </div>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <button onClick={openDetail} className="grid grid-cols-10 text-dark-2 font-medium border-b border-b-light-2 py-2 px-3 cursor-pointer">
                <div className="col-span-2 flex items-center gap-x-2 px-2">
                    <img src={img} alt={name} className="h-9 aspect-square rounded-full" />
                    <p>{name}</p>
                </div>
                <div className="col-span-1 px-2">
                    {gender} • {age}
                </div>
                <div className="col-span-3 px-2">{disease}</div>
                <div className="col-span-2 px-2">{date}</div>
                <div className="col-span-1 px-2">
                    {time.start ? `${time.start} - ${time.end}` : ""}
                </div>
                <div className="col-span-1 flex justify-center items-center px-4">
                    {status === "" ? (
                        <div className="flex gap-x-2">
                            <button
                                onClick={() => onStatusChange("accepted")}
                                className="rounded-md aspect-square min-w-fit"
                            >
                                <img src="/logo/check.svg" alt="Accept" />
                            </button>
                            <button
                                onClick={() => onStatusChange("rejected")}
                                className="rounded-md aspect-square min-w-fit"
                            >
                                <img src="/logo/cross.svg" alt="Reject" />
                            </button>
                        </div>
                    ) : (
                        <div className={`bg-${status === "accepted" ? "success" : "error"} text-white rounded-md px-1.5 py-1 flex justify-center items-center min-w-fit`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </div>
                    )}
                </div>
            </button>	
        );
		
    }
};

export default PermintaanJanjiTemuCard;
