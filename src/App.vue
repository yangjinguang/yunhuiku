<template>
    <div id="app">
        <div class="header clearfix">
            <i class="icon-logo"></i>
            <ul>
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                <li>
                    <router-link to="/feature">平台功能</router-link>
                </li>
                <li>
                    <router-link to="/security">安全策略</router-link>
                </li>
                <li>
                    <router-link to="/about">关于我们</router-link>
                </li>
                <li>
                    <router-link to="/help">帮助中心</router-link>
                </li>
            </ul>
        </div>
        <div class="app-body">
            <router-view></router-view>
        </div>
        <div class="footer">
            版权所有  ©  2017 云库汇（北京）金融服务外包有限公司  京ICP备16000243号
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    html, body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;

    }

    body {
        overflow: auto;
    }

    * {
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button {
        box-shadow: none;
        border: none;
        outline: none;
        padding: 0 10px;
        cursor: pointer;
        user-select: none;
    }

    .clearfix:after {
        clear: both;
        content: "";
        display: block;
    }

    .pull-left {
        float: left;
    }

    .pull-right {
        float: right;
    }

    .icon-logo {
        display: block;
        width: 210px;
        height: 37px;
        background: url(./assets/logo.png) no-repeat center / 210px 37px;
    }

    .header {
        position: absolute;
        top: 40px;
        padding: 0 65px;
        width: 100%;
        left: 0;
        z-index: 10;
        .icon-logo {
            float: left;
        }
        ul {
            float: right;
            li {
                display: inline-block;
                padding: 0 20px;
                a {
                    display: block;
                    height: 37px;
                    color: #fff;
                    text-decoration: none;
                    &.router-link-active {
                        border-bottom: 4px solid #fff;
                    }
                }
            }
        }
    }
    .app-body {
        min-height: calc(100% - 40px);
    }
    .footer {
        height: 40px;
        background-color: #e3e3e3;
        text-align: center;
        font-size: 12px;
        line-height: 40px;
    }

    #app {
        font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
    }
</style>
