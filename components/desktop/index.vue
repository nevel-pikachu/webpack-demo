<template>
  <div class="desktop_container">
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
import Header from '@/components/desktop/header'
import Footer from '@/components/desktop/footer'
import HomePageLanding from '@/components/desktop/landing'
import DiscoveryPage from '@/components/desktop/discovery'
import Reasonable from '@/components/desktop/reasonable'
import Trading from '@/components/desktop/trading'
import QAndA from '@/components/desktop/Q&A'
import TradeNow from '@/components/desktop/trade-now'


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
  .desktop_container {
    max-width: 1920px;
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