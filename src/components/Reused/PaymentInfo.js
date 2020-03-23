import React from 'react';
import './PaymentInfo.css';

const paymentInfo = () => (
    <div className="payment-info">
        <ul>
            <li><h2 className="red">連絡我們：</h2></li>
            <li>門市地址 : 406台中市北屯區遼寧路一段207號(北新國中側門圍牆對面)</li>
            <li>電話 : (04)2243-0949</li>
            <li>手機: 0919-047959</li>
            <li>Line ID: diane531212</li>
        </ul>
        <ul>
            <li>E-mail(1) :
                    <a href="mailto:diane531212@yahoo.ca?Subject=你好%20想請問一下:">
                    diane531212@yahoo.ca</a> (不是.com.tw喔)
                </li>
            <li>E-mail(2) :
                    <a href="mailto:cassie1426@yahoo.com.tw?Subject=你好%20想請問一下:">
                    cassie1426@yahoo.com.tw</a>
            </li>
            <li>E-mail(3) :
                    <a href="mailto:diane.hu@msa.hinet.net?Subject=你好%20想請問一下:">
                    diane.hu@msa.hinet.net</a>
            </li>
        </ul>
        <ul >
            <li><h2>轉帳資料如下：</h2></li>
            <li>戶名：健揚體育用品社-胡美英</li>
            <li>銀行：彰化銀行 水湳分行</li>
            <li>ATM金融代號：009</li>
            <li>帳號：4035-01-21436-100</li>
            <br />
            <li>郵局戶名: 胡美英</li>
            <li>局號: 0141148</li>
            <li>帳號: 0303958</li>
            <li className="blue">可用無摺單存入免手續費</li>
        </ul>
    </div>
);

export default paymentInfo;