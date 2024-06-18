import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRatings } from '../../utils/feedback.js';

const DetailProfile = () => {
    const [profile, setProfile] = useState({
        name: 'dr. Andre Wirawan Santoso, Sp.KJ',
        specialization: 'Psikiater Dewasa',
        education: [
            { level: 'S1', university: 'Universitas Indonesia' },
            { level: 'S2', university: 'Universitas Gajah Mada' }
        ],
        rating: {
            one_star_count: 0,
            two_star_count: 0,
            three_star_count: 0,
            four_star_count: 0,
            five_star_count: 0,
            average: 0
        }
    });

    useEffect(() => {
        const fetchRatings = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('No token found');
                return;
            }

            const response = await getRatings(token);
            if (response.success) {
                setProfile((prevProfile) => ({
                    ...prevProfile,
                    rating: response.data
                }));
            } else {
                alert('Failed to fetch ratings');
            }
        };

        fetchRatings();
    }, []);

    const totalRatings = Object.values(profile.rating).slice(0, 5).reduce((sum, value) => sum + value, 0);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div>
                <div className="flex justify-between mb-4">
                    <p className="font-semibold text-dark-1">Profile</p>
                    <Link to="/dashboard/editprofile" className="flex items-center">
                        <img src="/Profile/Edit.svg" alt="Edit" />
                        <button className="text-primary text-sm font-medium ml-2">Edit Profile</button>
                    </Link>
                </div>
                <img src="/Profile/photoprofile.png" alt="Doctor" />
                <h2 className="text-sm mt-3 text-dark-1 font-semibold text-center">{profile.name}</h2>
                <p className="text-sm text-dark-2 text-center">{profile.specialization}</p>
            </div>
            <div className="mt-4 flex justify-between">
                {profile.education.map((edu, index) => {
                    const bgColor = index === 0 ? 'bg-[#EE96B5] rounded' : 'bg-[#D796EE] rounded';
                    return (
                        <div key={index} className="flex items-center mb-2 p-2 rounded-lg">
                            <img src="/Profile/Education.svg" alt="University Icon" className={`w-10 h-10 p-2 mr-2 ${bgColor}`} />
                            <div>
                                <p className="text-xs font-semibold">{edu.level}</p>
                                <p className="text-xs">{edu.university}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-1">
                <h3 className="text-sm font-semibold mb-3">Rating</h3>
                <div className="flex items-center">
                    <p className="text-sm mr-3 text-dark-2">Rata-rata</p>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <input
                                key={i}
                                type="radio"
                                name="rating-2"
                                className={`mask mask-star-2 w-4 mr-1 ${i < profile.rating.average ? 'bg-orange-300' : 'bg-gray-200'}`}
                                readOnly
                                checked={i === Math.floor(profile.rating.average)}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-dark-2">{profile.rating.average.toFixed(1)}</p>
                </div>
                <div className="mt-3">
                    {Object.entries(profile.rating).slice(0, 5).reverse().map(([key, value], index) => (
                        <div key={index} className="flex items-center mb-3">
                            <span className="text-sm mr-3">{5 - index}</span>
                            <div className="w-64 bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${(value / totalRatings) * 100}%` }}></div>
                            </div>
                            <span className="text-sm ml-3">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailProfile;
