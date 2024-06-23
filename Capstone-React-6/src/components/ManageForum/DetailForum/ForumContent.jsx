import React, { useEffect, useState } from 'react';
import BalasForum from './BalasForum';
import { getForumPosts } from '../../../utils/forum';

const ForumContent = ({ forumId }) => {
    const [originalPost, setOriginalPost] = useState(null);
    const [replies, setReplies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token'); 

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            console.log('Fetching posts for forumId:', forumId); // Log fetching initiation
            try {
                const { success, data, message } = await getForumPosts(forumId, 1, 10, token);
                console.log('Fetch result - success:', success, 'data:', data, 'message:', message); // Log fetch result
                if (success) {
                    console.log('Setting posts data:', data);
                    if (data && data.length > 0) {
                        setOriginalPost(data[0]);
                        setReplies(data.slice(1));
                    } else {
                        console.log('No posts found in the response data');
                        setOriginalPost(null);
                        setReplies([]);
                    }
                    setError(null);
                } else {
                    setError(message || 'Failed to fetch forum posts');
                }
            } catch (error) {
                setError('Error fetching forum posts');
                console.error('Error fetching forum posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [forumId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!originalPost) {
        return <div>No posts available.</div>;
    }

    return (
        <div>
            <div className="flex items-start mb-4">
                <img src={originalPost.user.profile_picture || `/Forum/default-avatar.png`} alt={originalPost.user.username} className="h-10 w-10 rounded-full mr-4" />
                <div>
                    <span className="font-semibold text-primary">{originalPost.user.username}</span>
                    <p className="text-sm mt-2">{originalPost.content}</p>
                </div>
            </div>
            <BalasForum replies={replies} />
        </div>
    );
};

export default ForumContent;
