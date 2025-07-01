import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '@/pages/home/Home';
import NotFound from '@/pages/NotFound';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
