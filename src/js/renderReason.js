import reasonList from '../static/reasonable/reasonable.json'

export const renderReason = () => {
  document.getElementById("_reason").innerHTML = reasonList.map(item => {
    return `
    <div class="content_item">
      <div class="item_img">
        <img src="${ item.imgSrc }"/>
      </div>
      <div class="item_title">
        ${ item.title }
      </div>
      <div class="item_content">
        ${ item.content }
      </div>
    </div>`
  }).join(``)
}
