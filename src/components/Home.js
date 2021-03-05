import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-container-img"
          src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZTgxNjE2MzAt/ZTgxNjE2MzAt-NmMyYzMyOGEt-w1500._CB660022759_.jpg"
          alt="home-container-img"
        />
        <div className="home-row">
          <Product
            title="The lean starup"
            price={29.99}
            image="https://play-lh.googleusercontent.com/VUJ-ENDVVS_8IhabKfewbXZ6f4_t0a4AbZZ2GURq55gTfZEWeBcxFkYQQ6sCQ-UWuI8adABab7SYQg=s200"
            rating={5}
          />
          <Product
            title="COSORI 1.7L Glass Electric Kettle, Cordless BPA Free Hot Water Boiler"
            price={42.49}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4trsvic4KAPfDC-oOwYRtq4lnisK7SDILWYy58MIgw3uHbolzaRCNHeBJ60p8zHpIqN1EAY&usqp=CAc"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            title="COSORI 1.7L Glass Electric Kettle, Cordless BPA Free Hot Water Boiler"
            price={42.49}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4trsvic4KAPfDC-oOwYRtq4lnisK7SDILWYy58MIgw3uHbolzaRCNHeBJ60p8zHpIqN1EAY&usqp=CAc"
            rating={5}
          />
          <Product
            title="COSORI 1.7L Glass Electric Kettle, Cordless BPA Free Hot Water Boiler"
            price={42.49}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4trsvic4KAPfDC-oOwYRtq4lnisK7SDILWYy58MIgw3uHbolzaRCNHeBJ60p8zHpIqN1EAY&usqp=CAc"
            rating={5}
          />
          <Product
            title="COSORI 1.7L Glass Electric Kettle, Cordless BPA Free Hot Water Boiler"
            price={42.49}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4trsvic4KAPfDC-oOwYRtq4lnisK7SDILWYy58MIgw3uHbolzaRCNHeBJ60p8zHpIqN1EAY&usqp=CAc"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            title="COSORI 1.7L Glass Electric Kettle, Cordless BPA Free Hot Water Boiler"
            price={42.49}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4trsvic4KAPfDC-oOwYRtq4lnisK7SDILWYy58MIgw3uHbolzaRCNHeBJ60p8zHpIqN1EAY&usqp=CAc"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
