<template>
    <div id="home-page">
        <img class="home-banner" src="../assets/home-banner.png">
        <div class="panel panel-1">
            <div class="panel-body">
                <h3 class="panel-title">国内首家独立第三方企业资产证券化服务商</h3>
                <p>
                    平台基于一套网上签约和合同管理系统，平台与中国人民银行下属的国家级权威安全认证机构——中国金融认证中心（简称CFCA）对接合作平台所提供的电子合同采用可靠的电子签名技术形成不可篡改的数据电文，能够保证其过程的公正性和结果的有效性
                </p>
                <div class="icons clearfix">
                    <div class="card">
                        <i class="panel-icon icon-1"></i>
                        <p>第三方合同监管</p>
                    </div>
                    <div class="card">
                        <i class="panel-icon icon-2"></i>
                        <p>资产收益权转让</p>
                    </div>
                    <div class="card">
                        <i class="panel-icon icon-3"></i>
                        <p>应收账款转让</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="panel panel-2">
            <div class="panel-body">
                <h3 class="panel-title">强大的安全策略</h3>
                <div class="surround">
                    <div class="sur-part top">
                        <h4>安全合规的云部署环境</h4>
                        <p>基于用户的数据隐私保护，和针对传统互联网和硬件设备的安全，云库汇平台的应用及数据库均部署在阿里金融云中。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-footer">
            版权所有  ©  2017 云库汇（北京）金融服务外包有限公司  京ICP备16000243号
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    #home-page {
        width: 100%;
        .home-banner {
            width: 100%;
        }
        .home-footer {
            height: 40px;
            background-color: #e3e3e3;
            text-align: center;
            font-size: 12px;
            line-height: 40px;
        }
        .panel {
            width: 100%;
            .panel-body {
                width: 940px;
                margin: auto;
                padding: 124px 0;
            }
            .panel-title {
                font-size: 30px;
                text-align: center;
                font-weight: normal;
                color: #333;
                margin-top: 0;
            }
            & > p {
                font-size: 15px;
                text-align: center;
                color: #666;
            }
            .panel-icon {
                display: block;
                height: 150px;
                width: 100%;
                background-repeat: no-repeat;
                background-position: center;
                &.icon-1 {
                    background-image: url(../assets/home-panel-icon-1.png);
                    background-size: 123px 123px;
                }
                &.icon-2 {
                    background-image: url(../assets/home-panel-icon-2.png);
                    background-size: 123px 133px;
                }
                &.icon-3 {
                    background-image: url(../assets/home-panel-icon-3.png);
                    background-size: 123px 123px;
                }
            }
            &.panel-1 {
                .icons {
                    margin-top: 140px;
                    .card {
                        float: left;
                        width: 33.3333%;
                        text-align: center;
                        p {
                            color: #666;
                            font-size: 18px;
                        }
                    }
                }
            }
            &.panel-2 {
                background-color: #f0f0f0;
                .surround {
                    height: 480px;
                    width: 100%;
                    background: url(../assets/home-panel-surround.png) no-repeat center / 471px 476px;
                    margin-top: 90px;
                    position: relative;
                    .sur-part {
                        position: absolute;

                        h4 {
                            font-size: 16px;
                            color: #32a8e2;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 10px;
                            text-align: center;
                        }
                        p {
                            font-size: 12px;
                            color: #999;
                            margin: 0;
                            text-align: center;
                        }
                        &.top {
                            width: 340px;
                            top:0;
                            left: calc(50% - 170px);
                        }
                    }
                }
            }

        }
    }
</style>
