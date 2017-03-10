<template>
    <div id="home-page">
        <div class="home-banner">
            <!--<img class="home-banner-img" src="../assets/home-banner.png">-->
            <div class="home-banner-opt">
                <div class="home-banner-word-bg">
                    <img class="home-banner-word" src="../assets/home-banner-word.png">
                </div>
                <button @click="toLogin(0)">企业用户登录</button>
                <button @click="toLogin(1)">会员用户登录</button>
                <button @click="toLogin(2)">个人用户登录</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Home'
            }
        },
        mounted: () => {
        },
        methods: {
            toLogin: (type) => {
                let url;
                switch (type) {
                    case 0:
                        url = '/static/login/companyLogin.html';
                        break;
                    case 1:
                        url = '/static/login/agentLogin.html';
                        break;
                    case 2:
                        url = '/static/login/personLogin.html';
                        break;
                }
                window.open(url);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    #home-page {
        width: 100%;
        height: 100%;
        .home-banner {
            width: 100%;
            position: absolute;
            height: calc(100% - 40px);
            left: 0;
            background: url(../assets/home-banner.png) no-repeat center / cover;
            .home-banner-opt {
                position: absolute;
                width: 100%;
                left: 0;
                top: calc(50% - 97px);
                text-align: center;
                .home-banner-word-bg {
                    width: 100%;
                    margin-bottom: 70px;
                }
                .home-banner-word {
                    width: 500px;
                }
                button {
                    background-color: rgb(50, 168, 226);
                    height: 38px;
                    width: 150px;
                    line-height: 38px;
                    border-radius: 2px;
                    color: #fff;
                    font-size: 15px;
                    margin-right: 40px;
                    &:last-child {
                        margin-right: 0;
                    }

                }
            }
        }
    }
</style>
