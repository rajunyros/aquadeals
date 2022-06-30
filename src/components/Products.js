import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";

export const Products = () => {
  const [allproducts, setallProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setallProducts(json);
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
    console.log("sssssssss",product)

    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'id': product.id,'image': product.image,'price': product.price,'title': product.title});
    localStorage.setItem('products', JSON.stringify(products));

    // alert("hii")
    navigate({ pathname: "/cart/" })
    
  }

  const list_products = products.map((p, index) => {
    return (
      <div
        key={index}
        
      >
        {/*<!-- COMPONENT: PRODUCT CARD -->*/}
        <article class="shadow-sm rounded bg-white border border-gray-200">
            <img
              src={p.image}
              class="mx-auto w-auto h-64"
              alt="Product title here"
              onClick={() => navigate({ pathname: "/products/" + p.id })}
            />
          <div class="p-4 border-t border-t-gray-200">
            <p class="font-semibold">&#8377; {p.price}</p>
            <a
              href="#"
              class="block text-gray-600 mb-3 hover:text-blue-500 truncate"
            >
              {p.title}
            </a>
            <div class="flex space-x-5">
              <div
                              onClick={() => addToCart(p)}
                class="px-4 py-2 inline-block text-white text-center bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              >
                Add to cart
              </div>
              <a
                class="px-3 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                href="#"
              >
                <i class="fa fa-heart"></i>
              </a>
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
              <a href="#">
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
                href="#"
              >
                <i class="text-gray-400 w-5 fa fa-heart"></i>
                <span class="hidden lg:inline ml-1">Wishlist</span>
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

      {/* <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
						  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
						    <button
						      type="button"
						      data-bs-target="#carouselExampleIndicators"
						      data-bs-slide-to="0"
						      class="active"
						      aria-current="true"
						      aria-label="Slide 1"
						    ></button>
						    <button
						      type="button"
						      data-bs-target="#carouselExampleIndicators"
						      data-bs-slide-to="1"
						      aria-label="Slide 2"
						    ></button>
						    <button
						      type="button"
						      data-bs-target="#carouselExampleIndicators"
						      data-bs-slide-to="2"
						      aria-label="Slide 3"
						    ></button>
						  </div>
						  <div class="carousel-inner relative w-full overflow-hidden">
						    <div class="carousel-item active float-left w-full">
						      <img
						        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
						        class="block w-full"
						        alt="Wild Landscape"
						      />
						    </div>
						    <div class="carousel-item float-left w-full">
						      <img
						        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
						        class="block w-full"
						        alt="Camera"
						      />
						    </div>
						    <div class="carousel-item float-left w-full">
						      <img
						        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
						        class="block w-full"
						        alt="Exotic Fruits"
						      />
						    </div>
						  </div>
						  <button
						    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
						    type="button"
						    data-bs-target="#carouselExampleIndicators"
						    data-bs-slide="prev"
						  >
						    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
						    <span class="visually-hidden">Previous</span>
						  </button>
						  <button
						    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
						    type="button"
						    data-bs-target="#carouselExampleIndicators"
						    data-bs-slide="next"
						  >
						    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
						    <span class="visually-hidden">Next</span>
						  </button>
						</div>*/}
    </div>
  );
};
