<template>
  <div class="trade_now_section">
    <div class="trade_now container">
      <div class="trade_now__title">Bắt đầu giao dịch ngay</div>
      <div class="trade_now__action">
        <button class="trade_now__action--button">Bắt đầu</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.trade_now_section {
  height: 275px;
  background: #FAFAFA;
}

.trade_now {
  text-align: center;

  &__title {
    padding-top: 64px;
    font-weight: 500;
    font-size: 48px;
    line-height: 59px;
  }

  &__action {
    margin-top: 56px;
    &--button {
      width: 220px;
      height: 48px; 
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #18181B;
      background: #FAAC2E;
      border-radius: 8px;

      &:hover,
      &.focus {
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