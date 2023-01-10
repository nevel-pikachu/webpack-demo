<template>
    <div class="header_section header">
        <div class="header__logo logo">
            <nuxt-link to="/">
                <span class="logo__content">VinEX</span>
            </nuxt-link>
        </div>
        <div class="header__menu menu">
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
        <div class="header__action action" @click="handleTestPinia">
            <button class="action__wallet_linked">
                Liên kết ví
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleTestPinia() {
            this.$router.replace("/test")
        }
    }
}
</script>

<style scoped lang="scss">
    .header_section {
        display: flex;
        padding: 16px 20px;
    }   
    .header {
        &__logo {
            width: 130px;
            height: 32px;
        }
        
        .logo {
            &__content {
                font-size: 42px;
                color: #FAAC2E;
            }
        }

        &__menu {
            display: flex;
            flex: 5;
            padding-top: 16px;
        }

        .menu {
            &__item {
                margin-left: 12px;
            }
        }

        &__action {
            flex: 1;
        }
        .action {
            display: flex;
            justify-content: right;
            
            &__wallet_linked {
                width: 160px;
                height: 48px;
                background-color: #FAAC2E;
                border-radius: 8px;
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