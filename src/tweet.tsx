// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/
type TweetProps = {
    username: string;
    content: string;
    likes: number;
}
function Tweet(props: TweetProps) {
    const [liked, setLiked] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () =>{
        if(isLiked){
            setLiked(liked-1);
            setIsLiked(false);
        }
        else{
            setLiked(liked+1);
            setIsLiked(true);
        }

    }
    return (
        <div className = "tweet">
            <h2>{props.username}</h2>
            <p>{props.content}</p>
            <button onClick={handleLike}>{isLiked ? "❤️" : "🤍"}</button>
            <span>{liked} Likes</span>
        </div>
    )
}


export default Tweet;

// export default Tweet;
