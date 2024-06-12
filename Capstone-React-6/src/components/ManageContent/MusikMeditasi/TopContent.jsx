import React from 'react'

const TopContent = () => {

    return (
        <>
            {/* Graph Placeholder */}
            <div className="bg-white px-4 pt-4 pb-2 rounded-xl border shadow text-dark-2">
                <div className="flex justify-between items-center text-center mb-5">
                    <h3 className="text-lg font-semibold">Top Konten Meditasi</h3>
                </div>
                {/* Placeholder for graph */}
                <div className="w-full h-64 mb-2 bg-gray-200 flex items-center justify-center">
                    <span>
                        <p className="text-gray-400">Graph Placeholder</p>   
                    </span>
                </div>
            </div>
        </>
    )
}

export default TopContent;