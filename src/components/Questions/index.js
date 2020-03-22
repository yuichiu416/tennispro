import React from 'react';
import PaymentInfo from '../Reused/PaymentInfo';
import './Questions.css';

const questions = () => {
    return (
        <div className="questions">
            <h1>關於訂貨</h1>
            <ul>
                <ul>
                    <li><h2>訂貨方式：</h2></li>
                    <li>部份網、羽球拍價格受限於代理商規定，請來電：04-22430949</li>
                    <li>0919-047959傳真04-22425520或Email：cassie1426@yahoo.com.tw</li>
                    <li>或diane531212@yahoo.ca詢問實際賣價及訂購 </li>
                    <li>營業時間內更歡迎親自至店內參觀選購。</li>
                </ul>
                <ul>
                    <li><h2>送貨方式：</h2></li>
                    <li>1.營業時間內隨時歡迎顧客親自來店取貨。</li>
                    <li> 2.郵局掛號包裹或貨運。</li>
                    <li>運費：計價以郵局收費方式計算， 二件以上合併計算重量。由於部份網、   </li>  
                    <li>羽球拍價格無法照實際賣價刊登，相對的也影響運費計算，請將所選商品</li>
                    <li>連圖檔一併mail， 我們會回覆實際賣價及所需運費，約 0～80元(外島100元)</li>
                    <li>超重部分由健揚吸收，（啞鈴除外， 啞鈴運費請參照產品標示 ）</li>
                </ul>
                <ul>
                    <li><h2>退換貨問題：</h2></li>
                    <li>如須更換尺寸，買家須負擔來回運費，希望買家訂貨前考慮清楚，</li>
                    <li>或是親自來健揚更換以節省運費喔！</li>
                    <li>如果是產品本身有任何瑕疵或故障， 健揚會負擔更換運費。</li>
                    <li>付款方式：親自至店內參觀選購者請付現金，郵寄者請先轉帳</li>
                    <li>（健揚沒有刷卡也沒有刷國民旅遊卡</li>
                </ul>
                <PaymentInfo />
                <p> 關於網友詢問可否辦可刷國民旅遊卡，在此致上萬分歉意</p>
                <p>我們的店址是無法辦可刷國民旅遊卡的！</p>
                <ul>
                    <li><h2>常見線材問題：</h2></li>
                    <li><h3>羽球線：</h3></li>
                    <li>Q:平常拿球拍去健揚綁線，沒特別說的話是直、橫都同磅數嗎？</li>
                    <li>A:沒特別說的話是直線較橫線少1磅。</li>
                    <li>Q:通常建議是橫線多直線10%嗎？還是差距不明顯？</li>
                    <li>A:通常建議是橫線多直線1~3磅，我們的方式是若球友說21磅~~直線21磅橫線20磅。</li>
                    <li>Q:</li>
                    <li>Q:</li>
                    <li>A:</li>
                    <li>A:</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </ul>
        </div>
    )
};

export default questions;