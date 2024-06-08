import React from 'react';

const Rating = () => {
    // Dummy data
    const ratings = [
        {
            id: 1,
            name: 'Alvina Anggreka',
            date: '10 Januari 2024',
            time: '19:30',
            avatar: 'girl1.svg',
            comment: 'Saya telah menjalani beberapa sesi konsultasi dengan Dr. Andre selama tiga bulan terakhir dan sangat terkesan dengan profesionalisme beliau.'
        },
        {
            id: 2,
            name: 'Aryo Budianto',
            date: '10 Januari 2024',
            time: '19:30',
            avatar: 'boy1.svg',
            comment: 'Pendekatan beliau yang ramah dan penuh empati membuat saya merasa nyaman dan dihargai. Saya sangat bersyukur telah menemukan psikiater sebaik beliau.'
        },
        {
            id: 3,
            name: 'Clara Maya',
            date: '10 Januari 2024',
            time: '19:30',
            avatar: 'girl2.svg',
            comment: 'Bagus sekali'
        },
        {
            id: 4,
            name: 'Dimas Saputra',
            date: '9 Januari 2024',
            time: '14:00',
            avatar: 'boy2.svg',
            comment: 'Sesi konsultasi yang sangat membantu. Dr. Andre memberikan banyak wawasan dan strategi yang berguna.'
        }
    ];

    return (
        <div>
            {ratings.map((rating) => (
                <div className="bg-white py-5 px-6 rounded-lg shadow mb-2">
                    <div key={rating.id}>
                        <div className="flex">
                        <img src={`../../../public/Dashboard/${rating.avatar}`} alt="Avatar" className="w-10 h-10 mr-4" />
                            <div>
                                <h3 className="text-base font-semibold">{rating.name}</h3>
                                <p className="text-xs text-gray-500 mb-2">{rating.date} • {rating.time}</p>
                                <div className="flex items-center mb-2">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 w-4 mr-1 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 w-4 mr-1 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 w-4 mr-1 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 w-4 mr-1 bg-orange-300" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 w-4 mr-2 bg-orange-300" checked />
                                    </div>
                                    <p className="text-xs text-gray-500">5/5</p>
                                </div>
                                <p className="text-sm">{rating.comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Rating;
