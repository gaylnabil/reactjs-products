import { Row, Col } from "react-bootstrap";
import ProductForm from "../products/ProductForm";
import { useNavigate } from 'react-router-dom';

const NewProductPage = () => {

  const navigate = useNavigate();

  const addProductHandler = (productData) => {

    fetch(
        'https://react-products-2708c-default-rtdb.firebaseio.com/products.json',
        {
          method: 'POST',
          body: JSON.stringify(productData),
          headers: { 
            'Content-Type': 'application/json',
          }
        }
        
      ).then(()=>{
        navigate('/');
      });

  }
  return (
    <Row>
       <div >
       <div className="d-flex justify-content-center align-items-center">
         <h2>New Product</h2> 
        </div>
        <Col  className="d-flex justify-content-center align-items-center">
          <ProductForm onAddProduct={addProductHandler} />
       </Col>
       </div>
    </Row>
  );
};

export default NewProductPage;
