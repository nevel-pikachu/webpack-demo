<template>
<div class="discovery-section">
  <div class="discovery container">
    <div class="discovery__content">
    <div class="title">
      Mua & Bán tiền mã <br> hoá chỉ trong vài phút
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
  display: flex;
  justify-content: space-between;
  &__content {
    flex: 1;
    .title {
      font-size: 48px;
      font-weight: 500;
      line-height: 59px;
      letter-spacing: 0em;
      text-align: left;
    }
    .body_content {
      margin-top: 12px;
    }
    .submid_button {
      position: relative;
      width: 220px;
      height: 48px;
      margin-top: 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      background: #FAAC2E;
      border-radius: 8px;
      &:hover,
      &:focus {
        animation: pulse 1s;
        box-shadow: 0 0 0 2em transparent;
      }
    }
  }
  &__logo {
    flex: 1;
  }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 adjust-hue(#ef6eae, 45deg); }
}
@-webkit-keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--hover); }
}
</style>