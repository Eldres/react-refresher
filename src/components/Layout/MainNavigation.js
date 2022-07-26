import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
