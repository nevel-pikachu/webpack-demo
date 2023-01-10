<template>
  <div class="mobile_container">
  <Header />
  <DiscoveryPage />
  <Reasonable />
  <Trading />
  <QAndA />
  <TradeNow />
  <HomePageLanding /> 
  <Footer />
  </div>
</template>

<script>
import Header from '@/components/mobile/header'
import Footer from '@/components/mobile/footer'
import HomePageLanding from '@/components/mobile/landing'
import DiscoveryPage from '@/components/mobile/discovery'
import Reasonable from '@/components/mobile/reasonable'
import Trading from '@/components/mobile/trading'
import QAndA from '@/components/mobile/Q&A'
import TradeNow from '@/components/mobile/trade-now'


export default {
  components: {
      Header,
      Footer,
      DiscoveryPage,
      Reasonable,
      Trading,
      QAndA,
      TradeNow,
      HomePageLanding,
  },
  name: "index"
}
</script>

<style scoped lang="scss">
.mobile_container {
  max-width: 375px;
  position: relative;
  margin: 0 auto;
  font-family: 'RoRoboto';
  -webkit-user-select: none;
  user-select: none;
  .container {
    max-width: 1320px;
    margin: 0 auto;
  }
}
</style>