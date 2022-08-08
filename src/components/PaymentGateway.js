export default async function displayRazorpay() {
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("user", userData);
  const cart = JSON.parse(localStorage.getItem("cart"));
      // const address = products.find((item) => item.id === product.id);

  const cart_amount = Number(
    cart.reduce((total, item) => total + item.price * item.quantity, 0)
  ).toFixed(2);

  console.log("user", cart_amount);

  const data = await fetch(
    `http://localhost:1337/razorpay/?amount=${cart_amount}`,
    {
      method: "POST",
    }
  ).then((t) => t.json());

  console.log(data);

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: cart_amount,
    name: "Ekart",
    description: "Order Transaction",
    image: "http://localhost:1337/logo.png",
    order_id: data.id,
    handler: function (response) {
      console.log("response", response);
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);

      let orders = [];
      if (localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));
      }

      orders.push({
        order_id: response.razorpay_order_id,
        payment_id: response.razorpay_payment_id,
        products: cart,
      
      });
      localStorage.setItem("orders", JSON.stringify(orders));

      localStorage.setItem("cart", []);
      window.location = "/profile";

      // navigate({ pathname: "/wishlist/" });
    },
    prefill: {
      name: userData.user,
      email: userData.email,
      contact: userData.mobile,
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}





 