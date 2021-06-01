import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIVEVIEW } from '../../Features/activeView';
import GenreMenu from '../GenreSidebar/GenreMenu';
import { actions as loggedInActions } from '../../Features/loggedinUser';
import LoginRegistration from '../LoginRegistration/LoginRegistration';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import Profile from '../ProfileOrder/ProfileOrder';
import HomePage from '../HomePage/HomePage';
import './ActiveView.css';
import Search from '../Search/Search';
import ChosenGenre from '../ShowGenreMovies/ChosenGenre';
import GenreStore from '../../Features/genreSelected';
import { render } from '@testing-library/react';


const ActiveView = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [lastView, setLastView] = useState(null);
    const activeView = useSelector(state => state.activeView.activeView);
    let content = null;

    const currentUserUnparsed = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserUnparsed);
    const dispatch = useDispatch();

    //uses state from redux to display active component
    if (activeView === ACTIVEVIEW.CHECKOUT) {
        content = 'checkout component goes here';
        // content = <SelectedMovie />
    } else if (activeView === ACTIVEVIEW.PROFILE) {
        content = <Profile />
    } else if (activeView === ACTIVEVIEW.LOGIN) {
        content = <LoginRegistration />
    } else if (activeView === ACTIVEVIEW.DEFAULT) {
        content = <HomePage />
    } else if (activeView === ACTIVEVIEW.MENU) {
        content = lastView;
        <ChosenGenre/>
        //content = <GenreStore> <ChosenGenre/> </GenreStore>

        if (!menuActive) {
            setMenuActive(true);
        }
    } else if (activeView === ACTIVEVIEW.SEARCH) {
        content = <Search />
    } else if (activeView === ACTIVEVIEW.SELECTEDMOVIE) {
        content = <SelectedMovie />
    }
    else {
        
        content = lastView;
    }

    //separate useEffect when closing side menu to avoid loop
    useEffect(() => {
        if (menuActive) {
            setMenuActive(false);
            <ChosenGenre/>
        }
    }, [menuActive]);

    //saving current active component so it displays when side menu closes
    useEffect(() => {
        if (activeView !== (ACTIVEVIEW.MENU || ACTIVEVIEW.DEFAULT)) {
            setLastView(content);
        }
    }, [activeView]); // eslint-disable-line react-hooks/exhaustive-deps

    //checks localstorage for previous loggedin user
    useEffect(() => {
            if(currentUser && currentUser.operationType === 'signIn') {
                dispatch(loggedInActions.loggedin());
            }

    }, [currentUser]); // eslint-disable-line react-hooks/exhaustive-deps 

    return (
        <div>
            <div className={menuActive ? "openMenu" : "closedMenu"}>
                    <GenreMenu />
                    
            </div>
            {content}
        </div>
    )
}

export default ActiveView;