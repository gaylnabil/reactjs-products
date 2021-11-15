// import { CardGroup, Row, Col } from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductItem from "./ProductItem";

const ProductsList = ({ list }) => {
  return (
    <Row key={1} xs={1} md={2} lg={3} xl={4} className="g-1" style={{ background: "transparent" }}>
      {list.map((prod) => {
        return (
          <Col key={prod.id}>
            <ProductItem key={prod.id} product={prod} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductsList;
