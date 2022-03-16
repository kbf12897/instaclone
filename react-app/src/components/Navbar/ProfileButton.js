import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";

function ProfileButton() {
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector((state) => state?.session?.user)

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);


    return (
        <>
            <div className="profile-button" onClick={openMenu}>
                <img className="profile-img-button" src={user.profile_img} alt='profile-img'/>
                <i className="fas fa-user-circle" />
            </div>
            <div className="dropdown">
                {showMenu && (
                    <div className="profile-dropdown">
                        <NavLink to={`/users/${user.id}`}>
                            <div className="profile-page-button">
                                <svg aria-label="Profile" className="_8-yf5 " color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle></svg>
                                <div className="profile-link-button">Profile</div>
                            </div>
                        </NavLink>
                        <div className="profile-logout-button">
                            <LogoutButton/>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProfileButton;
