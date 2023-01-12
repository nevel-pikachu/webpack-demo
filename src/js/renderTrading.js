import tradingList from '../static/trading/tradings.json'

export const renderTrading = () => {
  document.getElementById("_trading").innerHTML = tradingList.map(item => {
    return `
    <div class="content_item item">
      <div class="item_img">
        <img src="${ item.imgSrc }"/>
      </div>
      <div class="item_title">
        ${ item.title }
      </div>
      <div class="item_content">
        ${ item.content }
      </div>
      <div class="item__trade">
        <a href="${ item.link }">
          <button class="trade_btn">Giao dịch ngay</button>
        </a>
      </div>
    </div>`
  }).join(``)
} 