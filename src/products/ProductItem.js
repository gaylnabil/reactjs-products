import { Button, Card } from "react-bootstrap";

// const cardStyle = {"max-width": "540px;"}

const ProductItem = ({ product }) => {
  return (
    <Card style={{ width: '20rem', 'padding': '5px' }}>
    <Card.Img variant="top" src={'./images/' + product.image} alt={product.title} rounded  />
    <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            {product.description}
        </Card.Text>
        <Button variant="primary">to Favorites</Button>
    </Card.Body>
    </Card>
  );
};

export default ProductItem;
