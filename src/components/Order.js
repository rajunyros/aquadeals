import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wcount, setWcount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("wishlist")) {
      const w_count = JSON.parse(localStorage.getItem("wishlist")).length;
      setWcount(w_count);
    }

    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      setCartItems(cart);
    }
  }, []);

  const removeProduct = (_product) => {
    let productId = _product.id;
    let storageProducts = JSON.parse(localStorage.getItem("cart"));
    let products = storageProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("cart", JSON.stringify(products));
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCartItems(cart);
  };

  const totalPrice = () => {
    const countTotal = (items) =>
      items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    console.log(countTotal(cartItems));
  };

  const incrementCount = (item, index) => {
    const items = [...cartItems];
    item.quantity += 1;
    items.splice(index, 1, item);
    localStorage.setItem("products", JSON.stringify(items));
    setCartItems(items);
    console.log("cartItems", cartItems);
  };

  const decrementCount = (item, index) => {
    const items = [...cartItems];
    if (item.quantity > 1) {
      item.quantity -= 1;
      items.splice(index, 1, item);
      localStorage.setItem("products", JSON.stringify(items));
      setCartItems(items);
      console.log("cartItems", cartItems);
    }
  };

  const addToWList = (product) => {
    let productId = product.id;
    let storageProducts = JSON.parse(localStorage.getItem("cart"));
    let products1 = storageProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("cart", JSON.stringify(products1));

    let products = [];
    if (localStorage.getItem("wishlist")) {
      products = JSON.parse(localStorage.getItem("wishlist"));
    }

    const ProductExist = products.find((item) => item.id === product.id);

    if (!ProductExist) {
      products.push({
        id: product.id,
        image: product.image,
        price: product.price,
        title: product.title,
        quantity: 1,
      });
    }
    // else {

    // }

    localStorage.setItem("wishlist", JSON.stringify(products));
    navigate({ pathname: "/wishlist/" });
  };

  const list_products = cartItems.map((p, index) => {
    return (
      <figure class="flex items-center mb-4 leading-5">
        <div>
          <div class="block relative w-20 h-20 rounded p-1 border border-gray-200">
            <img width="70" height="70" src={p.image} alt="Title" />
            <span class="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
              {" "}
              {p.quantity}{" "}
            </span>
          </div>
        </div>
        <figcaption class="ml-3">
          <p> {p.title} </p>
          <p class="mt-1 text-gray-400"> Total: Rs.{p.quantity * p.price} </p>
        </figcaption>
      </figure>
    );
  });

  return (
    <div>
      <header class="bg-white py-3 border-b">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="flex-shrink-0 mr-5">
              <a href="/">
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
                href="\wishlist"
              >
                <i class="text-gray-400 w-5 fa fa-heart"></i>
                <span class="hidden lg:inline ml-1">
                  Wishlist{wcount != 0 ? wcount : null}
                </span>
              </a>

              <a
                class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                href="/cart"
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
          <ol class="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
            <li class="inline-flex items-center">
              <a class="text-gray-600 hover:text-blue-600" href="/">
                Home
              </a>
              <i class="ml-3 text-gray-400 fa fa-chevron-right"></i>
            </li>
            <li class="inline-flex items-center" aria-current="page">
              <a class="text-gray-600 hover:text-blue-600" href="/cart">
                {" "}
                Cart{" "}
              </a>
              <i class="ml-3 text-gray-400  fa fa-chevron-right"></i>
            </li>
            <li class="inline-flex items-center"> Order </li>
          </ol>
        </div>
      </section>

      <section class="py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-4">
            <main class="md:w-2/3">
              <article class="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <div class="mb-4 lg:mb-0">
                    <h3 class="text-xl font-semibold">Have an account?</h3>
                    <p class="text-gray-600">
                      By creating account you will get more benefits
                    </p>
                  </div>
                  <div class="">
                    <a
                      class="px-4 py-2 inline-block text-blue-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                      href="#"
                    >
                      {" "}
                      Sign in{" "}
                    </a>

                    <a
                      class="px-4 py-2 inline-block text-white bg-blue-600 shadow-sm border border-transparent rounded-md hover:bg-blue-700"
                      href="#"
                    >
                      {" "}
                      Create account{" "}
                    </a>
                  </div>
                </div>
              </article>

              <article class="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                <h2 class="text-xl font-semibold mb-5">Guest checkout</h2>

                <div class="grid grid-cols-2 gap-x-3">
                  <div class="mb-4">
                    <label class="block mb-1"> First name </label>
                    <input
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="block mb-1"> Last name </label>
                    <input
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                </div>

                <div class="grid lg:grid-cols-2 gap-x-3">
                  <div class="mb-4">
                    <label class="block mb-1"> Phone </label>
                    <div class="flex  w-full">
                      <input
                        class="appearance-none w-24 border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                        type="text"
                        placeholder="Code"
                        value="+998"
                      />
                      <input
                        class="appearance-none flex-1 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
                        type="text"
                        placeholder="Type phone"
                      />
                    </div>
                  </div>

                  <div class="mb-4">
                    <label class="block mb-1"> Email </label>
                    <input
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="email"
                      placeholder="Type here"
                    />
                  </div>
                </div>

                <label class="flex items-center w-max my-4">
                  <input checked="" name="" type="checkbox" class="h-4 w-4" />
                  <span class="ml-2 inline-block text-gray-500">
                    {" "}
                    I agree with Terms and Conditions{" "}
                  </span>
                </label>

                <hr class="my-4" />

                <h2 class="text-xl font-semibold mb-5">Shipping information</h2>

                <div class="grid sm:grid-cols-3 gap-3 mb-6">
                  <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                    <span>
                      <input
                        name="shipping"
                        type="radio"
                        class="h-4 w-4 mt-1"
                      />
                    </span>
                    <p class="ml-2">
                      <span>Express delivery</span>
                      <small class="block text-sm text-gray-400">
                        3-4 days via Fedex
                      </small>
                    </p>
                  </label>
                  <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                    <span>
                      <input
                        name="shipping"
                        type="radio"
                        class="h-4 w-4 mt-1"
                      />
                    </span>
                    <p class="ml-2">
                      <span>Post office</span>
                      <small class="block text-sm text-gray-400">
                        20-30 days via post
                      </small>
                    </p>
                  </label>
                  <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                    <span>
                      <input
                        name="shipping"
                        type="radio"
                        class="h-4 w-4 mt-1"
                      />
                    </span>
                    <p class="ml-2">
                      <span>Self pick-up</span>
                      <small class="block text-sm text-gray-400">
                        Nearest location
                      </small>
                    </p>
                  </label>
                </div>

                <div class="grid md:grid-cols-3 gap-x-3">
                  <div class="mb-4 md:col-span-2">
                    <label class="block mb-1"> Address* </label>
                    <input
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>

                  <div class="mb-4 md:col-span-1">
                    <label class="block mb-1"> City* </label>
                    <div class="relative">
                      <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                        <option>Select here</option>
                        <option>Second option</option>
                        <option>Third option</option>
                      </select>
                      <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
                        <svg
                          width="22"
                          height="22"
                          class="fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>

                <div class="grid md:grid-cols-3 gap-x-3">
                  <div class="mb-4 md:col-span-1">
                    <label class="block mb-1"> House </label>
                    <input
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>

                  <div class="mb-4 md:col-span-1">
                    <label class="block mb-1"> Building </label>
                    <input
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>

                  <div class="mb-4 md:col-span-1">
                    <label class="block mb-1"> ZIP code </label>
                    <input
                      class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      placeholder="Type here"
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label class="block mb-1"> Other info </label>
                  <textarea
                    placeholder="Type your wishes"
                    class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  ></textarea>
                </div>

                <label class="flex items-center w-max my-4">
                  <input checked="" name="" type="checkbox" class="h-4 w-4" />
                  <span class="ml-2 inline-block text-gray-500">
                    {" "}
                    Save my information for future purchase{" "}
                  </span>
                </label>

                <div class="flex justify-end space-x-2">
                  <a
                    class="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                    href="#"
                  >
                    {" "}
                    Back{" "}
                  </a>
                  <a
                    class="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                    href="#"
                  >
                    {" "}
                    Continue{" "}
                  </a>
                </div>
              </article>
            </main>
            <aside class="md:w-1/3">
              <article class="text-gray-600">
                <h2 class="text-lg font-semibold mb-3">Summary</h2>

                <ul class="mb-5">
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>Total price:</span>
                    <span>Rs.
                      {Number(
                        cartItems.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                      ).toFixed(2)}
                    </span>
                  </li>
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>Discount:</span>
                    <span class="text-green-500">- 0.00</span>
                  </li>
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>TAX:</span>
                    <span>0.00</span>
                  </li>
                  <li class="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>Rs.
                      {Number(
                        cartItems.reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                      ).toFixed(2)}
                    </span>
                  </li>
                </ul>
                <hr class="my-4" />

                <div class="flex gap-3">
                  <input
                    class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button
                    type="button"
                    class="px-4 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                  >
                    {" "}
                    Apply{" "}
                  </button>
                </div>

                <hr class="my-4" />

                <h2 class="text-lg font-semibold mb-3">Items in cart</h2>

                {list_products}
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
