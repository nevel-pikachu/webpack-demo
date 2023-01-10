<template>
    <div class="header_section header ">
        <div class="header__menu menu" @click="handleClickMenu">
            <!-- <img src="_nuxt/assets/images/menu.svg"/> -->
        </div>
        <div class="menu_expand" :class="{ active: this.enableMenu}">
            <div class="dropdown menu__item">
                <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    Giao dịch
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div class="dropdown menu__item">
                <div
                    class="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                   Hỗ trợ
                </div>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
        <div class="header__logo logo">
            <nuxt-link to="/">
                <span class="logo__content">VinEX</span>
            </nuxt-link>
        </div>
        
        <div class="header__action action">
            <button class="action__wallet_linked">
                Liên kết ví
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            enableMenu: false,
        }
    },
    methods: {
        handleClickMenu() {
            this.enableMenu = !this.enableMenu;
        }
    }
}
</script>

<style scoped lang="scss">
    .header_section {
        position: relative;
        display: flex;
        padding: 16px 0px 16px 16px;
    }   
    .header {
        &__logo {
            flex: 1;
            width: 122px;
            height: 32px;
        }
        
        .logo {
            &__content {
                font-size: 24px;
                color: #FAAC2E;
            }   
        }

        &__menu {
            max-width: 24px;
            margin-top: 6px;
            margin-right: 4px;
            cursor: pointer;
        }

        &__action {
            flex: 1;
        }
        .action {
            &__wallet_linked {
                width: 120px;
                height: 30px;
                background-color: #FAAC2E;
                border-radius: 8px;
                color: #FFFFFF;
                &:hover,
                &:focus {
                    animation: pulse 1s;
                    box-shadow: 0 0 0 2em transparent;
                }
            }
        }

        .menu_expand {
            position: absolute;
            top: 44px;
            left: 12px;
            display: none;
            width: 100px;
            height: auto;
            transition: 1s linear;
            background: #FAFAFA;
            &.active {
                display: block;
            }

            .menu__item {
                margin: 12px 12px;
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