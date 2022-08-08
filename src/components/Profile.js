import React, { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import displayRazorpay from "./PaymentGateway";

export const Profile = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wcount, setWcount] = useState(null);
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [orders, setOrders] = useState([]);

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

    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    }
    if (localStorage.getItem("user_addresses")) {
      const userAddress = JSON.parse(localStorage.getItem("user_addresses"));
      setUserAddress(userAddress);
    }
    if (localStorage.getItem("orders")) {
      const orders = JSON.parse(localStorage.getItem("orders"));
      setOrders(orders);
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
    console.log("cartItems", item, index);

    const items = [...cartItems];
    item.quantity += 1;
    items.splice(index, 1, item);
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  const decrementCount = (item, index) => {
    const items = [...cartItems];
    if (item.quantity > 1) {
      item.quantity -= 1;
      items.splice(index, 1, item);
      localStorage.setItem("cart", JSON.stringify(items));
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
            <div class="flex justify-center w-1/5">
              <span onClick={() => decrementCount(p, index)}>
                {/*<span onClick={() => dispatch({ type: 'subtract',index:index,item:p})}>*/}{" "}
                <i class="fa fa-minus"></i>{" "}
              </span>

              <input
                class="mx-2 border text-center w-8"
                type="text"
                value={p.quantity}
              />

              <span onClick={() => incrementCount(p, index)}>
                {/*<span onClick={() => dispatch({ type: 'add',index:index,item:p})}>*/}{" "}
                <i class="fa fa-plus"></i>{" "}
              </span>
            </div>
          </div>
          <div>
            <div class="leading-5">
              <p class="font-semibold not-italic">
                Rs. {Number(p.quantity * p.price).toFixed(2)}
              </p>
            </div>
          </div>
          <div class="flex-auto">
            <div class="float-right">
              <span
                onClick={() => addToWList(p)}
                class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
              >
                {" "}
                WishList{" "}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span
                class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                onClick={() => removeProduct(p)}
              >
                {" "}
                Remove{" "}
              </span>
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
              <a class="text-gray-600 hover:text-blue-600" href="#">
                Home
              </a>
              <i class="ml-3 text-gray-400 fa fa-chevron-right"></i>
            </li>
            <li class="inline-flex items-center" aria-current="page">
              <a class="text-gray-600 hover:text-blue-600" href="#">
                {" "}
                Profile{" "}
              </a>
              <i class="ml-3 text-gray-400  fa fa-chevron-right"></i>
            </li>
            <li class="inline-flex items-center"> Orders </li>
          </ol>
        </div>
      </section>

      <section class="py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-col md:flex-row -mx-4">
            <aside class="md:w-1/3 lg:w-1/4 px-4">
              <ul>
                <li>
                  {" "}
                  <a
                    class="block px-3 py-2 text-blue-500 bg-gray-100 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="#"
                  >
                    Account main
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="#"
                  >
                    New orders
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="#"
                  >
                    Orders history
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="#"
                  >
                    My wishlist
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="#"
                  >
                    Transactions
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="#"
                  >
                    Profile setting
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="#"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </aside>
            <main class="md:w-2/3 lg:w-3/4 px-4">
              <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <figure class="flex items-start sm:items-center">
                  <img
                    class="w-16 rounded-full mr-4"
                    src="images/avatars/avatar3.jpg"
                    alt=""
                  />
                  <figcaption>
                    <h5 class="font-semibold text-lg">{user.user}</h5>
                    <p>
                      Email:{" "}
                      <a href="mailto:myusername@gmail.com">{user.email}</a> |
                      Phone: <a href="tel:+1234567890988">{user.mobile}</a>
                    </p>
                  </figcaption>
                </figure>

                <hr class="my-4" />

                <div class="sm:flex mb-5 gap-4">
                  {userAddress.map((a, idx) => (
                    <figure class="md:w-1/2 flex items-center relative bg-gray-100 p-4 rounded-md">
                      <div class="mr-3">
                        <span class="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow">
                          <i class="fa fa-map-marker-alt"></i>
                        </span>
                      </div>
                      <figcaption class="text-gray-600">
                        <p>
                          {" "}
                          {a.address}, D.no: {a.house},Building: {a.building},{" "}
                          <br /> {a.city}, {a.pincode}
                          {a.default ? (
                            <small class="text-gray-400">(Primary)</small>
                          ) : null}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <button class="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
                  <i class="mr-1 fa fa-plus"></i> Add new address
                </button>

                <hr class="my-4" />

                <h3 class="text-xl font-semibold mb-5">Current orders</h3>

                {orders.map((o, idx) => {
                  return (
                    <article class="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
                      <header class="lg:flex justify-between mb-4">
                        <div class="mb-4 lg:mb-0">
                          <p class="font-semibold">
                            <span>Order ID: {o.order_id} </span>
                            <span class="text-green-500"> • Confirmed </span>
                          </p>
                          <p class="text-gray-500"> Dec 29, Mon, 2018 </p>
                        </div>
                        <div>
                          <button class="px-3 py-1 inline-block text-sm text-red-500 border border-gray-300 rounded-md hover:text-red-500 hover:border-red-600">
                            Cancel order
                          </button>
                          <button class="px-3 py-1 inline-block text-white text-sm bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">
                            Track order
                          </button>
                        </div>
                      </header>
                      <div class="grid md:grid-cols-3 gap-2">
                        <div>
                          <p class="text-gray-400 mb-1">Person</p>
                          <ul class="text-gray-600">
                            <li>{user.user}</li>
                            <li>Phone: {user.mobile}</li>
                            <li>Email: {user.email}</li>
                          </ul>
                        </div>
                        <div>
                          <p class="text-gray-400 mb-1">Delivery address</p>


                          <ul class="text-gray-600">
                            <li>4715 Madisen Throughway</li>
                            <li>That street 053</li>
                            <li>Palo Alto, California</li>
                          </ul>
                        </div>
                        <div>
                          <p class="text-gray-400 mb-1">Payment</p>
                          <ul class="text-gray-600">
                            <li class="text-green-400">Visa card **** 4216</li>
                            <li>Shipping fee: $12.00</li>
                            <li>Total paid: $412.00</li>
                          </ul>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {o.products?.map((p, i) => {
                          return (
                            <figure class="flex flex-row mb-4">
                              <div>
                                <a
                                  href="#"
                                  class="block w-20 h-20 rounded border border-gray-200 overflow-hidden"
                                >
                                  <img src={p.image} alt="Title" />
                                </a>
                              </div>
                              <figcaption class="ml-3">
                                <p>
                                  <a
                                    href="#"
                                    class="text-gray-600 hover:text-blue-600"
                                  >
                                    {p.title}
                                  </a>
                                </p>
                                <p class="mt-1 font-semibold">{p.quantity} x {p.price} = {Number(p.quantity * p.price).toFixed(2)}</p>
                              </figcaption>
                            </figure>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </article>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};
