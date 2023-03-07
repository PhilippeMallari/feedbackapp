import FeedbackItem from './FeedbackItem'
import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion"

function FeedbackList({feedback, deleteHandler}) {
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (
            <div className="feedback-list">
                <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                    key={item.id}
                    initial = {{opacity:0}}
                    animate = {{opacity:1}}
                    exit = {{opacity:0}}
                    >
                        <FeedbackItem 
                        key={item.id} 
                        item={item}
                        deleteHandler ={deleteHandler}
                        />
                    </motion.div>
                ))}
                </AnimatePresence>
            </div>
            // <div className="feedback-list">
            //     {feedback.map((item) => (
            //         <FeedbackItem 
            //         key={item.id} 
            //         item={item}
            //         deleteHandler ={deleteHandler}
            //         />
            //     ))}
            // </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackList