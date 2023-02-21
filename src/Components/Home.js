import React from 'react'
import Navbar from './Navbar'
import News from './News'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<News category="General" country="in" />} />
                    <Route exact path="/business" element={<News category="business" country="in" />} />
                    <Route exact path="/entertainment" element={<News category="entertainment" country="in" />} />
                    <Route exact path="/everything" element={<News category="everything" country="in" />} />
                    <Route exact path="/health" element={<News category="health" country="in" />} />
                    <Route exact path="/science" element={<News category="science" country="in" />} />
                    <Route exact path="/sports" element={<News category="sports" country="in" />} />
                    <Route exact path="/technology" element={<News category="technology" country="in" />} />
                    <Route exact path='/saved' element={<News category="saved" country="in" ss="saved" />} />
                </Routes>
            </Router>
        </div>
    )
}
