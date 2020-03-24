import React from 'react';

const badmintionStrings = [
    {
        "name": "Yonex NBG99 羽球線 (條)",
        "description": [
            "0.69mm/10M",
            "應用獨特的 尼龍塗層包覆在 Y o n e x 編織纖維上",
            "提供最極限的 咬球力 讓 網前吊球更加順手",
            "適合加強控球型和技術性的選手"
        ],
        "price": "NT$220(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings1.jpg"
        ]
    },
    {
        "name": "Yonex NBG98 羽球線 (條)",
        "description": [
            "0.66mm/10M",
            "俐落的擊球感,搭配高反彈力更易於防守",
            "有最好的彈性,防守操控性佳",
            "顏色有白色及藍色二色."
        ],
        "price": "NT$220(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings2.jpg"
        ]
    },
    {
        "name": "Yonex NBG 95 羽球線 (條)",
        "description": [
            "0.69mm/10M",
            "Cup-Stack Carton Nanotube奈米複合物打造高度的反彈力與耐用度",
            "適合追求速度和耐用性的選手",
            "應用獨特的奈米碳纖維, 獲得高彈力和高耐用度的統一",
            "顏色有香檳金及亮黃二色."
        ],
        "price": "NT$220(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings3.jpg"
        ]
    },
    {
        "name": "Yonex BG80P 羽球線 (條)",
        "description": [
            "33ft(10M)0.68mm/10M",
            "結合高係數Vectran 纖維和Y o n e x的高密度的尼龍複合纖維",
            "打造強力的扣殺和紮實的手感，適合進攻型選手",
            "顏色有白及橘二色"
        ],
        "price": "NT$220(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings4.jpg"
        ]
    },
    {
        "name": "Yonex BG-66F 羽球線 (條))",
        "description": [
            "0.65mm/10M",
            "超薄線徑 搭配減少震動的複合纖維打造強力扣殺和控球",
            "顏色有白及黃，藍三色"
        ],
        "price": "NT$210(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings5.jpg"
        ]
    },
    {
        "name": "Yonex BG66U 羽球線 (條)",
        "description": [
            "0.65mm/10M33ft(10M)",
            "超薄線徑提供最快的速度 控制性與耐久力，是世界頂尖球員的最佳選擇",
            "顏色有白及黃，綠，粉紅，橘五色."
        ],
        "price": "NT$200(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings6.jpg"
        ]
    },
    {
        "name": "Yonex BG-85 羽球線 (條)",
        "description": [
            "(067mm)gauge",
            "超細Women Vectran增加您殺球時的威力,耐用与彈性兼具的特質",
            "提供您所需的力量和控制,雖然殺球的速度極快,您的感覺仍是輕柔且舒適的",
            "顏色有白及藍，紫三色."
        ],
        "price": "NT$210(買10送1)已停產，店內存貨售完即無法供貨",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings7.jpg"
        ]
    },
    {
        "name": "Yonex BG68Ti 羽球線 (條)",
        "description": [
            "0.68mm33ft(10M)",
            "複合的鈦塗層製造, 不僅提供清脆的擊球聲，也保留舒適的手感",
            "不僅提供清脆的擊球聲，也保留舒適的手感",
            "適合控球型球員",
            "有較佳的彈性,同時耐久度也比之前好10%.",
            "高彈性且超系的纖維,提供絕佳彈性和吸振的特色.",
            "顏色有白及藍二色"
        ],
        "price": "NT$180(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings8.jpg"
        ]
    },
    {
        "name": "Yonex BG-80(條)",
        "description": [
            "0.68mm/10M",
            "優良的Vectran纖維包覆在堅固的線蕊上",
            "強化結構，提供殺球更強勁的威力",
            "超細Women Vectran增加您殺球時的威力,耐用与彈性兼具的特質",
            "提供您所需的力量和控制,雖然殺球的速度極快,您的感覺仍是輕柔且舒適的"
        ],
        "price": "NT$210(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings9.jpg"
        ]
    },
    {
        "name": "Yonex BG66 羽球線 (條)",
        "description": [
            "0.66mm/10M",
            "超細線徑提供清脆的擊球聲和優秀的反彈力",
            "俐落的擊球感,有最好的彈性,防守操控性佳",
            "顏色有白色及黃色二色."
        ],
        "price": "NT$190(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings10.jpg"
        ]
    },
    {
        "name": "Yonex BG65Ti 羽球線 (條)",
        "description": [
            "0.70mm/10M",
            "運用高品質的鈦製成,以求更佳的彈性,在激烈的球賽中,提供絕佳的張力.",
            "顏色有白色及粉紅色"
        ],
        "price": "NT$170(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings11.jpg"
        ]
    },
    {
        "name": "Yonex BG65 羽球線 (條)",
        "description": [
            "0.70mm/10M",
            "外表特殊的編織結構，降低線的磨損，提供優越的耐用度",
            "全方位的性能是全世界級球球員的共同選擇",
            "顏色有白色及藍色，橘，黃四色."
        ],
        "price": "NT$140(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings12.jpg"
        ]
    },
    {
        "name": "Yonex BB-70 羽球線 (條)",
        "description": [
            "0.70mm/10M",
            "特別為保持張力而設計的羽線,橢圓形的纖維包束結構",
            "可保持張力的持久性"
        ],
        "price": "NT$180(買10送1)",
        "images": [
            process.env.PUBLIC_URL + "/images/badminton-strings/badminton-strings13.jpg"
        ]
    },
];

const badmintonString = () => {
    const items = badmintionStrings.map((grip, index) => {
        const images = grip.images.map(url => <img src={url} alt="img" className="column2" key={url} />);
        const descriptions = grip.description.map(des => <div key={des}>{des}<br /></div>);
        return (
            <div className="item" key={grip + index}>
                <p><b>品名:</b></p>
                <p>{grip.name}</p>
                <p><b>說明:</b></p>
                <div className="column2">{descriptions}</div>

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

export default badmintonString;