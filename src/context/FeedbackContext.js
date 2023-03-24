import { createContext, useState, useEffect } from 'react'
// import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    //add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        // newFeedback.id = uuidv4()
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    //delete feedback
    // const deleteFeedback = (id) => {
    //     if (window.confirm('Are you sure you want to delete?')) {
    //         setFeedback(feedback.filter((item) => item.id !== id))
    //     }
    // }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            try {
                const response = await fetch(`/feedback/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    setFeedback(feedback.filter((item) => item.id !== id));
                } else {
                    console.log('Error deleting feedback')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    //update feedback
    // const updateFeedback = (id, updItem) => {
    //     setFeedback(
    //         feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    //     )
    // }

    const updateFeedback = async (id, updItem) => {
        try {
            const response = await fetch(`/feedback/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updItem)
            });
            const data = await response.json();

            setFeedback(
                feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
            );
        } catch (error) {
            console.error(error);
        }
    };

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext