<template>
    <div id="about">
        <div class="banner">
            <h2 class="banner-title">关于我们</h2>
        </div>
        <div class="about-content">
            <h4 class="ac-title">国内首家独立第三方企业资产证券化专业服务商</h4>
            <div class="about-info">
                <img style="float: left" src="../assets/about-img-1.png">
                <p>
                    云库汇是中国领先企业资产证券化专业服务商，致力于构建企业资产证券化业务的互联网模式，搭建企业资产证券化底层资产与资金对接的云数据平台，汇聚优质企业ABS资产，提供电子合同、电子台账、信息穿透、基础资产筛选、基础资产监管报告、ABS专业培训、交易撮合，量化分析，等专业服务。解决基础资产信息不对称、业务周期长、存续期管理手段匮乏等问题，智能匹配供需双方需求，促进资产证券化市场健康发展。致力成为企业资产证券化行业中最值得信赖的科技金融服务平台。
                </p>
                <p>
                    云库汇与中国人民银行和国家信息安全管理机构批准成立的国家级权威安全认证机构，中国金融认证中心（简称CFCA）合作，建立独立的第三方电子签约平台（电子合同服务提供商）。在所提供的电子合同订立系统中所订立的合同采用可靠的电子签名技术形成不可篡改的数据电文，能够保证其过程的公正性和结果的有效性。依据电子合同以及电子签章的相关法律，保障电子合同的合法性，维护缔约方的合法权益。
                </p>
            </div>
            <div class="panel">
                <div class="panel-body clearfix">
                    <div class="body-left">
                        <h3>联系我们</h3>
                        <h4>云库汇（北京）金融服务外包有限公司</h4>
                        <p>
                            <span>市场合作</span>
                            <span>market@yunkuhui.com</span>
                        </p>
                        <p>
                            <span>客户服务</span>
                            <span>service@yunkuhui.com</span>
                        </p>
                        <p>
                            <span>办公地址</span>
                            <span>北京市朝阳区光华路1号嘉里中心北楼25层 2510室</span>
                        </p>
                    </div>
                    <div class="body-right">
                        <i class="about-qr"></i>
                        <p>关注企业ABS ，关注最新资讯</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'about',
        data () {
            return {
                msg: 'About'
            }
        },
        mounted: () => {

        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    #about {
        width: 100%;
    }

    .banner {
        background: url(../assets/about-banner.png) no-repeat center / cover;
    }

    .about-content {
        width: 783px;
        margin: auto;
        font-family: 'PingFangSC-Light';
        font-size: 16px;
        margin-top: 68px;
        .ac-title {
            font-size: 24px;
            text-align: center;
        }
        .about-info {

            img {
                float: left;
                width: 350px;
                height: 262px;
                padding: 20px;
                padding-top: 0;
                padding-left: 0;
                padding-bottom: 0;
            }
            p {
                font-size: 16px;
                text-indent: 2em;
                line-height: 1.9em;
                margin: 0;
            }

        }
        .panel {
            margin-top: 48px;
            border-top: 1px solid rgb(230, 230, 230);
            .panel-body {
                width: 808px;
                padding: 50px 0;
                font-family: "PingFangSC-Regular";
                color: #333;
            }

            .body-left {
                float: left;
                h3 {
                    font-size: 30px;
                    font-weight: normal;
                    font-family: "PingFangSC-Light";
                    margin-top: 0;
                    margin-bottom: 24px;
                }
                h4 {
                    font-size: 15px;
                    margin: 0;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 14px;
                    font-family: "PingFangSC-Light";
                    span:first-child {
                        margin-right: 10px;
                    }
                    margin-top: 0;
                    margin-bottom: 12px;
                }
            }
            .body-right {
                float: right;
                .about-qr {
                    display: block;
                    background: url(../assets/about-qr.jpg) no-repeat center / 180px 180px;
                    height: 160px;
                    width: 160px;
                    margin-bottom: 10px;
                }
                p {
                    margin: 0;
                    font-size: 12px;
                }
            }

        }
    }
</style>