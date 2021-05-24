import React, { useEffect } from 'react'
import './SearchResultRow.css'

const SearchResultRow = (props) => {
    const url = 'https://image.tmdb.org/t/p/w200';
    // useEffect(() => {
    //    try {
    //        if (props.movie.results) {
    //            console.log(props.movie.results)
    //        } else {
    //            console.log('no data in movie')
    //        }
    //    } catch (e) {
    //        console.log(e)
    //    }
    // })

    try {
        if (props.movie.results) {
            return (
                <>
                {props.movie.results.map((movie, index) => 
                <table className="results" key={index}>
                    <tbody>
                        <tr>
                            <td>
                                <img alt="movie poster" src={url + props.movie.results[index].poster_path} />
                            </td>
                            <td>
                                <h3>{props.movie.results[index].title}</h3>
                                <p>{props.movie.results[index].overview}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                )}
                </>
            )
        }
        return (
            <>
            </>
        )
        
    } catch (e) {
        console.log(e)
    }
    }

export default SearchResultRow;
