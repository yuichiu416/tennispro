import React from 'react';
import QRCode from './QRCode.jpg';
import './LINE.css';

const line = () => (
    <div className="line">
        <h2>掃描QR code 加入健揚 LINE 好友:</h2>
        <img src={QRCode} alt="qr-code" />
    </div>
);

export default line;