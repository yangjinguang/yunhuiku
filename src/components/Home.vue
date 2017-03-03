<template>
    <div id="home-page">
        <div class="home-banner">
            <img class="home-banner-img" src="../assets/home-banner.png">
            <div class="home-banner-opt">
                <div class="home-banner-word-bg">
                    <img class="home-banner-word" src="../assets/home-banner-word.png">
                </div>
                <button>企业用户登录</button>
                <button>经纪人用户登录</button>
                <button>个人用户登录</button>
            </div>
        </div>
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
                        <p>基于用户的数据隐私保护，和针对传统互联网和硬件设备的安</p>
                        <p>全，云库汇平台的应用及数据库均部署在阿里金融云中。</p>
                    </div>
                    <div class="sur-part left-top">
                        <h4>诺顿安全认证签章</h4>
                        <p>互联网上最受认可的信任标记 Norton Secured Seal</p>
                        <p>（诺顿安全认证签章）以及恶意软件扫描，保证网站真实性和安全性。</p>
                    </div>
                    <div class="sur-part left-bottom">
                        <h4>与CFCA合作的数字证书服务</h4>
                        <p>与CFCA（中国金融认证中心）合作，为客户提供</p>
                        <p>（数字证书的注册审核、发放使用服务。</p>
                    </div>
                    <div class="sur-part bottom">
                        <h4>应用安全设计</h4>
                        <p>业务权限控制、敏感操作认证、敏感数据加密、</p>
                        <p>完备的操作纪录</p>
                    </div>
                    <div class="sur-part right-bottom">
                        <h4>SSL网络数据传输加密</h4>
                        <p>基于Symantec SSL Certificate产品的标准SSL加密</p>
                        <p>（https访问）方式，保证用户数据传输的安全。</p>
                    </div>
                    <div class="sur-part right-top">
                        <h4>高安全性、高可用性和高可靠性</h4>
                        <p>基于阿里金融云的合规环境，遵循人民银行和银监会的</p>
                        <p>合规标准建设</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-3">
            <img src="../assets/home-about.png">
            <div class="panel-body clearfix">
                <div class="body-left">
                    <h3>联系我们</h3>
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
                <div class="body-right" >
                    <div id="baidu-map-div">
                        <div id="baidu-map"></div>
                    </div>
                </div>
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
            var map = new BMap.Map("baidu-map", {enableMapClick: false});          // 创建地图实例
            var point = new BMap.Point(116.46709, 39.919541);  // 创建点坐标
            map.centerAndZoom(point, 16);                 // 初始化地图，设置中心点坐标和地图级别
            map.addOverlay(new BMap.Marker(point));
            document.getElementById('baidu-map-div').scrollTop=10;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
    #home-page {
        width: 100%;
        .home-banner {
            width: 100%;
            position: relative;
            .home-banner-word-bg {
                width: 100%;
                margin-bottom: 40px;
            }
            .home-banner-img {
                width: 100%;
            }
            .home-banner-opt {
                position: absolute;
                width: 100%;
                left: 0;
                top: 200px;
                text-align: center;
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
                    &:last-child{
                        margin-right: 0;
                    }

                }
            }
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
                            top: 0;
                            left: calc(50% - 170px);
                        }
                        &.left-top {
                            left: 0;
                            top: 115px;
                        }
                        &.left-bottom {
                            left: 22px;
                            bottom: 107px;
                        }
                        &.bottom {
                            bottom: 20px;
                            left: calc(50% - 126px);
                        }
                        &.right-bottom {
                            right: 50px;
                            bottom: 107px;
                        }
                        &.right-top {
                            right: -8px;
                            top: 115px;
                        }
                    }
                }
            }
            &.panel-3 {
                img {
                    width: 100%;
                }
                .panel-body {
                    width: 808px;
                    padding: 80px 0;
                    font-family: "PingFangSC-Regular";
                }
                h3 {
                    font-size: 30px;
                    font-weight: normal;
                    color: #333;
                }
                p {
                    font-size: 16px;
                    color: #333;
                }
                .body-left {
                    float: left;
                    h3 {
                        margin-top: 0;
                    }
                    p {
                        span:first-child {
                            margin-right: 10px;
                        }
                    }
                }
                .body-right {
                    float: right;
                    #baidu-map-div {
                        width: 270px;
                        height: 160px;
                        overflow: hidden;
                        border-radius: 4px;
                        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
                        #baidu-map {
                            width: 270px;
                            height: 200px;
                        }
                    }

                }

            }
        }
    }
</style>
