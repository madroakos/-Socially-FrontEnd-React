import React from "react";
import './NewPostButton.css';
const NewPostButton = () => {
    const [isHidden, setIsHidden] = React.useState(true);

    const handleClick = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div className="newPostButton">
            <button id="newPostButton" onClick={handleClick}>+</button>
            <div id="newPost" className={`newPostButton ${isHidden ? 'hidden' : ''}`}>
                <label>
                    <textarea id="newPostComment" placeholder="Type here..." maxLength="200"></textarea>
                </label>
                <div>
                    <label id="remainingCounter">200</label>
                    <button id="submitButton">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default NewPostButton;