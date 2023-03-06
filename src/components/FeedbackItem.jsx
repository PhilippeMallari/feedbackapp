import {FaTimes} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
function FeedbackItem({item, deleteHandler}) {

    // const clickHandler = () => {
    //     setRating((prev) => {
    //         return prev + 1
    //     })
    // }

    // const clickHandler = (id) => {
    //     console.log(id)
    // }

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick = {() => deleteHandler(item.id)} className="close">
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={clickHandler}>Click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem