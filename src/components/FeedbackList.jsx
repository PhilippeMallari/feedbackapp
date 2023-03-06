import FeedbackItem from './FeedbackItem'
import React from 'react'
import PropTypes from 'prop-types'

function FeedbackList({feedback, deleteHandler}) {
    console.log(feedback)
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem 
                key={item.id} 
                item={item}
                deleteHandler ={deleteHandler}
                />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackList