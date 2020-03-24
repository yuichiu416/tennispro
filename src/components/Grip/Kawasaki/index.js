import React from 'react';

const grips = [
    {
        "name": "Kawasaki 0.75mm斜纹止滑網、羽球握把布10入",
        "description": [
            "輪胎紋0.75mm 10個/包=150元(+運費30元).",
            "顏色: 黑/藍/紫/紅/黃/白/橘/綠/灰/螢光綠",
            "如需配色請另告知!"
        ],
        "ship": "1包30元 2包40元 3包50元 4包以上65元",
        "groupShip": "團購120個以上@13 元+運費80元",
        "price": "NT$150/10入",
        "images": [
            process.env.PUBLIC_URL + "/images/grips/kawasaki1.jpg"
        ]
    },
];

const kawasaki = () => {
    const items = grips.map((grip, index) => {
        const images = grip.images.map(url => <img src={url} alt="img" className="column2" key={url} />);
        const descriptions = grip.description.map(des => <div key={des}>{des}<br /></div>);
        return (
            <div className="item" key={grip + index}>
                <p><b>品名:</b></p>
                <p>{grip.name}</p>
                <p><b>說明:</b></p>
                <div className="column2">{descriptions}</div>
                <h3 className="column2">請先確認顏色、數量有現貨再付款</h3>

                <p className="column2">{grip.ship}</p>
                <p className="column2">{grip.groupShip}</p>
                <p className="column2">歡迎球隊或球友合買!</p>
                <p><b>售價:</b></p>
                <p className="column2">{grip.price}</p>
                {images}
            </div>
        );
    }
    );

    return (
        <>
            {items}
        </>
    );
};

export default kawasaki;