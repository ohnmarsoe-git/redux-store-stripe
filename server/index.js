require('dotenv').config()
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
app.use(cors());
app.use(express.json())

app.post("/create-payment-intent", async(req, res) => {
  if(!req.body) return;

  let lineItems = [];

  lineItems = req.body.items?.map((item => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100)
      },
      quantity: item.amount,
    }
  }))

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: Math.round(req.body.amount * 100)
    })
    
    res.send({clientSecret: paymentIntent.client_secret})

  } catch(e) {
    console.log(e.message);
    return res.status(400).send({
      error: {
        message: e.message
      }
    })
  }
})

app.post("/checkout", async (req, res) => {

  if(!req.body) return;

  let lineItems = [];

  lineItems = req.body.items?.map((item => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100)
      },
      quantity: item.amount,
    }
  }))

  try {
    
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    customer_email: req.body.email,
    shipping_address_collection: {
      allowed_countries: ['MM'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    line_items: lineItems,
    success_url : `${process.env.PUBLIC_URL}/checkout/success`,
    cancel_url : `${process.env.PUBLIC_URL}/checkout/cancel`,
  })

  res.send(JSON.stringify({
    url: session.url,
  }))

  } catch(e) {
    res.status(500).json({error: e.message})
  }
})

app.listen(4000, () => console.log('listen to port:4000'))
