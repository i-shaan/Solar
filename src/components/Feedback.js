import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom"

const FeedbackForm = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        // Simulating the API call
        try {
            // Mock API call (replace this with actual API call)
            setTimeout(() => {
                console.log("Form submitted:", { username, rating, comment });
                setFeedbackSubmitted(true);
                console.log(feedbackSubmitted)
                setUsername('');
                setRating('');
                setComment('');
                setSubmitting(false);
                
                toast.success("Form Submitted successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                
                navigate("/");
            }, 3000); // Simulating delay for API call
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setError('Failed to submit feedback. Please try again later.');
            setSubmitting(false);
        }
    };

    return (
        <>
            <Navbar/>
            <div className='bg-[url("https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D")] h-[100vh] p-6 bg-white rounded-lg shadow-md '>
                <h2 className="text-4xl font-bold mb-4 text-blue-500">Feedback Form</h2>
        
                    <form onSubmit={handleSubmit}>
                        {error && <p className="text-blue-600 mb-4">{error}</p>}
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-blue-400 ">Your Name</label>
                            <input type="text" id="username" className="form-input mt-1 block w-full p-2 bg-[#faebd7]" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                    
                        <div className="mb-4">
                            <label htmlFor="rating" className="block text-blue-400">Rating (1-5)</label>
                            <input type="number" id="rating" className="form-input mt-1 block w-full p-2 bg-[#faebd7]" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comment" className="block text-blue-400">Your Comment</label>
                            <textarea id="comment" className="form-textarea mt-1 block w-full p-2 bg-[#faebd7]" value={comment} onChange={(e) => setComment(e.target.value)} rows="3"></textarea>
                        </div>
                        <button type="submit" className={`bg-blue-500 text-white px-4 py-2 rounded-md ${submitting && 'opacity-50 cursor-not-allowed'}`} disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Submit Feedback'}
                        </button>
                    </form>
                
            </div>
            <Footer/>
        </>
    );
};

export default FeedbackForm;
