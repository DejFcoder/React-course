import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payments, setPayments] = useState("");
  const [shipping, setShipping] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <h1>{quantity}</h1>

      <textarea
        name=""
        id=""
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <p>{comment}</p>

      <select
        value={payments}
        onChange={(e) => setPayments(e.target.value)}
        name=""
        id=""
      >
        <option value="">Select an option</option>
        <option value="VISA">visa</option>
        <option value="MSC">msc</option>
        <option value="PAYPAL">paypal</option>
      </select>
      <h1>{payments}</h1>

      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={(e) => setShipping(e.target.value)}
        />
        Pick Up
        <br />
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={(e) => setShipping(e.target.value)}
        />
        Delivery
      </label>
      <p>{shipping}</p>
    </div>
  );
}

export default MyComponent;
