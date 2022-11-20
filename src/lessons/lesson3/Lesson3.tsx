import React, { useState } from 'react';
import API from './API';
import './lesson_3';
type searchResultType = {
    Title: string,
    Year: string,
    Actors: string
    Country: string
    Genre: string
    Released: string
    imdbRating: string
    Poster: string
    Runtime: string
    Type: string
    Response: boolean
}
const initialState:searchResultType = {
    Title: '',
    Year: '',
    Actors: '',
    Country: '',
    Genre: '',
    Released: '',
    imdbRating: '',
    Poster: '',
    Runtime: '',
    Type: '',
    Response: true
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<searchResultType>(initialState);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<searchResultType>(initialState);

    const searchFilm = () => {
      const film = API.searchFilmsByTitle(searchName)
        film.then((value)=> {
            if (value) setSerachResult({...value.data})
        })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
      API.searchFilmsByType(searchNameByType, type).then((value => {
          setSerachResultByType(value.data)
      }))

    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                   <span>{serachResult.Title}</span>
                    <img src={serachResult.Poster} alt=""/>
                   <span>{serachResult.Runtime}</span>
                   <span>{serachResult.imdbRating}</span>
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    <span> {serachResultByType.Title}</span>
                    <span> {serachResultByType.Type}</span>

                </div>
            </div>
        </div>
    );
}
export default Lesson3;