import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const handleToggleFavoritesStatus = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavoritesStatus}>
            {itemIsFavorite ? "Remove from Favorites" : "Add To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
