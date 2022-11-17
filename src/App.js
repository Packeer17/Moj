import "./App.scss";
import "antd/dist/antd.css";
// import GridView from "./GridView";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import BuyIcon from "./components/BuyIcon/BuyIcon";
import { Badge, Spin } from "antd";
import { db } from "./firebase/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [advertiserDetails, setAdvertiserDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState([]);
  const [route, setRoute] = useState("/");

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let businessParams = params.get("business");
    getBusinessDetails(businessParams);
  }, []);

  const getBusinessDetails = (businessName) => {
    setIsFetching(true);
    const query = ref(db, `Stores/${businessName}`);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setAdvertiserDetails(data);
      } else {
        setAdvertiserDetails([]);
      }
      setIsFetching(false);
    });
  };

  const onAddProduct = (index) => {
    setSelectedProductIndex([...selectedProductIndex, index]);
  };

  const onRemoveProduct = (index) => {
    if (selectedProductIndex.includes(index)) {
      setSelectedProductIndex(
        selectedProductIndex.filter((el) => el !== index)
      );
    }
  };

  const goToCart=()=>{
	setRoute("CART")
  } 

  return (
    <div className="app">
      <header className="bg-[white] p-4 flex items-center ">
        <div className="flex items-center" onClick={()=>setRoute("/")}>
          <div >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABjFBMVEUAAAD/wQD/zgD+twD/vQD+ngD+owD+wgD+twD+pgD+nAD+3gD+ogD+qAD+6wD+nQD+4AD+yAD+sgD+oQD+4gD+oQD+qwD+5AD+vAD+rQD+5gD+nwD+7AD+nAD+xQD+vwD+mwD+7gD/rgD/ngD/6gD/nQD/ywD/nAD/7gD/mwD+1gD+1gD+1AD+qQD+1AD+qQD+0gD+0gD+7wD+0AD+zwD/6AD/zQD/6AD/zQD/sAD/sAAAAAD+2wD+oAD+pgD+owD+vQD+tQD+sgD+rwD+ngD+xwD+ugD+wQD+rAD+0wD+4QD+qQD+5QD+zAD+ygD+xAD+3QD+2AD+1wD+0AD+zgD+twD+7AD+6QAaEwCAagAaEQD4qgC+nQC1kwCqgwBTPAD4sADioAC+lgDAkQC5egD4pQDYlAC5fgCLaAB8UwDhvwDYqgDHqADgpQDYowDYnQDgkgCLawB8VQAOCgDpuQDYsgDYrwDpqgDupgDrmwDYmQChiQCVgACtcgCObwCEagB5YABuTABfQwAtIQAItyHsAAAAO3RSTlMABAiQJb/9+/v7+/X18Ozr6enp6dfXwr67npyclJSSjo2Mb283NzUmJQjx79/f3d3Dwb2fnXBwbm42NN3uY88AAAHHSURBVDjLddB1VwJBFAXwt4Td3d3dNbAYqOiaWFiY2ErZHV/cN4+ZXQ4H7r/3d3bnXRBRmkYGerva3TZbek5BcdlwgwLRsVTlLi2ur83NuVdttpX5+YWFrayKFr02VScvT0/His3NWpPoS8ZnZ+OKvogwz4wnErX0/5QZKe6/tinvuuDvME9sSPHJRK6kqMD78iZ0EWTf+zw3xi0KjE1O6iLIvLHvaIC6KUNcMG/sSwehdMoQHAhx9bZKogyKXIZAIK598LAb+kYxdLtQPP8e8Pwxb2SPRw9je/SXAsjUUJwzkRPa49rDENA7ciBVQ3HOfo4wt090LfYc0EvTQVU1DUHIuOUOewIkIImLUxbSX8p7ApFrIcOhqggu5S1+0bNj2sMN+Q4UCMS1/h0mAe3RBoV2FByQeMVeAlqsA6x2FAHPh8bFGfUC0GI9UG7ngm5xUa9PQpv2Q73TKQX1BqBNh6CRAxIv1BuAVm8CJVuKQDi6D9/y1XMVgEqnFA6fz7fLc4jZoNWrAKA5DYV8B91irJ5sAUwNgbiiGnharYlEiQkioiYtnkgxU09prsyOfUee2QLRURrry62F+RlJampmZ1Fp3agiin+asva6zLtpCgAAAABJRU5ErkJggg==" />
          </div>
          <div className="ml-1">Shop</div>
        </div>
        <div className="ml-auto" onClick={goToCart}>
          <Badge count={selectedProductIndex.length}>
            <BuyIcon />
          </Badge>
        </div>
      </header>
      <div className="app-body">
        {route === "/" && (
          <>
            {isFetching && <Spin />}
            {!isFetching && (
			<>
			  <Details advertiserDetails={advertiserDetails}></Details>
              <Products
                products={advertiserDetails?.products || []}
                selectedProductIndex={selectedProductIndex}
                onAddProduct={onAddProduct}
                onRemoveProduct={onRemoveProduct}
              />
			  </>
            )}
          </>
        )}
        {route === "CART" && <Cart  onRemoveProduct={onRemoveProduct} advertiserDetails={advertiserDetails} products={advertiserDetails?.products} selectedProductIndex={selectedProductIndex}/>}
      </div>
    </div>
  );
}

export default App;
