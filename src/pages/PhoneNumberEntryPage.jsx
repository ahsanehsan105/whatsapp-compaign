// src/pages/PhoneNumberEntryPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "react-toastify";

export default function PhoneNumberEntryPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber.match(/^\d{10,15}$/)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    localStorage.setItem("userPhone", phoneNumber);
    navigate("/qr");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-[#128C7E] mb-4">
          Enter WhatsApp Number
        </h2>
        <Label htmlFor="phone">WhatsApp Number</Label>
        <Input
          id="phone"
          type="text"
          placeholder="e.g. 919876543210"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="mb-4"
        />
        <Button type="submit" className="w-full bg-[#25D366] text-white">
          Continue to QR Scan
        </Button>
      </form>
    </div>
  );
}
