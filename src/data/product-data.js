import img1 from "../assets/images/shop/img_09.png";
import img2 from "../assets/images/shop/img_10.png";
import img3 from "../assets/images/shop/img_11.png";
import img4 from "../assets/images/shop/img_12.png";
import img5 from "../assets/images/shop/img_13.png";
import img6 from "../assets/images/shop/img_14.png";
import img7 from "../assets/images/shop/img_15.png";
import img8 from "../assets/images/shop/img_20.png";
import img9 from "../assets/images/shop/img_21.png";
import img10 from "../assets/images/shop/img_22.png";
import img11 from "../assets/images/shop/img_23.png";
import img12 from "../assets/images/shop/img_24.png";
import img13 from "../assets/images/shop/img_25.png";
import img14 from "../assets/images/shop/img_26.png";
import img15 from "../assets/images/shop/img_27.png";
import img16 from "../assets/images/shop/img_05.png";
import img17 from "../assets/images/shop/img_04.png";
import img18 from "../assets/images/shop/img_06.png";
import img19 from "../assets/images/shop/img_03.png";

const productData = [
  {
    id: 1,
    img: img1,
    title: "Quilted Gilet With Hood",
    trending:true,
    serial:new Date().getTime(),
    product_v1:true,
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 17.99,
  },
  {
    id: 2,
    img: img2,
    title: "Jogers with Black strip",
    trending:true,
    serial:new Date().getTime(),
    product_v1:true,
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 80.99,
  },
  {
    id: 3,
    img: img3,
    title: "Rolex Gold Watch",
    trending:true,
    serial:new Date().getTime(),
    product_v1:true,
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 217.99,
  },
  {
    id: 4,
    img: img4,
    title: "Men’s Nike T-Shirt",
    trending:true,
    serial:new Date().getTime(),
    product_v1:true,
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 23.99,
  },
  {
    id: 5,
    img: img1,
    title: "Quilted Gilet With Hood",
    trending:true,
    bestSelling:true,
    serial:new Date().getTime(),
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 17.99,
  },
// best selling
  {
    id: 6,
    img: img5,
    title: "Quilted Gilet With Hood",
    bestSelling:true,
    serial:new Date().getTime(),
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 17.99,
  },
  {
    id: 7,
    img: img6,
    title: "Jogers with Black strip",
    bestSelling:true,
    product_v1:true,
    tag: "OUT OF STOCK",
    tagClass: "tag-two",
    serial:new Date().getTime(),
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 80.99,
  },
  {
    id: 8,
    img: img7,
    title: "Rolex Gold Watch",
    bestSelling:true,
    serial:new Date().getTime(),
    ratings: (
      <>
        <ul className="style-none d-flex rating">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </ul>
      </>
    ),
    price: 217.99,
  },

  // product v4
  {
    id: 9,
    img: img8,
    title: "Quilted Gilet With Hood",
    price: 17.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 0,
  },
  {
    id: 10,
    img: img9,
    title: "Rolex Gold Watch",
    price: 217.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 100,
  },
  {
    id: 11,
    img: img10,
    title: "Men’s Nike T-Shirt",
    price: 23.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 200,
  },
  {
    id: 12,
    img: img11,
    title: "Quilted Gilet With Hood",
    price: 23.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 300,
  },
  {
    id: 13,
    img: img12,
    title: "Nike Gilet With Shoe",
    price: 120.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 0,
  },
  {
    id: 14,
    img: img13,
    title: "Quilted Gilet With Hood",
    price: 120.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 100,
  },
  {
    id: 15,
    img: img14,
    title: "Quilted Gilet With Hood",
    price: 17.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 200,
  },
  {
    id: 16,
    img: img15,
    title: "Quilted Gilet With Chair",
    price: 39.99,
    serial:new Date().getTime(),
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 300,
  },

  {
    id: 17,
    img: img16,
    tag: "",
    tagClass: "",
    product_v1:true,
    serial:new Date().getTime(),
    title: "Quilted Gilet With Chair",
    price: 39.99,
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 100,
  },
  {
    id: 18,
    img: img17,
    tag: "",
    tagClass: "",
    product_v1:true,
    serial:new Date().getTime(),
    title: "Quilted Gilet With Watch",
    price: 20.99,
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 200,
  },
  {
    id: 19,
    img: img18,
    tag: "New",
    tagClass: "tag-one",
    product_v1:true,
    serial:new Date().getTime(),
    title: "Nike Gilet With Shoe",
    price: 120.99,
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 100,
  },
  {
    id: 20,
    img: img19,
    tag: "",
    tagClass: "",
    product_v1:true,
    serial:new Date().getTime(),
    title: "Quilted Gilet With Hood",
    price: 120.99,
    ratings: (
      <>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star-fill"></i>
        </li>
        <li>
          <i className="bi bi-star"></i>
        </li>
      </>
    ),
    animationTime: 200,
  },
]

export default productData;