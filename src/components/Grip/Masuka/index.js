import React from 'react';
import './Masuka.css';

const grips = [
    {
        "name": "0.75mm MASUKA Soft tech10入透氣握把布(共有11種顏色喔)",
        "description": "透氣孔0.75mm 10個/包=120元(+運費30元).有黑/藍/紫/紅/粉紅/黃/白/橘/綠/灰/棕11色可供選擇.如需配色請另告知!",
        "ship": "運費1包30元  2包40元  3包50元 4包以上65元",
        "groupShip": "團購120個以上@10 元+運費80元",
        "price": "NT$120 /10入",
        "images": [
            process.env.PUBLIC_URL + "/images/grips/masuka1.jpg"
        ]
    },
    {
        "name": "經濟又好用的0.6mm MASUKA Sports稍黏平面握把布 10入",
        "description": "0.6mm 10個/包=120元(+運費30元)<br/>(黑/深藍/淺藍/紫/螢光綠/橘/粉紅/白.可供選擇.如需配色請另告知) 本款紅及黃色已停產",
        "ship": "1包30元  2包40元  3包50元 4包以上65元",
        "groupShip": "團購120個以上@10 元+運費80元",
        "price": "NT$120 /10入 ",
        "images": [
            
            process.env.PUBLIC_URL + "/images/grips/masuka2-1.jpg"
        ]
    },
    {
        "name": "0.55mm Masuka Pro 超手感選手級握把布",
        "description": "黏性佳，選手級球友最愛的握把布<br/>黑/藍//紅//橘/白/灰/粉紅/紫螢光綠//9種顏色.如需配色請另告知)<br/>可零買10個/包=150元(運費30元)可選色喔!",
        "ship": "1包30元  2包40元  3包50元 4包以上65元",
        "groupShip": "團購120個以上@13元+運費80元",
        "price": "NT$150/10入",
        "images": [process.env.PUBLIC_URL + "/images/grips/masuka3.jpg"]
    },
    {
        "name": "MASUKA Control 0.6mm平面止滑握把布10入 (包)",
        "description": "0.6mm 10個/包=120元(+運費30元)<br/>顏色:黑/白/紅/酒紅/灰/綠/紫/藍/粉紅/淺藍/黃11種",
        "ship": "1包30元/ 2包40元 / 3包50元/ 4包以上65元",
        "groupShip": "團購120個以上@10 元+運費80元",
        "price": "NT$120/10入",
        "images": [process.env.PUBLIC_URL + "/images/grips/masuka4.jpg"]
    },
    {
        "name": "經濟又好用的0.6mm MASUKA 120入桶裝黏性佳平面握把布團購價1200元",
        "description": "0.6mm 120入桶裝黏性佳平面握把布<br/>(10個/包x12包)=團購價1200元 黑/深藍/紫/螢光綠/粉紅/橘/淺藍/白.如需配色請另告知) 歡迎球隊或球友合買!",
        "ship": "1包30元  2包40元  3包50元 4包以上65元 <br/>可零買10個/包=120元(運費30元)可選色",
        "groupShip": "團購120個以上@ 10 元+運費80元",
        "price": "NT$1200/120入",
        "images": [
            process.env.PUBLIC_URL + "/images/grips/masuka5.jpg",
            process.env.PUBLIC_URL + "/images/grips/masuka5-1.jpg",
            process.env.PUBLIC_URL + "/images/grips/masuka5-2.jpg"
        ]
    },
    {
        "name": "經濟又好用的0.75mm MASUKA 120入透氣握把布1200/桶",
        "description": "120個桶裝團購價1200元 <br/>透氣孔0.75mm 120個一桶(10個/包x12包).<br/>有黑/藍/紫/紅/粉紅/黃/白/綠/橘/灰/棕/-11色可供選擇.如需配色請另告知!",
        "ship": "1包30元  2包40元  3包50元 4包以上65元 <br/>零買10個/包=120元)+運費30元",
        "groupShip": "團購120個以上@ 10 元+運費80元",
        "price": "NT$1200 /120入",
        "images": [
            process.env.PUBLIC_URL + "/images/grips/masuka6.jpg",
            process.env.PUBLIC_URL + "/images/grips/masuka6-1.jpg"]
    },
    {
        "name": " 0.6mm MASUKA 乾式 10入平面超吸汗握把布",
        "description": "皮面沒有保鮮膜且表皮有磨面處理<br/>超吸汗! 是乾式絨面，唯耐用度不及其他0.6有黏性的產品。<br/>顏色: 黑/淺藍/黃/白/紅/.5種顏色可供選擇. <br/>如需配色請另告知",
        "ship": "1包30元  2包40元  3包50元 4包以上65元<br/>可零買10個/包=120元(運費30元)可選色",
        "groupShip": "團購120個以上@10 元+運費80元",
        "price": "NT$120/10入",
        "images": [process.env.PUBLIC_URL + "/images/grips/masuka7.jpg"]
    },
    {
        "name": "0.75mm MASUKA Soft-tech平面握把布10入",
        "description": "顏色:黑/藍/紫/紅/粉紅/黃/白/綠/橘/灰/-10色可供選擇.<br/>如需配色請另告知!",
        "ship": "1包30元  2包40元  3包50元 4包以上65元<br/> 可零買10個/ 包=120元(運費30元)可選色",
        "groupShip": "團購120個以上@ 10 元+運費80元",
        "price": "NT$120/10入",
        "images": [process.env.PUBLIC_URL + "/images/grips/masuka8.jpg"]
    },
];

const masuka = () => {
    const items = grips.map((grip, index) => {
        const images = grip.images.map(url => <img src={url} alt="img" />);
        const classes = ""
        return (
            <ul className="masuka">
                <li>
                    <p><b>品名:</b></p>
                    <p>{grip.name}</p>
                </li>
                <li>
                    <div>
                        <p><b>說明:</b></p>
                        <p>{grip.description}</p>
                    </div>
                </li>
                <li>
                    <p>{grip.ship}</p>
                </li>
                <li>
                    <p>{grip.groupShip}</p>
                </li>
                <li><p>歡迎球隊或球友合買!</p></li>
                <li>
                    <p><b>售價:</b></p>
                    <p>{grip.price}</p>
                </li>
                {images}
            </ul>
        );
    }
    );

    return (
        <>
            {items}
        </>
    );
};

export default masuka;