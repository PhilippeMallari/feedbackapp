import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    // const title = 'Blog Post';
    // const body = 'This is my blog post';
    // const comments = [
    //     { id: 1, text: 'Comment one' },
    //     { id: 2, text: 'Comment one' },
    //     { id: 3, text: 'Comment one' }
    // ]

    // const loading = false;
    // const showComments = true;
    // const commentBlock = ((<div className="comments">
    //     <h3>Comments ({comments.length})</h3>
    //     <ul>
    //         {comments.map((comment, index) => (</li>
    //         ))}
    //             <li key={index}>{comment.text}
    //     </ul>
    // </div>))

    // if (loading) return <h1>Loading...</h1>
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} deleteHandler={deleteFeedback} />
                {/* // <h1>{title}</h1>
        // <h1>{body}</h1>
        //     {/*Conditional code that checks if there's comments*/}
                {/* //     {showComments && commentBlock} */}
            </div>
        </>
    )
}

export default App