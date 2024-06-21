import React from 'react';
import PermintaanJanjiTemuCard from './PermintaanJanjiTemuCard';

const PermintaanJanjiTemuTable = ({ data, withHeader = false, onRowClick }) => {
    const changeStatus = (status, id) => {
        console.log('Changing status:', status, 'for ID:', id);
        // Add logic to change status as needed
    };

    if (!data || data.length === 0) {
        return <div className="text-center text-gray-500">No data available</div>;
    }

    return (
        <div className="overflow-x-auto w-full">
            <div className="flex flex-col gap-y-6 min-w-[1000px]">
                {withHeader && (
                    <div className="grid grid-cols-10 text-dark-2 font-medium border-b border-b-light-2 py-2 px-3 text-center">
                        <div className="col-span-2 px-2 text-start">Nama</div>
                        <div className="col-span-1 px-2 text-start">JK • Umur</div>
                        <div className="col-span-3 px-2">Keluhan</div>
                        <div className="col-span-2 px-2">Tanggal</div>
                        <div className="col-span-1 px-2">Waktu</div>
                        <div className="col-span-1 px-4">Aksi</div>
                    </div>
                )}
                {data.map((item) => (
                    <PermintaanJanjiTemuCard
                        key={item.id}
                        id={item.id}
                        name={item.complaint?.name}
                        age={item.complaint?.age}
                        gender={item.complaint?.gender}
                        disease={item.complaint?.message}
                        date={item.start_date}
                        time={item.start_time}
                        status={item.status}
                        onStatusChange={(status) => changeStatus(status, item.id)}
                        onRowClick={onRowClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default PermintaanJanjiTemuTable;
