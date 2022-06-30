import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("product",json)
        setProduct(json);
      });
  });

  const addToCart = (product) => {
    console.log("sssssssss",product)

    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    products.push({'id': params.id,'image': product.image,'price': product.price,'title': product.title});
    localStorage.setItem('products', JSON.stringify(products));

    // alert("hii")
    navigate({ pathname: "/cart/" })
    
  }


  
  return (
    <div>
      <header class="shadow-sm relative">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="py-3 flex items-center">
            <div class="">
              <a href="https://tailwind-ecommerce.com">
                <img src="../images/logo.svg" height="38" />
              </a>
            </div>

            <div class="flex items-center justify-end flex-1">
              <a
                href="/"
                class="inline-flex ml-1 px-4 py-2 text-gray-700 bg-white shadow-sm border border-gray-300 rounded-md hover:text-gray-900 hover:border-gray-400"
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </header>

      <section class="bg-gray-50 py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
          {/*<!-- card -->*/}
          <div class="bg-white border border-gray-200 shadow-sm rounded mb-5 p-4 lg:p-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <aside>
                <div class="border border-gray-200 p-3 text-center rounded mb-5">
                  <img
                    class="object-cover inline-block"
                    width="480"
                    src={product.image}
                    alt="Product title"
                  />
                </div>

                <div class="space-x-2 overflow-auto text-center whitespace-nowrap">
                  <a
                    href="#"
                    class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                  >
                    <img
                      class="w-14 h-14"
                      src="../images/items/detail/thumb.jpg"
                      alt="Product title"
                    />
                  </a>
                  <a
                    href="#"
                    class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 "
                  >
                    <img
                      class="w-14 h-14 object-cover"
                      src="../images/items/detail/thumb1.jpg"
                      alt="Product title"
                    />
                  </a>
                  <a
                    href="#"
                    class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                  >
                    <img
                      class="w-14 h-14 object-cover"
                      src="../images/items/detail/thumb2.jpg"
                      alt="Product title"
                    />
                  </a>
                  <a
                    href="#"
                    class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                  >
                    <img
                      class="w-14 h-14 object-cover"
                      src="../images/items/detail/thumb3.jpg"
                      alt="Product title"
                    />
                  </a>
                  <a
                    href="#"
                    class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500"
                  >
                    <img
                      class="w-14 h-14 object-cover"
                      src="../images/items/detail/thumb4.jpg"
                      alt="Product title"
                    />
                  </a>
                </div>
              </aside>
              <main>
                <h2 class="font-semibold text-2xl mb-4">{product.title}</h2>

                <div class="flex flex-wrap items-center space-x-2 mb-2">
                  <img
                    class="d-inline-block h-4"
                    src="../images/misc/stars-active.svg"
                    alt="Rating"
                  />
                  <span class="text-yellow-500">{product.rating? product.rating.rate:0} ({product.rating? product.rating.count:null})</span>

                  <svg
                    width="6px"
                    height="6px"
                    viewbox="0 0 6 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                  </svg>

                  <span class="text-gray-400">
                    <i class="fa fa-shopping-bag mr-2"></i>154 orders
                  </span>

                  <svg
                    width="6px"
                    height="6px"
                    viewbox="0 0 6 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                  </svg>

                  <span class="text-green-500">Verified</span>
                </div>

                <p class="mb-4 font-semibold text-xl">
                  &#8377; {product.price}
                  <span class="text-base font-normal">/1 box</span>
                </p>

                <p class="mb-4 text-gray-500">
                  {product.description}
                </p>

                <ul class="mb-5">
                  <li class="mb-1">
                    {" "}
                    <b class="font-medium w-36 inline-block">Model#:</b>
                    <span class="text-gray-500">Odsy-1000</span>
                  </li>
                  <li class="mb-1">
                    {" "}
                    <b class="font-medium w-36 inline-block">Color:</b>
                    <span class="text-gray-500">Brown</span>
                  </li>
                  <li class="mb-1">
                    {" "}
                    <b class="font-medium w-36 inline-block">Delivery:</b>
                    <span class="text-gray-500">Russia, USA & Europe</span>
                  </li>
                  <li class="mb-1">
                    {" "}
                    <b class="font-medium w-36 inline-block">Color:</b>
                    <span class="text-gray-500">Brown</span>
                  </li>
                </ul>

                <div class="flex flex-col lg:flex-row mb-4">
                  {/*<!-- select-custom -->*/}
                  <div class="relative mr-5 mb-4">
                    <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                      <option>Select size</option>
                      <option>Extra large</option>
                      <option>Medium size</option>
                      <option>Normal size</option>
                    </select>
                    <i class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        width="20"
                        height="20"
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                      </svg>
                    </i>
                  </div>
                  {/*<!-- select-custom .end  -->*/}

                  {/*<!-- check-radios  -->*/}
                  <div class="flex items-center mb-4">
                    <label class="flex items-center mr-5 cursor-pointer">
                      <input
                        name="color"
                        type="radio"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      />
                      <span class="ml-2"> Red </span>
                    </label>
                    <label class="flex items-center mr-5 cursor-pointer">
                      <input
                        name="color"
                        type="radio"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      />
                      <span class="ml-2"> Green </span>
                    </label>
                    <label class="flex items-center mr-5 cursor-pointer">
                      <input
                        name="color"
                        type="radio"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                      />
                      <span class="ml-2"> Blue </span>
                    </label>
                  </div>
                  {/*<!-- check-radios .end  -->*/}
                </div>
                {/*<!-- action buttons -->*/}
                <div class="flex flex-wrap gap-3">
                  <a
                    class="px-4 py-2 inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600"
                    href="#"
                  >
                    Buy now
                  </a>

                  <div 
                    class="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
                  >
                    <i class="fa fa-shopping-cart mr-2"></i>
                    Add to cart
                  </div>

                  <a
                    class="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                    href="#"
                  >
                    <i class="fa fa-heart mr-2"></i>
                    Save for later
                  </a>
                </div>
                {/*<!-- action buttons end -->*/}
              </main>
            </div>
            {/*<!-- grid // -->*/}
          </div>
          {/*<!-- card // -->*/}
        </div>
        {/*<!-- container // -->*/}
      </section>

      <footer class="py-6 bg-gray-200">
        <p class="text-center">
          <a href="https://tailwind-ecommerce.com">Tailwind ecommerce</a>
        </p>
      </footer>
    </div>
  );
};
