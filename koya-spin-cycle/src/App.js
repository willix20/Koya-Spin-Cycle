
import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    items: "",
    address: "",
    paymentMethod: "paystack",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    alert("Order submitted! Redirecting to payment gateway...");
    if (form.paymentMethod === "paystack") {
      window.location.href = "https://paystack.com/pay/example";
    } else {
      window.location.href = "https://remita.net/payment/example";
    }
  };

  return (
    <motion.div className="p-6 max-w-xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold text-center mb-6">Koya Spin Cycle - Laundry Order</h1>
      <div className="space-y-4">
        <input className="w-full p-2 border rounded" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" />
        <input className="w-full p-2 border rounded" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
        <input className="w-full p-2 border rounded" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" />
        <input className="w-full p-2 border rounded" name="items" value={form.items} onChange={handleChange} placeholder="Laundry Items (e.g. 3 shirts, 2 trousers)" />
        <input className="w-full p-2 border rounded" name="address" value={form.address} onChange={handleChange} placeholder="Pickup Address" />
        <div>
          <label>Payment Method:</label>
          <select className="w-full p-2 border rounded" name="paymentMethod" value={form.paymentMethod} onChange={handleChange}>
            <option value="paystack">Paystack</option>
            <option value="remita">Remita</option>
          </select>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={handleSubmit}>Place Order</button>
      </div>
    </motion.div>
  );
}

export default App;
