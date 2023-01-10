<template>
  <div class="q_a_section">
    <div class="q_a container">
      <div class="q_a__title">Hỏi & đáp</div>
      <div class="q_a__list">
        
      </div>
      <div class="q_a__note note">
        <div class="note__img">
          <img src="@/assets/images/qa.svg"/>
        </div>
        <div class="note__content">
          <div class="title">
            Giao dịch mọi lúc, mọi nơi.
          </div>
          <div class="content">
            Tương thích với nhiều thiết bị, bắt đầu giao dịch an toàn và tiện lợi. 
            Toàn bộ sức mạnh của sàn giao dịch tiền mã hoá VinEX giờ nằm gọn trong bàn tay của bạn. 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.q_a {
  &__title {
    margin-top: 64px;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    color: #18181B;
  }

  &__note {
    display: flex;
  }
  .note {
    &__img {
      flex: 1;
      img {
        float: right;
      }
    }

    &__content {
      flex: 1;
      .title {
        font-weight: 500;
        font-size: 32px;
        line-height: 44px;
        color: #18181B;
      }

      .content {
        margin-top: 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #51525C;
      }
    }
  }
}


</style>