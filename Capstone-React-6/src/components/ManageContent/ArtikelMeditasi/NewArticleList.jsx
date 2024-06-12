import React from 'react'
import ArticleCard from '../ArtikelMeditasi/ArticleCard'

const NewMusicList = () => {

    return (
        <div className="flex justify-between bg-[#D5EDF3] w-[95%] py-14 px-16 pl-24 rounded-3xl text-dark-2">
            <div className="w-[24%]">
                <h2 className="font-bold text-xl w-1/2 mb-2">Artikel Meditasi</h2>
                <p className="text-sm">Berikut daftar terbaru untuk konten
                Artikel Meditasi dalam <span className="font-semibold">1 minggu</span></p>
            </div>

            {/* card */}
            <div className="absolute right-12 bottom-14">
                <ArticleCard />
            </div>
        </div>
    )
}

export default NewMusicList;