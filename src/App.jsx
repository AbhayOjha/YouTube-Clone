import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppContext } from './context/contextApi';
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  return (
    <AppContext>
        <BrowserRouter>
            <div className='flex flex-col h-full'>
                <Header />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
                    <Route path="/video/:id" element={<VideoDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    </AppContext>
  )
}

export default App