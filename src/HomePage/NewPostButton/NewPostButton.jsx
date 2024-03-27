import React, { useState } from "react";
import './NewPostButton.css';
import {SUBMIT_POST_URL} from "../../auth/backendConfig";

const NewPostButton = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [newPostComment, setNewPostComment] = useState(''); // Add this line

    const handleClick = () => {
        setIsHidden(!isHidden);
    }

    const handlePostChange = (event) => {
        setNewPostComment(event.target.value);
    }

    const handleSubmit = () => {
        fetch(SUBMIT_POST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({ postContent: newPostComment })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Post saved successfully');
                } else {
                    throw new Error('Error saving post');
                }
            });
        setNewPostComment('');
    }

    return (
        <div className="newPostButton">
            <button id="newPostButton" onClick={handleClick}>+</button>
            <div id="newPost" className={`newPostButton ${isHidden ? 'hidden' : ''}`}>
                <label>
                    <textarea
                        id="newPostComment"
                        placeholder="Type here..."
                        maxLength="200"
                        value={newPostComment}
                        onChange={handlePostChange}
                    ></textarea>
                </label>
                <div>
                    <label id="remainingCounter">200</label>
                    <button id="submitButton" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default NewPostButton;