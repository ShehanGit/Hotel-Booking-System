import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import NavBar from '../../components/NavBar';

const stripePromise = loadStripe('pk_test_51PcMEzKr4aZoYRvRMiHmcXsmbW70tPO6LKD1hyjbouf17iZZZ1gVfbEbrSTzNRRJOGLDuB9hFTFIxZqy0hYYpjbL00t1skr5NG');

function PaymentPage() {
    return (
        <div className="payment-page">
            <NavBar />
            <Elements stripe={stripePromise}>
            </Elements>
        </div>
    );
}

export default PaymentPage;
