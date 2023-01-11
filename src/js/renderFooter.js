import aboutus from '../static/footer/aboutus.json'
import products from '../static/footer/products.json'
import service from '../static/footer/service.json'
import support from '../static/footer/support.json'

export const renderFooter = () => {
  let footerElement = document.getElementById("footer_section");
  let renderData = ""
  renderData += `<div class="footer_section__item"><div class="title">Về chúng tôi</div>`;
  aboutus.map(item => {
    renderData += `
    <div class="label">
        <a href="${item.link}"> ${item.label}</a>
    </div>`
  })
  renderData += `</div>`
  renderData += `<div class="footer_section__item"><div class="title">Sản phẩm</div>`
  products.map(item => {
    renderData += `
    <div class="label">
        <a href="${item.link}"> ${item.label}</a>
    </div>`
  })
  renderData += `</div>`
  renderData += `<div class="footer_section__item"><div class="title">Dịch vụ</div>`
  service.map(item => {
    renderData += `
    <div class="label">
        <a href="${item.link}"> ${item.label}</a>
    </div>`
  })
  renderData += `</div>`
  renderData += `<div class="footer_section__item"><div class="title">Hỗ trợ</div>`
  support.map(item => {
    renderData += `
    <div class="label">
        <a href="${item.link}"> ${item.label}</a>
    </div>`
  })
  renderData += `</div>`
  footerElement.innerHTML = renderData;
}
