<template>
    <div id="feature">
        <div class="banner">
            <h2 class="banner-title">平台功能</h2>
        </div>
        <!--<img class="banner-img" src="../assets/feature-banner.png">-->

        <div class="feature-list clearfix">
            <div class="fl">
                <i class="fl-icon icon-1"></i>
                <h4>资产端功能</h4>
                <p>1、可获得平台提供的大量制式法律合同文本也可采用企业个性化制式模板通过平台完成有效网签、合同管理。</p>
                <p>2、快速完成合同数据采集、数据统计、应收应付款项梳理，合同执行情况、合同项下结算款项、应收应付账期等。</p>
                <p>3、平台对接银行支付、存管业务，提供资金划付、代收代扣服务，方便签约各方合同项下的资金流转。</p>
                <p>4、平台通过对接大量资金端用户，为合同项下合格基础资产提供企业ABS融资服务。</p>
            </div>
            <div class="fl">
                <i class="fl-icon icon-2"></i>
                <h4>资金端功能</h4>
                <p>1、零成本获得平台提供的大量优质基础资产。</p>
                <p>2、可对拟融资的基础资产（包括合同及企业基础资料等）进行前置风险审查。</p>
                <p>3、融资完成后通过平台提供交易项下现金流监管服务、第三方监管报告等，使资金端用户的投后监管工作更有效率且更加完善</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'feature',
        data () {
            return {
                msg: 'Feature'
            }
        },
        mounted: () => {
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    #feature {
        width: 100%;
    }

    .banner {
        background: url(../assets/feature-banner.png) no-repeat center  / cover;
    }

    .feature-list {
        width: 842px;
        margin: auto;
        .fl {
            margin-top: 90px;
            float: left;
            width: 50%;
            &:first-child {
                padding-right: 60px;
            }
            &:last-child {
                padding-left: 60px;
            }
            .fl-icon {
                display: block;
                width: 100%;
                &.icon-1 {
                    margin-top: 13px;
                    height: 116px;
                    background: url(../assets/feature-icon-1.png) no-repeat center / 193px 116px;
                }
                &.icon-2 {
                    height: 129px;
                    background: url(../assets/feature-icon-2.png) no-repeat bottom / 193px 129px;
                }
            }
        }
        h4 {
            font-size: 18px;
            color: #333;
            margin-top: 50px;
        }
        p {
            margin: 0;
            font-size: 14px;
            color: #666;
        }
    }
</style>