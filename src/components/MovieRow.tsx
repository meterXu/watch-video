import React from 'react';

interface Movie {
    id: number;
    title: string;
    image: string;
}

interface MovieRowProps {
    movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ movies }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-white">Popular Movies</h2>
            <div className="flex overflow-x-scroll space-x-4 mt-2">
                {movies.map(movie => (
                    <div key={movie.id} className="flex-shrink-0 w-40">
                        <img src={movie.image} alt={movie.title} className="w-full rounded" />
                        <p className="mt-1 text-white">{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieRow;
