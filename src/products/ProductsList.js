import { CardGroup, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductsList = ({ list }) => {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4" style={{ background: "transparent" }}>
      {list.map((prod) => {
        return (
          <Col>
            <ProductItem key={prod.id} product={prod} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductsList;
