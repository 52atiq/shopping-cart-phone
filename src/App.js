import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
// import Product from './components/product';
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Loading from "./components/Loading";

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All')
  const [activePrice, setActivePrice] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        const data = await fetch("https://phones-dev.herokuapp.com/api/phones");
        // const url = 'data.json'
        // const data = await fetch(data);
        const products = await data.json();
        setProducts(products.data);
        setFilters(products.data);
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
      }
    };
    fetchProducts();
  }, []);
  console.log(products);
  // handle add to cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);
      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      // Firt
      return [...prev, { ...product, amount: 1 }];
    });
  };

  //handle remove from cart
  const handleRemoveFromCart = id =>{
      setCart(prev =>{
        return prev.reduce((cal,item) => {
          if(item.id === id){
            if(item.amount === 1) return cal;
            return [...cal, {...item, amount:item.amount - 1}]
          }
          return [...cal, {...item}];
        }, [])
      })
  }

  return (
    <div className="">
      <div>
        <Header cart={cart} setIsShowCart={setIsShowCart} />
      </div>
     <div className="container mx-auto">
     <Filter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory} 
        activePrice={activePrice}
        setActivePrice={setActivePrice}
        products={products}
        setFilters={setFilters}
      />
     </div>
      <div className="flex flex-wrap my-4 container mx-auto">
      
        {/* {products.map((product) => ( */}
        {filters.map((product) => (
          <SingleProduct
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
         />
           
        
        ))}
      </div>
      {isShowCart && <Cart
       cart={cart} 
       handleRemoveFromCart={handleRemoveFromCart}
       handleAddToCart={handleAddToCart}
       setIsShowCart={setIsShowCart} 
       />}
         {isLoading && (
          <div className="flex items-center justify-center">
            <Loading /> </div>
         )}
    </div>
  );
}

export default App;
