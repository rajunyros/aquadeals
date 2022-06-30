import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cart = () => {
  const [cartItems,setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('products'));
    setCartItems(cart)
    totalPrice();
  },[]);

  const removeProduct = (_product) => {
    console.log("Id",_product.id)
    // alert("Id",_product.id)
    let productId = _product.id;
    let storageProducts = JSON.parse(localStorage.getItem('products'));
    let products = storageProducts.filter(product => product.id !== productId );
    localStorage.setItem('products', JSON.stringify(products));
    const cart = JSON.parse(localStorage.getItem('products'));

    setCartItems(cart)
  }

  const totalPrice = () => {
    
    let total = 0;
    cartItems.map(({price}) => total = total + price)
         console.log("total",total)

    return toString(total);
  }


   const list_products = cartItems.map((p, index) => {
    return (
      <div>
        <div class="flex flex-wrap lg:flex-row gap-5  mb-4">
          <div class="w-full lg:w-2/5 xl:w-2/4">
            <figure class="flex leading-5">
              <div>
                <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                  <img src={p.image} alt="Title" />
                </div>
              </div>
              <figcaption class="ml-3">
                <p>
                  <a href="#" class="hover:text-blue-600">
                    {p.title}{" "}
                  </a>
                </p>
                {/*<p class="mt-1 text-gray-400"> Color: Yellow, Type: Jeans </p>*/}
              </figcaption>
            </figure>
          </div>
          <div class="">
            <div class="w-24 relative">
              <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg width="22" height="22" class="fill-current" viewBox="0 0 20 20">
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
          <div>
            <div class="leading-5">
              <p class="font-semibold not-italic">{p.price}</p>
            </div>
          </div>
          <div class="flex-auto">
            <div class="float-right">
              <a
                href="#"
                class="px-3 py-2 inline-block text-blue-600 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200"
              >
                {" "}
                <i class="fa fa-heart"></i>{" "}
              </a>
              <div
                class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                onClick={() => removeProduct(p)}
              >
                {" "}
                {p.id}Remove{" "}

              </div>
            </div>
          </div>
        </div>
        <hr class="my-4" />
      </div>
    );
  });
 
  return (
    <div>
      <header class="bg-white py-3 border-b">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="flex-shrink-0 mr-5">
              <a href="#">
                {" "}
                <img src="../images/logo.svg" height="38" alt="Brand" />{" "}
              </a>
            </div>

            <div class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
              <input
                class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                type="text"
                placeholder="Search"
              />
              <button
                type="button"
                class="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Search
              </button>
            </div>

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
                href="#"
              >
                <i class="text-gray-400 w-5 fa fa-shopping-cart"></i>
                <span class="hidden lg:inline ml-1">My cart</span>
              </a>
            </div>

            <div class="lg:hidden ml-2">
              <button
                type="button"
                class="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
              >
                <span class="sr-only">Open menu</span>
                <i class="fa fa-bars fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav>
        <div class="container max-w-screen-xl mx-auto px-4">
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
        </div>
      </nav>

      <section class="py-5 sm:py-7 bg-blue-100">
        <div class="container max-w-screen-xl mx-auto px-4">
          <h2 class="text-3xl font-semibold mb-2">Shopping cart</h2>
        </div>
      </section>

      <section class="py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-4">
            <main class="md:w-3/4">
              <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
              

               {list_products}

                <h6 class="font-bold">Free Delivery within 1-2 weeks</h6>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </article>
            </main>
            <aside class="md:w-1/4">
              <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul class="mb-5">
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>Total price:</span>
                    <span>{totalPrice}</span>
                  </li>
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>Discount:</span>
                    <span class="text-green-500">- $60.00</span>
                  </li>
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>TAX:</span>
                    <span>$14.00</span>
                  </li>
                  <li class="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>{totalPrice}</span>
                  </li>
                </ul>

                <a
                  class="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                  href="#"
                >
                  {" "}
                  Checkout{" "}
                </a>

                <a
                  class="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  href="#"
                >
                  {" "}
                  Back to shop{" "}
                </a>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
