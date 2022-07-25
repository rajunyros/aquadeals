import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";

export const Products = () => {
  const [allproducts, setallProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [wcount, setWcount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("wishlist")) {
      const w_count = JSON.parse(localStorage.getItem("wishlist")).length;
      setWcount(w_count);
    }

    
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setProducts(json);
    //     setallProducts(json);
    //   });



     fetch("https://62b9503141bf319d22798e67.mockapi.io/products",{
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin':'*'
  }}
  )
      .then((res) => res.json())
      .then((json) => {
        console.log("Shopify",json[0].products)
         setProducts(json[0].products);
        setallProducts(json[0].products);
      });

  }, []);

  const productSearch = (event) => {
    let query = event.toLowerCase();
    let result = [];
    result = allproducts.filter((item) => {
      return (
        item.title.toString().toLowerCase().indexOf(query) >= 0 ||
        item.price.toString().toLowerCase().indexOf(query) >= 0
      );
    });
    setProducts(result);
  };

  const addToCart = (product) => {
    let products = [];
    if (localStorage.getItem("cart")) {
      products = JSON.parse(localStorage.getItem("cart"));
    }

    const ProductExist = products.find((item) => item.id === product.id);

    if (ProductExist) {
      ProductExist.quantity += 1;
    } else {
      products.push({
        id: product.id,
        image: product.images[0].src,
        price: product.variants[0].price,
        title: product.title,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(products));
    navigate({ pathname: "/cart/" });
  };

  const addToWList = (product) => {
    let products = [];
    if (localStorage.getItem("wishlist")) {
      products = JSON.parse(localStorage.getItem("wishlist"));
    }

    const ProductExist = products.find((item) => item.id === product.id);

    if (!ProductExist) {
      products.push({
        id: product.id,
        image: product.images[0].src,
        price: product.variants[0].price,
        title: product.title,
        quantity: 1,
      });
    }
    // else {

    // }

    localStorage.setItem("wishlist", JSON.stringify(products));
    navigate({ pathname: "/wishlist/" });
  };

  const list_products = products.map((p, index) => {
    return (
      <div key={index}>
        {/*<!-- COMPONENT: PRODUCT CARD -->*/}
        <article class="shadow-sm rounded bg-white border border-gray-200">
          <img
            src={p.images[0].src}
            class="mx-auto w-auto h-64"
            alt="Product title here"
            onClick={() => navigate({ pathname: "/products/" + p.id })}
          />
          <div class="p-4 border-t border-t-gray-200">
            <p class="font-semibold">&#8377; {p.variants[0].price}</p>
            <a
              href="#"
              class="block text-gray-600 mb-3 hover:text-blue-500 truncate"
            >
              {p.title}
            </a>
            <div class="flex space-x-5">
              <span
                onClick={() => addToCart(p)}
                class="cursor-pointer  px-4 py-2 inline-block text-white text-center bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                Add to cart
              </span>
              <span
                onClick={() => addToWList(p)}
                class="cursor-pointer px-3 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                <i class="fa fa-heart"></i>
              </span>
            </div>
          </div>
        </article>
        {/*<!-- COMPONENT: PRODUCT CARD END -->*/}
      </div>
    );
  });

  return (
    <div>
      {/*<!--  COMPONENT: HEADER -->*/}
      <header class="bg-white py-3 border-b">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-wrap items-center">
            {/*<!-- Brand -->*/}
            <div class="flex-shrink-0 mr-5">
              <a href="/">
                {" "}
                <img src="images/logo.svg" height="38" alt="Brand" />{" "}
              </a>
            </div>
            {/*<!-- Brand end -->*/}

            {/*<!-- Search -->*/}
            <div class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
              <input
                onChange={(e) => {
                  productSearch(e.target.value);
                }}
                class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                type="text"
                placeholder="Search"
              />
              <button
                type="button"
                class="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
            {/*<!-- Search end -->*/}

            {/*<!-- Actions -->*/}
            <div class="flex items-center space-x-2 ml-auto">
              <a
                class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="#"
              >
                <i class="text-gray-400 w-5 fa fa-user"></i>
                <span class="hidden lg:inline ml-1">Sign in</span>
              </a>

              <a
                class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="\wishlist"
              >
                <i class="text-gray-400 w-5 fa fa-heart"></i>
                <span class="block relative hidden lg:inline ml-1">

                  Wishlist{wcount != 0 ? wcount : null}
                </span>


              </a>

              <a
                class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="\cart"
              >
                <i class="text-gray-400 w-5 fa fa-shopping-cart"></i>
                <span class="hidden lg:inline ml-1">My cart</span>
              </a>
            </div>
            {/*<!-- Actions end -->*/}

            {/*<!-- mobile-only -->*/}
            <div class="lg:hidden ml-2">
              <button
                type="button"
                class="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
              >
                <span class="sr-only">Open menu</span>
                <i class="fa fa-bars fa-lg"></i>
              </button>
            </div>
            {/*<!-- mobile-only //end  -->*/}
          </div>
          {/*<!-- flex grid //end -->*/}
        </div>
        {/*<!-- container //end -->*/}
      </header>
      <nav class="relative shadow-sm">
        <div class="container max-w-screen-xl mx-auto px-4">
          {/*<!-- Bottom -->*/}
          <div class="hidden lg:flex flex-1 items-center py-1">
            <a class="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              {" "}
              Category{" "}
            </a>
            <a class="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              {" "}
              About{" "}
            </a>
            <a class="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              {" "}
              Services{" "}
            </a>
            <a class="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              {" "}
              Projects{" "}
            </a>
            <a class="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              {" "}
              Offers{" "}
            </a>
            <a class="px-3 py-2 rounded-md hover:bg-gray-100" href="#">
              {" "}
              Others{" "}
            </a>
          </div>
          {/*<!-- Bottom //end -->*/}
        </div>
        {/*<!-- container //end -->*/}
      </nav>
      {/*<!--  COMPONENT: HEADER //END -->*/}
      {/*<!--  INTRO SECTION  -->*/}
      <section class="bg bg-blue-500">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="pl-5 py-10 sm:py-20">
            <article class="my-10">
              <h1 class="text-3xl md:text-5xl text-white font-bold">
                Best products &amp; <br />
                brands in our store
              </h1>
              <p class="text-lg text-white font-normal mt-4 mb-6">
                Trendy Products, Factory Prices, Excellent Service
              </p>
              <div>
                <a
                  class="px-4 py-2 inline-block font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600"
                  href="#"
                >
                  Discover
                </a>
                <a
                  class="px-4 py-2 inline-block font-semibold text-blue-600 border border-transparent rounded-md hover:bg-gray-100 bg-white"
                  href="#"
                >
                  Learn more
                </a>
              </div>
            </article>
          </div>
        </div>
        {/*<!-- container end -->*/}
      </section>
      {/*<!--  INTRO SECTION END -->*/}

      {/*<!-- SECTION-CONTENT -->*/}
      <section class="bg-gray-100 py-12">
        <div class="container max-w-screen-xl mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">New products</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {list_products}
          </div>
        </div>
      </section>
    </div>
  );
};
