import React from 'react';

const MovieRow: React.FC = () => {

    const data = [
        {
            id: 1,
            title: 'Movie 1',
            image: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABV0EngMK9RNCbOTyCCObtArGMA5pUYHgl8_FDHbsW3L8S60ek060IXzg0Od5TRJz8nD8fB4gmmvZ3azMyyCLaIUhJNSyMcgcQ5wOFImJ0xaAK3GsJG803J90hwCTB0vIWYhl.webp?r=883'
        },
        {
            id: 2,
            title: 'Movie 2',
            image: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQfCandzs66UeutZ5k-Mtr8rfB_tBbMFkfuZudVT59hRfQYfVnPL5e8nGXfThU0w6fwyElEB7QFs719_xj4jyYNt80Ke5uhk6x_J-bCY0rWlEHfrwoeD18lY8C7FvSVZw6Eu.webp?r=74b'
        },
        {
            id: 3,
            title: 'Movie 3',
            image: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABY6hT7McgGzxHGpqfGifcUf5gOvX5TxcKX4uMqEn6MagzAia4_UT9utvCrbm_WfDEzO2lEQfFLyJ6Ff6I4jIm3WPxivz0G3sx4lqTwVr9PPmMrjaHbmrJN0xr7xHIurWP1LT.webp?r=c80'
        },
        {
            id: 4,
            title: 'Movie 4',
            image: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcTxRSPStlpRrJus_SJFWDOyrP4xgTrt9iqEvfMd5jE1EbZFc9_Fl2Pei3QFR-3DriZfHAs_qS2skbDYil-YYaLc_92K4iwry6X7C4Bk8IQoVn5bixHco_ZxEQa9sT2nxLxe.webp?r=efb'
        },
        {
            id: 5,
            title: 'Movie 5',
            image: 'https://occ-0-395-58.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQldimujJypcadzi5H9OexO_Lmi4RFA0l8it37uT0OV0c9cm0PCC9TohFXTOwlv4hnghyHYvZbR1_qu-NaWSh3QMVmhLQnV7_0CKA3HwBS968_hWW32SdpGZ_mviNaWMmlRT.webp?r=c0d'
        },
    ];

    return (
        <div className="w-7xl p-4 relative z-2">
            <h2 className="h-11 text-2xl font-bold text-white">正在热播</h2>
            <div className="w-full flex overflow-hiddenß space-x-4 mt-2">
                {data.map(movie => (
                    <div key={movie.id} className="flex-shrink-0 w-50">
                        <img src={movie.image} alt={movie.title} className="w-full rounded"/>
                        <span className="mt-1 text-white">{movie.id}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieRow;
