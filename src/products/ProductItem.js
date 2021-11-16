import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import TextTruncate from 'react-text-truncate'; // recommend
import FavoritesContext from "./../ammo/favorites-context";

// const cardStyle = {"max-width": "540px;"}

const ProductItem = ({ product }) => {

  const favContext = useContext(FavoritesContext);

  const itemIsFavorite = favContext.itemIsFavorite(product.id);

  const toggleFavoriteHandler = () => {

    if (itemIsFavorite){
      favContext.deleteFavorite(product.id)
    }else{
      favContext.addFavorite(product);
      console.log("NGA Favorite Product", favContext.favorites);
    }
  }

  return (
    <Card className="card-product" key={product.id} style={{'height': '500px'}}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        rounded="true"
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text >
          <TextTruncate
          variant="body"
          line={3}
          element="span"
          truncateText="…"
          text={product.description}
          textTruncateChild={<span><a style={{'float': 'left'}} href="https://www.google.com">Read on</a></span>} />
          
          </Card.Text>
      </Card.Body>
      <Card.Footer style={{'backgroundColor': 'white'}}>
        <Button variant="primary" className="float-end" onClick={toggleFavoriteHandler} >
          {itemIsFavorite ? 'Remove from Favorites': 'To Favorites'}
          </Button>

      </Card.Footer>
    </Card>
  );
};

export default ProductItem;
