import { useContext } from "react";
import FavoritesContext from "../ammo/favorites-context";
import ProductsList from "../products/ProductsList";
import { Container, Row } from "react-bootstrap";
const FavoritesPage = () => {

  const favContext = useContext(FavoritesContext);
  console.log('FavoritesContext: ', FavoritesContext);
  console.log('favContext.favorites: ', favContext.favorites);
  console.log('favContext.total: ', favContext.total);

  let content = <p style={{'textAlign': 'center'}}>There is no Favorites Products, you can add one to your favorites by clicking on <b>'To Favorites'</b> on <b>Products</b> Page.</p>;

  if(favContext.total > 0){
    content  = <ProductsList list={favContext.favorites} />
  }

  return (
  <section>
    <Container>
      <Row>
      <h2 style={{ paddingTop: '15px'}}>My Favorites</h2>
      </Row>
      <Row style={{ marginTop: '15px'}}>
        {content}
      </Row>
    </Container>
    </section>);
};

export default FavoritesPage;
