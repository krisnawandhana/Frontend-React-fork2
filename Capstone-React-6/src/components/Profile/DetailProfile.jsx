import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRatings } from '../../utils/feedback.js';
import { getDoctorProfile } from '../../utils/profile.js'; // Assuming you have this function defined

const DetailProfile = () => {
    const [profile, setProfile] = useState({
        id: 0,
        username: '',
        email: '',
        name: '',
        address: '',
        phone_number: '',
        gender: '',
        is_available: false,
        profile_picture: '',
        experience: 0,
        bachelor_almamater: '',
        bachelor_graduation_year: 0,
        master_almamater: '',
        master_graduation_year: 0,
        practice_location: '',
        practice_city: '',
        fee: 0,
        specialist: '',
        balance: 0,
        rating_percentage: 0
    });
    const [ratings, setRatings] = useState({
        one_star_count: 0,
        two_star_count: 0,
        three_star_count: 0,
        four_star_count: 0,
        five_star_count: 0,
        average: 0
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfileAndRatings = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No token found');
                setIsLoading(false);
                return;
            }

            try {
                const profileResponse = await getDoctorProfile(token);
                if (profileResponse.success) {
                    setProfile(profileResponse.data);
                } else {
                    setError('Failed to fetch doctor profile');
                }
            } catch (error) {
                setError('Error fetching doctor profile');
            }

            try {
                const ratingsResponse = await getRatings(token);
                if (ratingsResponse.success) {
                    setRatings(ratingsResponse.data);
                } else {
                    setError('Failed to fetch ratings');
                }
            } catch (error) {
                setError('Error fetching ratings');
            }

            setIsLoading(false);
        };

        fetchProfileAndRatings();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>; // Handle loading state
    }

    if (error) {
        return <p>{error}</p>; // Handle error state
    }

    const totalRatings = Object.values(ratings).slice(0, 5).reduce((sum, value) => sum + value, 0);

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
                <img src={profile.profile_picture} alt="Doctor" />
                <h2 className="text-sm mt-3 text-dark-1 font-semibold text-center">{profile.name}</h2>
                <p className="text-sm text-dark-2 text-center">{profile.specialist}</p>
            </div>
            <div className="mt-4 flex justify-between">
                {profile.bachelor_almamater && (
                    <div className="flex items-center mb-2 p-2 rounded-lg">
                        <img src="/Profile/Education.svg" alt="University Icon" className="w-10 h-10 p-2 mr-2 bg-[#EE96B5] rounded" />
                        <div>
                            <p className="text-xs font-semibold">S1</p>
                            <p className="text-xs">{profile.bachelor_almamater}</p>
                        </div>
                    </div>
                )}
                {profile.master_almamater && (
                    <div className="flex items-center mb-2 p-2 rounded-lg">
                        <img src="/Profile/Education.svg" alt="University Icon" className="w-10 h-10 p-2 mr-2 bg-[#D796EE] rounded" />
                        <div>
                            <p className="text-xs font-semibold">S2</p>
                            <p className="text-xs">{profile.master_almamater}</p>
                        </div>
                    </div>
                )}
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
                                className={`mask mask-star-2 w-4 mr-1 ${i < ratings.average ? 'bg-orange-300' : 'bg-gray-200'}`}
                                readOnly
                                checked={i === Math.floor(ratings.average)}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-dark-2">{ratings.average.toFixed(1)}</p>
                </div>
                <div className="mt-3">
                    {Object.entries(ratings).slice(0, 5).reverse().map(([key, value], index) => (
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
