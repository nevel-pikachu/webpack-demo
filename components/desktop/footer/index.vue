<template>
    <div class="footer_section">
        <div class="footer_section__item">
            <div class="title">Về chúng tôi</div>
            <div class="label" v-for="about in aboutUsList">
                <nuxt-link :to="about.link"> {{ about.label }}</nuxt-link>
            </div>
        </div>
        <div class="footer_section__item">
            <div class="title">Sản phẩm</div>
            <div class="label" v-for="product in productList" >
                <nuxt-link :to="product.link"> {{ product.label }}</nuxt-link>
            </div>
        </div>
        <div class="footer_section__item">
            <div class="title">Dịch vụ</div>
            <div class="label" v-for="service in serviceList">
                <nuxt-link :to="service.link"> {{ service.label }}</nuxt-link>
            </div>
        </div>
        <div class="footer_section__item">
            <div class="title">Hỗ trợ</div>
            <div class="label" v-for="support in supportList">
                <nuxt-link :to="support.link"> {{ support.label }}</nuxt-link>
            </div>
        </div>
    </div>
    <div class="end_footer">VinEX © 2022</div>
</template>

<script>
import aboutus from '@/static/footer/aboutus.json'
import products from '@/static/footer/products.json'
import service from '@/static/footer/service.json'
import support from '@/static/footer/support.json'
export default {
    setup() {
        const aboutUsList = aboutus;
        const productList = products;
        const serviceList = service;
        const supportList = support;

        return {
            aboutUsList,
            productList,
            serviceList,
            supportList
        }
    },
}
</script>

<style scoped lang="scss">
    .footer_section {
        display: flex;
        justify-content: space-between;
        padding: 10px 280px;
        margin-top: 64px;
        &__item {
            .title {
                margin-bottom: 8px;
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: 0em;
            }
            .label {
                margin-bottom: 8px;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0em;

                a {
                    color: #A0A0AB;

                    &:hover {
                    color: #5252ff;
                }
                }
            }
        }
    }
    .end_footer {
        margin-top: 42px;
        text-align: center;
        padding: 10px 0;
        border-top: 0.5px solid rgba(160,160,171, 0.2)
    }
</style>