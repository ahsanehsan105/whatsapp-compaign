import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import constant from "./constant";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // <-- new import

export default function QRScannerPage() {
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userPhone = localStorage.getItem("userPhone");
const [socket] = useState(() =>
  io(constant.socketUrl, {
    transports: ["websocket"],
  })
);


  useEffect(() => {
    if (!userPhone) {
      navigate("/connect");
      return;
    }

    socket.emit("join-session", userPhone);

    axios.post(`${constant.apiUrl}/start-session`, { sessionId: userPhone })
      .catch(() => {
        toast.error("Failed to start WhatsApp session");
        setLoading(false);
      });

socket.on(`qr-${userPhone}`, (qr) => {
  console.log("📦 QR received:", qr);
  setQrCode(qr);
  setLoading(false);
});


    socket.on(`authenticated-${userPhone}`, () => {
      toast.success("WhatsApp authenticated");
      navigate("/dashboard");
    });

    return () => {
      socket.off(`qr-${userPhone}`);
      socket.off(`authenticated-${userPhone}`);
    };
  }, [userPhone, socket, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4 text-[#128C7E]">
          Scan QR with WhatsApp
        </h2>
        {loading ? (
          <p>Waiting for QR code...</p>
        ) : qrCode ? (
          <QRCodeCanvas value={qrCode} size={256} /> // <--- render as QR image!
        ) : (
          <p>No QR code available.</p>
        )}
      </div>
    </div>
  );
}
