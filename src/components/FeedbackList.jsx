import FeedbackItem from './FeedbackItem'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'


function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }
        return isLoading ? (
            <h3><Spinner /></h3>
        ) : (
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
                            />
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
        )
        // <div className="feedback-list">
        //     {feedback.map((item) => (
        //         <FeedbackItem 
        //         key={item.id} 
        //         item={item}
        //         deleteHandler ={deleteHandler}
        //         />
        //     ))}
        // </div>
}

export default FeedbackList