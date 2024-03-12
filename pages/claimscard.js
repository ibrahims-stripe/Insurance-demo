import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51KTT7UF3HJGNplxXgBg30J4qZfH0k4UpG9ctjHuwKFGgLgikux0mF0OkrYN3NJw0bs37ebpUS2kpmgjqizMR6vsi00gnyewjGw');
//import CardSection from '../components/CardSection';
import CheckoutForm from '../components/CheckoutForm';
export default function claimscard() {
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.



  return (
    <Elements stripe={stripePromise} >
    <CheckoutForm />
    </Elements>
  );
};