import React from 'react'
import MusicCard from '../../../components/ManageContent/MusikMeditasi/MusicCard'

const NewMusicList = ({ refreshData, setRefreshData }) => {

    return (
        <div className="flex justify-between bg-[#D5EDF3] w-[95%] py-14 px-16 pl-24 rounded-3xl text-dark-2">
            <div className="w-[24%]">
                <h2 className="font-bold text-xl w-1/2 mb-2">Musik Meditasi</h2>
                <p className="text-sm">Berikut daftar terbaru untuk konten
                Musik Meditasi dalam <span className="font-semibold">1 minggu</span></p>
            </div>

            {/* card */}
            <div className="absolute right-7">
                <MusicCard refreshData={refreshData} setRefreshData={setRefreshData} />
            </div>
        </div>
    )
}

export default NewMusicList;