import React, { useEffect, useState } from "react";
import {POSTS_BY_USER_URL, POSTS_URL} from "../../auth/backendConfig";
import "./Posts.css";
import {Link} from "react-router-dom";

const Posts = ({ username }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = username ? `${POSTS_BY_USER_URL}?username=${username}` : POSTS_URL;
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            method: 'GET',
        })
            .then(response => {
                if (response.status === 403) {
                    localStorage.removeItem('token');
                    window.location.href = '../LoginPage/index.jsx';
                } else {
                    return response.json()
                        .then(data => {
                            const tempPosts = data.map(post => ({
                                id: post.id,
                                username: post.username,
                                timeSince: post.timeSince,
                                postContent: post.postContent
                            }));
                            setPosts(tempPosts);
                        });
                }
            });
    }, [username]);

    function postsAvailable() {
        console.log(posts.length !== 0)
        return posts.length !== 0;
    }

    function showPosts() {
        return (
            <div className='postsDiv'>
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="upperDiv">
                            <Link to={`/user/${post.username}`} className="post_userSection">{post.username}</Link>
                            <p className="post_submitTimeSection">{post.timeSince}</p>
                        </div>
                        <div className="lowerDiv">
                            <p className="post_contentSection">{post.postContent}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}

    function showEmptyPosts() {
        return (
            <div className='postsDiv'>
                <p>No activity yet</p>
            </div>
        )
    }

    return (
        postsAvailable() ? showPosts() : showEmptyPosts()
    )


}

export default Posts;