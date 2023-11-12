import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_ST_PUBLISH_KEY);
const Checkout = () => {
  const [clientSecret, setClientSecret] = useState();

  const { total } = useSelector((store) => store.cart);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: total,
      }),
    })
      .then(async (r) => {
        const { clientSecret } = await r.json();
        console.log(clientSecret);
        setClientSecret(clientSecret);
      })
      .catch((e) => {
        console.error(e.error);
      });
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Checkout;
