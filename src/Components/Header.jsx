import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../Features/activeView';
import ProfileIcon from '../Assets/Images/profileIcon.png';

const Header = () => {

    const [buttonIsClicked, setButtonIsClicked] = useState(false);

    const dispatch = useDispatch();

    const style = {
        header: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 95,
            borderBottom: "1px solid black",
            background: "#C4C4C4"
        },
        menuButton: {
            display: "flex",
            flexDirection: "column",
            marginLeft: 25,
        },
        profileButton: {
            marginRight: 25,
        },
        menuContainer: {
            display: "flex",
            flexDirection: "column",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: -5
        },
        menuRow: {
            height: 7,
            width: 50,
            marginTop: 5,
            background: "black"
        },
        buttonImage: {
            width: 40,
            height: 40
        },
        buttonImageClicked: {
            width: 35,
            height: 35
        },
        buttonGeneral: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            borderRadius: 15,
            border: "1px solid black",
            background: "white"
        }
    }

    //Resets the styling first and then triggers the function of the button
    function animationOnClick(dispatch, clickedButton) {
        setTimeout(() => {
            setButtonIsClicked(false);
        }, 100);
        setTimeout(() => {
            if (clickedButton === 'profileClicked') {
                dispatch(actions.profile());
            } else {
                dispatch(actions.menu());
            }
            
        }, 250);
    }


    return (
        <header style={style.header}>
            <div style={{ ...style.menuButton, ...style.buttonGeneral }}>
                <div style={style.menuContainer}>
                    <div style={style.menuRow} />
                    <div style={style.menuRow} />
                    <div style={style.menuRow} />
                </div>
            </div>

            <h2>WHS</h2>
            
            <div style={{ ...style.profileButton, ...style.buttonGeneral }}>
                <img
                style={buttonIsClicked ? style.buttonImageClicked : style.buttonImage}
                src={ProfileIcon}
                onClick={() => {setButtonIsClicked(true); animationOnClick(dispatch, 'profileClicked')}}/>
            </div>
        </header>
    )
}

export default Header;