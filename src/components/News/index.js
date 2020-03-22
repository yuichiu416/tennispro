import React, { Component } from 'react';
import $ from "jquery";
import "./News.css";

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsInfo: {}
        }
    }
    componentDidMount(){
        this.getResumeData();
        console.log('done)');
    }

    getResumeData(){
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
            <img src="images/banner.jpg" />
            <h1>{newsInfo.hours}</h1>
            <h1>{announces}</h1>
            <h2>NEW!! 掃描QR code 加入健揚 LINE 好友:</h2>
            <img src="images/QRCode.jpg" />
            {/* <h1>2015年7月1日起部分 球線價格調整如下:</h1> */}

          </div>
        );
    }
};

export default News;