<template>
  <div class="trading-section">
    <div class="trading container">
      <div class="trading__title">Đối tác đáng tin cậy cho hành trình của bạn</div>
      <div class="trading__note">Giao dịch bằng VND với phí 0đ</div>
      <div class="trading__package">
        <div class="item" v-for="item in tradingList">
          <div class="item__img">
            <img :src="item.imgSrc" :alt="item.title"/>
          </div>
          <div class="item__title"> {{ item.title }}</div>
          <div class="item__content"> {{ item.content }}</div>
          <div class="item__trade">
            <nuxt-link :to="item.link">
              <button class="trade_btn">Giao dịch ngay</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tradings from '@/static/trading/tradings.json'
export default {
  setup() {
    const tradingList = tradings;
    return {
      tradingList
    }
  }
}
</script>
<style scoped lang="scss">
.trading-section {
  position: relative;
  min-height: 560px;
  background: #FAFAFA;
}
.trading {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &__title {
    margin-top: 80px;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
  }

  &__note {
    margin-top: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &__package {
    display: flex;
    margin-top: 52px;
    .item {
      flex: 1;
      margin: 0 32px;

      &__title {
        margin-top: 24px;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }

      &__content {
        margin-top: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #70707B;
      }
      &__trade {
        position: absolute;
        bottom: 80px;
        .trade_btn {
          width: 110px;
          height: 40px;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #18181B;
          background: #E4E4E7;
          border-radius: 8px;
          &:hover,
          &:focus {
            transition: 1s;
            box-shadow: inset 8.5em 0 0 0 adjust-hue(#bfbfc4, 45deg);
          }
        }
      }
    }
  }

}
</style>