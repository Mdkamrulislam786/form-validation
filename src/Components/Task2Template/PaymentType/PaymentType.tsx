import React from 'react'

const PaymentType = () => {
    return (
        <div className="input-group">
            <input type="radio" name="payment-method" value="card" id="payment-method-card" checked={true} />
            <label htmlFor="payment-method-card"><span><i className="fa fa-cc-visa"></i>Credit Card</span></label>
            <input type="radio" name="payment-method" value="paypal" id="payment-method-paypal" />
            <label htmlFor="payment-method-paypal"> <span><i className="fa fa-cc-paypal"></i>Paypal</span></label>
        </div>
    )
}

export default PaymentType
