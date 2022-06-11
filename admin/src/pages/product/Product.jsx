import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const history = useHistory()
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const product = useSelector((state)=>state.product.products.find((product)=> product._id === id))
    const dispatch = useDispatch()
    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };

    const handleCat = (e) => {
      setCat(e.target.value.split(","));
    };

    const handleClick = (e) => {
      e.preventDefault();
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const updatedproduct = { ...inputs, img: downloadURL, categories: cat };
            updateProduct(id, updatedproduct, dispatch);
            history.push("/products")
          });
        }
      );
    };
  
  
  
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock ? "true" : "false"}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input 
            type="text" 
            placeholder={product.title} 
            onChange={handleChange} 
            name="title"
            />
            <label>Product Description</label>
            <input 
            type="text" 
            placeholder={product.desc} 
            onChange={handleChange} 
            name="desc"
            />
            <label>Price</label>
            <input 
            type="text" 
            placeholder={product.price} 
            onChange={handleChange} 
            name="price"
            />
            <label>Categories</label>
            <input 
            type="text" 
            placeholder="jeans,skirts" 
            onChange={handleCat} 
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>              
          <div className="productFormRight">
            <div className="productUpload">
                <img src={product.img} alt="" className="productUploadImg" />
                <label for="file">
                    <Publish/>
                </label>
                <input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <button onClick={handleClick} className="productButton">Update</button>
          </div>
          </form>
      </div>
    </div>
  );
}
