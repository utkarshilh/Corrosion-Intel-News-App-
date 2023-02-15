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
                    <Route eaxt path="/" element={<News category="General" country="in" />} />
                    <Route eaxt path="/business" element={<News category="business" country="in" />} />
                    <Route eaxt path="/entertainment" element={<News category="entertainment" country="in" />} />
                    <Route eaxt path="/everything" element={<News category="everything" country="in" />} />
                    <Route eaxt path="/health" element={<News category="health" country="in" />} />
                    <Route eaxt path="/science" element={<News category="science" country="in" />} />
                    <Route eaxt path="/sports" element={<News category="sports" country="in" />} />
                    <Route eaxt path="/technology" element={<News category="technology" country="in" />} />
                </Routes>
            </Router>
        </div>
    )
}
