<template>
  <div class="reason-section container">
    <div class="title">
      <div class="title__content">Tại sao chọn VinEx?</div>
      <div class="title__note">
        Chúng tôi cung cấp cho bạn sự an toàn, hiệu quả và đa dạng.
      </div>
    </div>
    <div class="main-content">
      <div class="content_item" v-for="item in reasonList">
        <div class="item_img">
          <img :src="item.imgSrc"/>
        </div>
        <div class="item_title">
          {{ item.title }}
        </div>
        <div class="item_content">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import reasonable from '@/static/reasonable/reasonable.json'
export default {
  setup() {
    const reasonList = reasonable;
    return {
      reasonList
    }
  }
}
</script>

<style scoped lang="scss">
.reason-section {
  min-height: 420px;
  .title {
    text-align: center;
    font-style: normal;

    &__content {
      margin-top: 64px;
      font-weight: 500;
      font-size: 32px;
      line-height: 44px;
    }
    &__note {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .main-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 64px;
    .content_item {
      flex: 1;
      margin: 0 40px;
      text-align: center;
      .item_img {
        margin-bottom: 10px;
        padding: 0 49px;

      }
      .item_title {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
      }
      .item_content {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #70707B;
      }
    }
  }
}
</style>