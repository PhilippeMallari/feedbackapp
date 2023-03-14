import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
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
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        ></Route>

                        <Route path='/about' element={<AboutPage />} />
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App
// {/* // <h1>{title}</h1>
//         // <h1>{body}</h1>
//         //     {/*Conditional code that checks if there's comments*/}
// {/* //     {showComments && commentBlock} */ }