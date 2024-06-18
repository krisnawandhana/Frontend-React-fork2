import React, { useEffect, useState } from 'react';
import { getFeedbacks } from '../../utils/feedback.js';

const Rating = () => {
    const [ratings, setRatings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const token = localStorage.getItem('token'); // Replace with actual token
            try {
                const response = await getFeedbacks(1, 10, token);
                if (response.success) {
                    setRatings(response.data);
                } else {
                    setError(response.message);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFeedbacks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {ratings.length === 0 ? (
                <div className="text-center text-gray-500 py-5 uppercase font-semibold">belum ada komentar/rating dari pengguna</div>
            ) : (
                ratings.map((rating) => (
                    <div key={rating.id} className="bg-white py-5 px-6 rounded-lg shadow mb-2">
                        <div>
                            <div className="flex">
                                <img src={rating.user.image_url || '/default-avatar.png'} alt="Avatar" className="w-10 h-10 mr-4" />
                                <div>
                                    <h3 className="text-base font-semibold">{rating.user.name || rating.user.username}</h3>
                                    <p className="text-xs text-gray-500 mb-2">{rating.date}</p>
                                    <div className="flex items-center mb-2">
                                        <div className="rating">
                                            {[...Array(rating.rate)].map((_, index) => (
                                                <input key={index} type="radio" name={`rating-${rating.id}`} className="mask mask-star-2 w-4 mr-1 bg-orange-300" checked readOnly />
                                            ))}
                                            {[...Array(5 - rating.rate)].map((_, index) => (
                                                <input key={index} type="radio" name={`rating-${rating.id}`} className="mask mask-star-2 w-4 mr-1 bg-gray-300" readOnly />
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500">{rating.rate}/5</p>
                                    </div>
                                    <p className="text-sm">{rating.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Rating;
