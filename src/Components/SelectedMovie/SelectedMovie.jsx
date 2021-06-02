import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ScrollContainer from 'react-indiana-drag-scroll';
import { getFlixDetail } from '../../Features/repositoryAPI';
import { actions } from '../../Features/customerBasket';
import './SelectedMovie.css';

const SelectedMovie = () => {
    const url = 'https://image.tmdb.org/t/p/w200';
    const movieId = useSelector(state => state.movieSelected.id);;
    const [flixDetail, setFlixDetail] = useState([]);
    const dispatch = useDispatch();
    let id = movieId;

    useEffect(() => {
        getFlixDetail(dispatch, id).then((resp) => { setFlixDetail(JSON.parse(resp)) });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const movieToBuy = [flixDetail.original_title, 4.99];

    const currentBasket = useSelector(state => state.customerBasket.content);

    function buyMovie() {
        console.log('current bakset: ', currentBasket);
        console.log('adding to cart: ', movieToBuy);
        dispatch(actions.addItem(movieToBuy));
    }

    useEffect(() => {
        console.log('content of basket: ', currentBasket);
    }, [currentBasket]);

    return (
        <ScrollContainer className="individual-movie-component">

            <div className="movie-info">
                <div className="movie-poster">
                    <img src={flixDetail.poster_path ? url + flixDetail.poster_path : null} alt="" />
                </div>

                <div className="movie-info-container">
                    <div className="movie-title-text">{flixDetail.original_title}</div>
                    <div className="movie-info-text">{flixDetail.overview}</div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div className="user-rating-container">
                    User rating <br />
                    <div className="user-rating-score-text">4.5</div>
                </div>

                <div className="movie-price-text">
                    Price <br />
                    $4.99
                </div>
            </div>

            <div>
                <div className="buy-button" onClick={buyMovie}>Buy</div>
            </div>

            <div className="user-review-container">
                <div className="user-review-header">User reviews</div>

                {/* user-review is generated through mapping of any reviews left by other users */}
                <div className="user-review">
                    <div className="user-review-text">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                </div>

                <div className="user-review">
                    <div className="user-review-text">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                </div>

                <div className="user-review">
                    <div className="user-review-text">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                </div>

            </div>


        </ScrollContainer>
    )
}

export default SelectedMovie;