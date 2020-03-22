import React from 'react';
import namecard from './images/namecard.jpg';
import outside1 from './images/outside1.jpg';
import outside2 from './images/outside2.jpg';
import inside1 from './images/inside1.jpg';
import inside2 from './images/inside2.jpg';
import inside3 from './images/inside3.jpg';
import inside4 from './images/inside4.jpg';
import inside5 from './images/inside5.jpg';
import inside6 from './images/inside6.jpg';
import rdcMachine from './images/rdc-machine.jpg';
import map from './images/map.jpg';
import banner from '../News/banner.jpg';
import LINE from '../Reused/LINE';
import './About.css';

const about = () => (
    <div className="about">
        <img src={banner} alt="banner"/>
        <div className="section1">
            <div className="intro">
                <h3>健揚體育用品社</h3>
                <p>創立於1996年，專業從事世界知名品牌網球拍與羽球拍，以及相關用具之販售、維修。承蒙各界多年來的支持愛護下，堅持提供一流用品水準服務球友，方能在眾多同業競爭下，仍保有一定的知名度。為進一步提升我們的服務，遂成立了網路商店，希望能令您感受到"客戶不必出門、服務依然到家"。</p>
            </div>
            <img src={outside1} alt="outside1" id="outside1"/>
            <img src={outside2} alt="outside2" id="outside2"/>
            <img src={namecard} alt="namecard" id="namecard"/>
        </div>
        <div className="section2">
            <img src={inside1} alt="inside1" />
            <img src={inside2} alt="inside2" />
            <img src={inside3} alt="inside3" />
            <img src={inside4} alt="inside4" />
            <img src={inside5} alt="inside5" />
            <img src={inside6} alt="inside6" />
            <img src={rdcMachine} alt="rdc-machine" />
            <img src={map} alt="map" />
        </div>
        <ul className="section3">
            <li>提供"價廉物美的物品"及"完善的售後服務"與"產品保固"是"健揚"開店二十多年以來一直所秉持的信念！ 希望在網、羽球的領域中能服務更多的同好。讓更多的球友體會到："Peter&阿惠的店"="老朋友的店"="球友的好夥伴"。</li>
            <li>來自全省各地的球友在其他球友的口耳相傳下不遠千里而來，您們的熱情我們都感受到了！為了提供各位球友最佳服務， 本店使用兩台法國進口Babolat頂級電腦穿線機. 網球拍穿線(含線帶工)１5０元起；並提供穿線立即交件的服務，以讓球友不必來回奔波就能快速取件，讓您的球拍享受賓士級的VIP服務，不另加費喔！歡迎大家來健揚逛逛！！</li>
            <li>在此順便解答一些新球友的疑惑，阿惠的先生PETER是華裔美籍的馬來西亞華僑，受的是英文教育，來台灣之前又長住美國德州，中文不大流利，所以平常在店裡我們還是較習慣用英文交談。一般常客也都能體諒他怪怪的腔調，如果阿惠不在店裡也請各位稍微放慢說話的速度以確保最佳的溝通！</li>
            <li>常有新球友問為什麼在"健揚"穿的線張力特別平均，緊度較夠也較不會退磅？雖然一般店家也都會準備電腦穿線機，但在穿線的專業領域裡"法國原裝進口的Babolat電腦穿線機"還是有它過人之處，它 sensor感應的拉線磅數讓愈是講究球感的球友愈能體會其中的不同！這也就是"健揚"何以開店十餘年卻已汰換前後3部國產的穿線機，寧可花費數倍的費用，全面使用Babolat電腦穿線機的原因！也就是這股儍勁與對專業的執著贏得各位的錯愛！我們會一秉初衷繼續在這個領域深耕！！</li>
            <li>再者"穿線人員的素質與用心與否"也會對穿線品質造成影響，"健揚"以客為尊，為了不辜負各位球友的厚愛，Peter&阿惠不斷研究更好的穿線方式，為了呈現最佳品質，寧可延長穿線的時間，這也就是為什麼羽拍需費時50分鐘才能完成！而讓許多球友"一試成主顧"寧可捨近求遠而來，不是為了區區的價差而是為了更佳的擊球效果。希望我們的努力得以"近悅遠來"！</li>
            <li>在這個資訊透明化，微利的e世代，我們唯有精益求精，不斷求進步方能在這個競爭激烈的環境中生存，也期許自已做個能帶給別人溫暖的人！每當看著球友滿心歡喜的走出健揚，就覺得所有的辛苦都有了回報！</li>
            <li>我們有最專業的網球教練團隊為有興趣學球的球友服務！如您需安排台中紅土球場比賽事宜，亦可聯絡我們。</li>
            <li>彭彥博教練-專門培訓青少年選手，已培訓出許多優秀的網球教練與教師！</li>
            <li>劉信宏教練-留美碩士</li>
            <li>林逢甲教練-國體網球科班教練</li>
            <li>陳國輝教練＆歐文教練-國體A級教練</li>
            <li>鄭兆淮教練-國體B級教練</li>
            <li>健揚是目前整個大台中地區最專業的專賣店。有最多樣化的球拍現貨可供挑選！唯因銷售產品眾多加上店務繁重，無法即時更新網頁，任何網羽球週邊的產品及新款球拍都歡迎洽詢喔！</li>
            <li>如果您滿意我們的價格/產品/服務， 請告訴您的朋友， 讓好東西與好朋友分享！ 如果您有任何不滿意或意見，更請不吝告訴我們，讓我們能更努力以符合您的期望， 您的支持是我們努力的動力！</li>
            <li>相信來過健揚的球友都能了解Peter 及 阿惠是以最大的誠意和球友"博感情"的啦！</li>
        </ul>
        <LINE />
    </div>
);

export default about;