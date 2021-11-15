import { Button, Card } from "react-bootstrap";

// const cardStyle = {"max-width": "540px;"}

const ProductItem = ({ product }) => {
  return (
    <Card className="card-product" key={product.id} >
      <Card.Img
        variant="top"
        src={"./images/" + product.image + ".jpg"}
        alt={product.title}
        rounded="true"
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">to Favorites</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
