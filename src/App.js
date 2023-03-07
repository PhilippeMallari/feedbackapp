import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4 } from "uuid"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from "./pages/AboutPage"

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

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/'
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            </>
                        }>

                    </Route>

                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
            <Router />
            )
}

            export default App
            {/* // <h1>{title}</h1>
        // <h1>{body}</h1>
        //     {/*Conditional code that checks if there's comments*/}
            {/* //     {showComments && commentBlock} */}