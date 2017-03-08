<template>
    <div id="about">
        <div class="banner">
            <h2 class="banner-title">关于我们</h2>
        </div>
        <div class="about-content">
            <p>
                云库汇（北京）金融服务外包有限公司，企业资产证券化专业服务商，由新华保险的创始人发起，以提供企业资产证券化专业服务为切入点，以构建企业资产证券化的互联网业务模式为依托，致力于提升企业资产证券化行业效率。使资产和资金以最高效的方式精准链接，使企业资产证券化以全新的互联网模式在金融创新中发挥更大的价值。
            </p>
            <p>
                云库汇企业ABS服务平台旨在为企业资产证券化参与方扫清障碍，搭建企业ABS底层资产与资金对接的云数据平台，通过金融科技手段有效减少基础资产信息不对称，致力成为企业资产证券化行业中最值得信赖的专业服务平台。
            </p>
            <p>
                云库汇与中国人民银行和国家信息安全管理机构批准成立的
                国家级权威安全认证机构，中国金融认证中心（简称CFCA）合作，建立独立的第三方电子签约平台（电子合同服务提供商）。在所提供的电子合同订立系统中所订立的合同采用可靠的电子签名技术形成不可篡改的数据电文，能够保证其过程的公正性和结果的有效性。依据电子合同以及电子签章的相关法律，保障电子合同的合法性，维护缔约方的合法权益。
            </p>
            <hr>
            <div class="panel">
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
                    <div class="body-right">
                        <div id="baidu-map-div">
                            <div id="baidu-map"></div>
                        </div>
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
            var map = new BMap.Map("baidu-map", {enableMapClick: false});          // 创建地图实例
            var point = new BMap.Point(116.46709, 39.919541);  // 创建点坐标
            map.centerAndZoom(point, 16);                 // 初始化地图，设置中心点坐标和地图级别
            map.addOverlay(new BMap.Marker(point));
            document.getElementById('baidu-map-div').scrollTop = 10;
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
        width: 774px;
        margin: auto;
        font-family: 'PingFangSC-Light';
        font-size: 16px;
        margin-top: 68px;
        p:first-child {
            margin-top: 0;
        }
        p:last-child {
            margin-bottom: 0;
        }
        hr {
            color: rgb(230, 230, 230);
            margin-top: 120px;
        }
        .panel {
            .panel-body {
                width: 808px;
                padding: 50px 0;
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
</style>