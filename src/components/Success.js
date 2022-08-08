import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();

  const [wishListItems, setwishListItems] = useState([]);
  const [wcount, setWcount] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("wishlist")) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist"));
      const w_count = JSON.parse(localStorage.getItem("wishlist")).length;
      setWcount(w_count);
      setwishListItems(wishlist);
    }
  }, []);

  const removeProduct = (_product) => {
    let productId = _product.id;
    let storageProducts = JSON.parse(localStorage.getItem("wishlist"));
    let products = storageProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("wishlist", JSON.stringify(products));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    setwishListItems(wishlist);
    const w_count = JSON.parse(localStorage.getItem("wishlist")).length;
    setWcount(w_count);
  };

  const addToCart = (_product) => {
    let products = [];
    if (localStorage.getItem("cart")) {
      products = JSON.parse(localStorage.getItem("cart"));
    }

    const ProductExist = products.find((item) => item.id === _product.id);

    if (ProductExist) {
      ProductExist.quantity += 1;
    } else {
      products.push({
        id: _product.id,
        image: _product.image,
        price: _product.price,
        title: _product.title,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(products));

    let productId = _product.id;
    let storageProducts = JSON.parse(localStorage.getItem("wishlist"));
    let products1 = storageProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("wishlist", JSON.stringify(products1));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    setwishListItems(wishlist);

    navigate({ pathname: "/cart/" });
  };

  // const totalPrice = () => {
  //   const countTotal = (items) => items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
  //   console.log(countTotal(wishListItems));
  // };

  // const incrementCount = (item,index) => {
  //   const items = [...wishListItems];
  //   item.quantity += 1;
  //   items.splice(index,1,item);
  //   localStorage.setItem('products', JSON.stringify(items));
  //   setwishListItems(items)
  //   console.log("wishListItems", wishListItems)
  // }

  // const decrementCount = (item,index) => {
  //   const items = [...wishListItems];
  //     if(item.quantity>1){
  //       item.quantity -= 1;
  //       items.splice(index,1,item);
  //       localStorage.setItem('products', JSON.stringify(items));
  //       setwishListItems(items)
  //       console.log("wishListItems", wishListItems)
  //     }

  // }

  const list_products = wishListItems.map((p, index) => {
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
          <div class=""></div>
          <div>
            <div class="leading-5">
              <p class="font-semibold not-italic">{p.price}</p>
            </div>
          </div>
          <div class="flex-auto">
            <div class="float-right">
              <span
                onClick={() => addToCart(p)}
                class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
              >
                Add to cart
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

    

      <section class="py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
         <p> Order Success</p>
        </div>
      </section>
    </div>
  );
};
