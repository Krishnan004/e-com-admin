import React, { useEffect, useState, useCallback } from 'react'
import api from '../api/mainurl';

function Review() {
    const [review, setReview] = useState([]);
    
    const formatDate = (timestamp) => {
        return new Date(timestamp).toISOString().split('T')[0];
    };

    const daysBetween = (dateString) => {
        const currentDate = new Date();
        const givenDate = new Date(dateString);
        
        // Calculate the difference in milliseconds
        const differenceInTime = currentDate - givenDate;
        
        // Convert milliseconds to days
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        
        return differenceInDays;
    };

    const fetchData = useCallback(async () => {
        try {
            const response = await api.get("/review");
            setReview(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleApproval = async (approval, review_id) => {
        try {
            const response = await api.put("/review", { approval, review_id });
            console.log(response);
            // Update the state to reflect the changes
            setReview(prevReviews => 
                prevReviews.map(review => 
                    review.review_id === review_id ? { ...review, approval } : review
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {review.map((item) => (
                <div key={item.review_id} className="p-8 space-y-4">
                    <div className="bg-white rounded-xl gap-6 p-4 w-fit">
                        <div basis="">
                            <p className="font-bold">{item.reviewer_name || 'Anonymous'}</p>
                            <p className="font-thin">{formatDate(item.review_date)}</p>
                            <p className="font-thin">{daysBetween(formatDate(item.review_date))} days ago</p>
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-bold">{item.comment}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque id dui eget venenatis. In hac habitasse platea dictumst. Pellentesque lacinia placerat nisl, non sagittis orci porttitor a. Vivamus non urna eget purus auctor venenatis vel vel sem.</p>
                            <div className="flex gap-4 justify-end">
                                <button onClick={() => handleApproval(false, item.review_id)}>Reject</button>
                                {!item.approval && <button id="button" onClick={() => handleApproval(true, item.review_id)}>Approve</button>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Review;
