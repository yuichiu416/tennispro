import React, { Component } from 'react';
import $ from "jquery";
import banner from './banner.jpg';
import map from './map.jpg';
import PaymentInfo from '../Reused/PaymentInfo';
import LINE from '../Reused/LINE';
import "./News.css";

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsInfo: {}
        }
    }
    componentDidMount(){
        this.getNewsData();
    }

    getNewsData(){
        $.ajax({
          url: process.env.PUBLIC_URL + "/newsData.json",
          dataType: "json",
          cache: false,
          success: function(newsInfo) {
            this.setState({ newsInfo });
          }.bind(this),
          error: (xhr, status, err) => {
            console.log(err);
            alert(err);
          }
        });
    }

    render(){
        const { newsInfo } = this.state;
        const announces = newsInfo.announces ? (
          <ul className="announces">
            {newsInfo.announces.map( (an, i) =>
            <li key={"an" + i}>{an}</li>)}
          </ul>
        ) : null;
        return (
          <div className="news">
            <img src={banner} alt="logo"/>
            <h1>{newsInfo.hours}</h1>
            <h1>{announces}</h1>
            <br/>
            
            <br/>
            <LINE />
            <h1>2015年7月1日起部分 球線價格調整如下:</h1>
            <ul className="prices">
                <li>BG-65 含線帶工<p>290</p>元</li>
                <li>BG-65Ti 含線帶工<p>320</p>元</li>
                <li>BG-68Ti/70 含線帶工<p>330</p>元 (BG70已停產，店內現貨用完即無法供貨)</li>
                <li>BG-66 含線帶工<p>340</p>元</li>
                <li>BG-66U 含線帶工<p>350</p>元</li>
                <li>BG-66F/80/85含線帶工<p>360</p>元 (BG85已停產，店內現貨用完即無法供貨)</li>
                <li>NBG-80P/95/98/99 含線帶工<p>370</p>元</li>
                <li>BG-AS 含線帶工<p>370</p>元</li>
                <li>BG-AB 含線帶工<p>380</p>元</li>
                <li>自已帯線來羽拍穿工<p>200元</p>/羊腸線<p>250</p>元 </li>
                <li>自已帯線來網球拍一般線穿工<p>150</p>元；硬線、羊腸線穿工<p>200</p>元 </li>
                <li>在健揚買網球線含線帯工價格沒有變動, 即穿工比自己帶線來少<p>50</p>元</li>
            </ul>
            <h1>2014-03-01   健揚已搬遷至:

            台中市北屯區遼寧路一段207號 (北新國中側門圍牆對面)
            </h1>
            <img src={map} alt="map"/>
            <ul className="h1">
                <li>新址很寬敞會有較好的接待空間，歡迎球友來新址。</li>
                <li>也請您幫忙轉貼此訊息給您通訊錄上的好友，</li>
                <li>以免來舊址找不到我們，謝謝您</li>
            </ul>
            <ul>
                <li><h2>連絡我們：</h2></li>
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
            <PaymentInfo />
          </div>
        );
    }
};

export default News;