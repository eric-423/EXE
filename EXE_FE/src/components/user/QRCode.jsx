// import React from "react";

const QRCode = () => {
    return (
        <div className="qr-code-container mx-auto">
            <img
                src="/lovable-uploads/b04a8494-a8ea-48c0-81d9-6e923b7c24ac.png"
                alt="QR Code"
                className="img-fluid"
                onError={(e) => {
                    e.currentTarget.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0902345678';
                }}
            />
        </div>
    );
};

export default QRCode;