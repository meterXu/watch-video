import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main.tsx';
import MovieRow from '../components/MovieRow';
import Footer from '../components/Footer';
import Content from "./module/Home/Content.tsx";

const movies = [
    { id: 1, title: 'Movie 1', image: 'https://example.com/movie1.jpg' },
    { id: 2, title: 'Movie 2', image: 'https://example.com/movie2.jpg' },
    { id: 3, title: 'Movie 3', image: 'https://example.com/movie3.jpg' },
    // 更多电影...
];

const Home: React.FC = () => {
    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start">
            <Main>
                <div className="h-full flex flex-col">
                    <Header></Header>
                    <Content></Content>
                </div>
            </Main>
            <MovieRow movies={movies} />
            <Footer />
        </div>
    );
};

export default Home;
