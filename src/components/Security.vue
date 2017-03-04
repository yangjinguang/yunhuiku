<template>
    <div id="security">
        <img class="banner-img" src="../assets/security-banner.png">
        <h2 class="banner-title">网站安全策略</h2>
        <div class="panel panel-1">
            <div class="panel-body clearfix">
                <div class="panel-icon-part pull-left">
                    <i class="panel-icon"></i>
                </div>
                <div class="panel-content pull-right">
                    <h3>安全合规的云部署环境</h3>
                    <p>1、基于用户的数据隐私保护，和针对传统互联网和硬件设备的安全，云库汇平台的应用及数据库均部署在阿里金融云中。</p>
                    <p> 2、阿里金融云是服务于银行、证券、保险、基金等金融机构的行业云，采用独立的机房集群提供满足三行一会监管要求的云产品，并为金融客户提供更加专业周到的服务。</p>
                    <p> 3、金融云按照人民银行和银监会的合规标准建设，在安全性、服务可用性和数据可靠性等方面作了大幅增强。</p>
                </div>
            </div>

        </div>
        <div class="panel panel-2">
            <div class="panel-body clearfix">
                <div class="panel-icon-part pull-right">
                    <i class="panel-icon"></i>
                </div>
                <div class="panel-content pull-left">
                    <h3>高安全性、高可用性和高可靠性</h3>
                    <p>1、数据副本，最大限度的确保数据库可用性，具有优良的性能和可靠性。</p>
                    <p>2、业务部署模式：相同的业务应用分别部署在阿里云两个节点（杭州和青岛），生产中心处于Active模式，灾备中心处于Standby模式。</p>
                    <p>3、数据复制方式：金融云RDS通过秒级准实时数据异地单向复制，将业务数据从生产中心传至灾备中心。OSS通过分钟级数据异地单向复制，将文件数据从生产中心传至灾备中心。</p>
                    <p>4、故障切换方式：通过DNS将应用IP从原生产中心修改到灾备中心，实现故障切换和服务恢复机制主站发生故障时，由备站继续提供服务。</p>
                </div>
            </div>
        </div>
        <div class="panel panel-3 clearfix">
            <div class="panel-body clearfix">
                <div class="panel-icon-part pull-left">
                    <i class="panel-icon"></i>
                </div>
                <div class="panel-content pull-right">
                    <h3>行业标准的网站安全解决方案</h3>
                    <p>1、基于Symantec SSL Certificate（赛门铁克 SSL，前身为 VeriSign）产品的标准SSL加密（https访问）方式，保证用户数据传输的安全。</p>
                    <p>2、互联网上最受认可的信任标记 Norton Secured Seal（诺顿安全认证签章）以及恶意软件扫描，保证网站真实性和安全性。</p>
                </div>
            </div>
        </div>
        <div class="panel panel-4 clearfix">
            <div class="panel-body clearfix">
                <div class="panel-icon-part pull-right">
                    <i class="panel-icon"></i>
                </div>
                <div class="panel-content pull-left">
                    <h3>与CFCA合作的数字证书服务</h3>
                    <p>1、与CFCA（中国金融认证中心）合作，为客户提供数字证书的注册审核、发放使用服务。</p>
                    <p>
                        2、基于CFCA提供的技术服务，保证客户的数字证书在现有技术条件下不会被伪造、篡改。在客户使用数字证书对交易/合同信息进行加密和签名的条件下，保证交易/合同信息对无关者是保密的，保证交易/合同信息的完整性、抗抵赖性。
                    </p>
                </div>
            </div>
        </div>
        <div class="panel panel-5 clearfix">
            <div class="panel-body clearfix">
                <div class="panel-icon-part pull-left">
                    <i class="panel-icon"></i>
                </div>
                <div class="panel-content pull-right">
                    <h3>应用安全设计</h3>
                    <p>1、简洁明了的企业内多用户及权限管理功能使企业客户可以方便的管理内部用户，控制业务权限，避免业务数据的无意泄露。</p>
                    <p>2、敏感操作的短信/数字证书验证机制，避免误操作/恶意操作对用户造成损失。</p>
                    <p>3、对敏感数据（如用户密码、合同文件等）进行加密存储，从技术层面确保用户数据安全。</p>
                    <p>4、完备的系统操作记录机制，便于追溯与跟踪。</p>
                    <p>5、完善的后台支持与客服功能，在发生意外时可以通过紧急处置将客户数据的损失降到最低。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'security',
        data () {
            return {
                msg: 'security'
            }
        },
        mounted: () => {
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    #security {
        width: 100%;
    }

    .panel {
        width: 100%;
        height: 478px;
        padding: 0 100px;
        .panel-icon {
            display: block;
            width: 100%;
            height: 100%;
        }
        .panel-body {
            width: 890px;
            height: 100%;
            margin: auto;
        }
        .panel-icon-part {
            height: 100%;
            width: 40%;
        }
        .panel-content {
            height: 100%;
            width: 60%;
            padding-top: 90px;
            h3 {
                margin-top: 0;
                font-size: 32px;
                font-family: 'PingFangSC-Light' !important;
                color: #333;
                font-weight: normal;
            }
            p {
                font-size: 14px;
                font-family: 'PingFangSC-Regular' !important;
                color: #666;
            }
        }
        &.panel-1 {
            .panel-icon {
                background: url(../assets/security-icon-1.png) no-repeat left / 287px 135px;
            }
        }
        &.panel-2 {
            background-color: #f0f0f0;
            .panel-icon {
                background: url(../assets/security-icon-2.png) no-repeat right / 282px 191px;
            }
        }
        &.panel-3 {
            .panel-icon {
                background: url(../assets/security-icon-3.png) no-repeat left / 261px 177px;
            }
            .panel-content {
                padding-top: 156px;
            }

        }
        &.panel-4 {
            background-color: #f0f0f0;
            .panel-icon {
                background: url(../assets/security-icon-4.png) no-repeat right / 249px 176px;
            }
            .panel-content {
                padding-top: 150px;
            }
        }
        &.panel-5 {
            .panel-icon {
                background: url(../assets/security-icon-5.png) no-repeat left / 211px 172px;
            }
        }
    }
</style>