<template>
  <div class="discovery-section">
    <div class="discovery container">
      <div class="discovery__content">
      <div class="title">
        Mua & Bán tiền mã hoá chỉ trong vài phút
      </div>
      <div class="body_content">
        Tham gia sàn giao dịch tiền mã hoá nhanh chóng và an toàn nhất <br> Việt Nam
      </div>
      <button class="submid_button">Khám phá</button>
    </div>
    <div class="discovery__logo">
      <img src="@/assets/images/logo.svg"/>
    </div>
  </div>
  </div>
</template>
<style scoped lang="scss">
.discovery-section {
  background: #FAFAFA;
}
.discovery {
  justify-content: space-between;
  &__content {
    margin-bottom: 28px;
    .title {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: left;
    }
    .body_content {
      margin-top: 12px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #51525C;
    }
    .submid_button {
      position: relative;
      width: 164px;
      height: 32px;
      margin-top: 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #18181B;
      background: #FAAC2E;
      border-radius: 4px;
      &:hover,
      &:focus {
        animation: pulse 1s;
        box-shadow: 0 0 0 2em transparent;
      }
    }
  }

}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 adjust-hue(#ef6eae, 45deg); }
}
@-webkit-keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}
</style>