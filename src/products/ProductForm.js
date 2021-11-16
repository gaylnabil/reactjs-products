
import  Button from 'react-bootstrap/Button'
import  Card from 'react-bootstrap/Card'
import { useRef } from 'react';


const ProductForm = ({onAddProduct})=>{

    const UUID = require('uuid-int');
    const uuidInt = () =>{
        // number  0 <= id <=511
        const min = 0;
        const max = 511
        const id = Math.floor(Math.random() * (max - min) + min);
        const generator = UUID(id);
        return generator.uuid();
    }

    const titleInput = useRef();
    const imageInput = useRef();
    const descInput = useRef();
    const rateInput = useRef();
    const priceInput = useRef();
    const stockInput = useRef();
    const slugInput = useRef();
    const onsaleInput = useRef();
    const categoryInput = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();

        const title = titleInput.current.value;
        const image = imageInput.current.value;
        const description = descInput.current.value;
        const rate = rateInput.current.value;
        const price = priceInput.current.value;
        const stock = stockInput.current.value;
        const slug = slugInput.current.value;
        const onsale = onsaleInput.current.value;
        
        const category = categoryInput.current.value;

        const productData = {
            id: uuidInt(),
            title: title,
            image: image,
            description: description,
            rate: rate,
            price: price,
            stock: stock,
            slug: slug,
            onsale: onsale,
            category: category,
        }
        console.log(productData);
        
        onAddProduct(productData);
    }

    return (
      <Card style={{width: '70%'}}>
        <form onSubmit={submitHandler} style={{padding: '5px 10px'}}>
          <div className="form-group mt-1">
            <label htmlFor="title">Title</label>
            <input
              className="form-control" ref={titleInput} type="text" name="title" id="title" required />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="image">URL Image</label>
            <input
              className="form-control" type="text" ref={imageInput} name="image" id="image" required />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" rows="5" ref={descInput} name="description" id="description" required />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="rating">Rate</label>
            <input className="form-control" type="number" ref={rateInput} step="0.5" name="rating" id="rating" min="0" max="5" />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="price">Price</label>
            <div className="input-group mb-3">
                <span className="input-group-text">MAD</span>
                <input name="price" id="price" ref={priceInput} type="number" step="0.5" className="form-control" />
                
            </div>
          </div>

          <div className="form-group mt-2">
            <label htmlFor="stock">Stock</label>
            <input className="form-control" type="number" ref={stockInput} step="1" name="stock" id="stock" min="0" max="1000" />
          </div>

          <div className="form-group mt-1">
            <label htmlFor="slug">Slug</label>
            <input className="form-control" ref={slugInput} type="text" name="slug" id="slug" required />
          </div>

          <div className="form-check mt-2">
            <label className="form-check-label" htmlFor="onsale">
                On Sale
            </label>
            <input className="form-check-input" ref={onsaleInput} type="checkbox"name="onsale" id="onsale" />
          </div>

          <div className="form-group mt-1">
            <label htmlFor="category">Category</label>
            <select className="form-select" defaultValue={'1'} ref={categoryInput} aria-label="Default select example" id="category" name="category">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
          </div>

          <div className="form-group mt-3">
           <Button className="float-end" type="submit">Add</Button>
          </div>
          
        </form>
      </Card>
    );
}

// {
//     id: 4,
//     image: "Nikon_D60.jpg",
//     title: "Nikon D60 Digital SLR Camera - Black",
//     rating: 4.9,
//     price: 259.99,
//     description: [
//       "- This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.",
//       "- No signs of cosmetic damage (scratches, dents, etc.) will be visible when the product is held 30 centimeters away.",
//       "- Products with batteries will exceed 80% capacity relative to new.",
//       "- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.",
//     ],
//     stock: 150,
//     slug: "Nikon_D60",
//     onSales: true,
//     category: 12,
//   },

export default ProductForm;