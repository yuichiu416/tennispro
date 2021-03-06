import React from 'react';
import { Link } from 'react-router-dom';
import main from './main.gif';
import './Navbar.css';

const navBar = () => {
    return (
      <header className="navbar">
            <div className="flex">
                <Link to="/"><img src={main} alt="main" /></Link>
                <div>
                    <h1>健揚體育用品社 MASUKA®　　 電話：(04)2243-0949</h1>
                    <h2>營業時間：上午十點至晚上九點，(星期日、一店休)</h2>
                    <div>
                        <Link to="/news">最新消息</Link>
                    </div>
                    <div>
                        <Link to="/questions">常見問題</Link>
                    </div>
                    <div>
                        <Link to="/about">關於我們</Link>
                    </div>
                    <div>
                        <Link to="/paymentinfo">匯款資訊</Link>
                    </div>
                </div>
          </div>
      </header>
    );
};

export default navBar;
