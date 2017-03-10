<template>
    <div id="help">
        <div class="banner"></div>
        <div class="help-body">
            <div class="help-nav">
                <ul>
                    <li>
                        <router-link to="/help/1">常见问题</router-link>
                    </li>
                    <li>
                        <router-link to="/help/2">许可协议</router-link>
                    </li>
                    <li>
                        <router-link to="/help/3">隐私政策</router-link>
                    </li>
                </ul>
            </div>
            <div class="help-list" v-if="$route.params.tab ==1">
                <ul>
                    <li>
                        <h4 class="help-question" @click="showAnswer(1)">
                            1、电子合同是否有法律效力？
                            <i class="help-question-icon"
                               :class="[answerShow[1]?'icon-1':'icon-2']">
                            </i>
                        </h4>
                        <div class="help-answer" v-if="answerShow[1]">
                            <p>
                                答：《中华人民共和国电子签名法》第三条规定：“民事活动中的合同或者其他文件、单证等文书，当事人可以约定使用或者不使用电子签名、数据电文。当事人约定使用电子签名、数据电文的文书，不得仅因为其采用电子签名、数据电文的形式而否定其法律效力。”第十四条规定：“可靠的电子签名与手写签名或者盖章具有同等的法律效力。”
                            </p>
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;在签订电子合同时使用可靠电子签名可以说是整个缔约过程中最核心的部分，这里的电子签名不是水印或图章，而是一种采用数字证书的技术手段。使用电子签名技术能够保证了合同签订、传输、存储的安全和有效性，由于使用了可靠的电子签名技术，出现纠纷时，这样一份有效的电子合同具有法律效力，并能够作为呈堂证供。
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(2)">
                            2、什么是可靠电子签名？
                            <i class="help-question-icon"
                               :class="[answerShow[2]?'icon-1':'icon-2']">
                            </i></h4>
                        <div class="help-answer" v-if="answerShow[2]">
                            <p>答：《中华人民共和国电子签名法》第十三条规定：</p>

                            <p>电子签名同时符合下列条件的，视为可靠的电子签名：</p>

                            <ol>
                                <li>（一）电子签名制作数据用于电子签名时，属于电子签名人专有；</li>
                                <li>（二）签署时电子签名制作数据仅由电子签名人控制；</li>
                                <li>（三）签署后对电子签名的任何改动能够被发现；</li>
                                <li>（四）签署后对数据电文内容和形式的任何改动能够被发现。</li>
                            </ol>
                            <p>CFCA是合法的第三方电子认证服务机构，其发放的数字证书完全符合可靠电子签名的条件。</p>
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(3)">
                            3、是否所有合同都可以采用电子签名的方式签署？
                            <i class="help-question-icon"
                               :class="[answerShow[3]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[3]">
                            <p>答：不是。《中华人民共和国电子签名法》第三条规定电子签名不适用于以下四种情形：</p>
                            <ol>
                                <li>（一）涉及婚姻、收养、继承等人身关系的；</li>
                                <li>（二）涉及土地、房屋等不动产权益转让的；</li>
                                <li>（三）涉及停止供水、供热、供气、供电等公用事业服务的；</li>
                                <li>（四）法律、行政法规规定的不适用电子文书的其他情形。</li>
                            </ol>
                            <p>除以上四种情形，大部分合同均可使用电子签名方式签署，并与手写签名或者盖章具有同等的法律效力。</p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(4)">
                            4、什么是数字证书？
                            <i class="help-question-icon"
                               :class="[answerShow[4]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[4]">
                            <p>
                                答：数字证书是一段包含用户身份信息、用户公钥信息以及身份验证机构数字签名的数据。身份验证机构的数字签名可以确保证书信息的真实性，用户公钥信息可以保证数字信息传输的完整性，用户的数字签名可以保证数字信息的不可否认性。
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(5)">
                            5、什么是CFCA认证？
                            <i class="help-question-icon"
                               :class="[answerShow[5]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[5]">
                            <p>
                                答：采用中国人民银行（PBC）批准，并由中国金融认证中心（China Financial Certification
                                Authority)建立的CFCA证书注册审核系统。具有防伪造、防篡改、防抵赖等安全特色，并具有极强的权威保障性。
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(6)">
                            6、我在云库汇上签署合同安全吗？
                            <i class="help-question-icon"
                               :class="[answerShow[6]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[6]">
                            <p>
                                答：安全。您在云库汇平台上签署的所有合同采用基于Symantec SSL Certificate（赛门铁克 SSL，前身为
                                VeriSign）产品的标准SSL加密（https访问）方式，保证用户数据传输的安全。同时服务存储采用满足一行三会监管要求的金融云，从部署上保证合同安全，只有合同参与方才有权限查看您的合同内容。且电子签名使得您签署的合同具备防篡改的特征，保障了合同的真实性。
                                在物理上，我们通过异地双中心、多备份等策略确保服务及数据存储的安全。
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(7)">
                            7、企业账户和个人账户的主要区别是什么？
                            <i class="help-question-icon"
                               :class="[answerShow[7]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[7]">
                            <p>答：</p>
                            <p>
                                a）企业账户注册信息需要提交企业三证（或三证合一）、法人代表信息、联系人信息及企业服务授权书，审核通过后由云库汇向企业发放存有企业用数字证书的UKey。如审核未通过可在企业基本信息管理页面查看未通过原因，根据客服意见修改审核材料，并重新提交审核；
                            </p>
                            <p>
                                b）个人账户注册需提交个人身份信息，实名认证成功后平台自动颁发个人用数字证书。如认证未通过可在个人信息管理页面查看未通过原因，根据客服意见修改认证信息，并重新提交认证。
                            </p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(8)">
                            8、数字证书即将到期怎么办？
                            <i class="help-question-icon"
                               :class="[answerShow[8]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[8]">
                            <p>答：</p>
                            <p> a）企业用户可联系云库汇代为更新数字证书；</p>
                            <p>b）个人用户可登录平台，可登录平台，在个人信息管理页面中在线完成证书更新。</p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(9)">
                            9、为什么不能预览合同？
                            <i class="help-question-icon"
                               :class="[answerShow[9]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[9]">
                            <p>答：建议解决办法：</p>
                            <p>a）合同文件为pdf格式，建议安装Adobe Reader后预览；</p>
                            <p>b）在网络顺畅的环境下查看合同。</p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(10)">
                            10、如何修改企业信息？
                            <i class="help-question-icon"
                               :class="[answerShow[10]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[10]">
                            <p>答：您可以在企业基本信息管理页面中修改，修改后需提交审核。</p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(11)">
                            11、如何修改个人信息？
                            <i class="help-question-icon"
                               :class="[answerShow[11]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[11]">
                            <p>答：您可以个人信息管理页面中修改您的信息并保存。</p>
                        </div>
                    </li>
                    <li>
                        <h4 class="help-question" @click="showAnswer(12)">
                            11、如何拒绝接收消息提醒？
                            <i class="help-question-icon"
                               :class="[answerShow[12]?'icon-1':'icon-2']">
                            </i></h4>
                        </h4>
                        <div class="help-answer" v-if="answerShow[12]">
                            <p>答：您可以在个人信息管理页面中勾选是否接收短信提醒或邮件提醒。</p>
                        </div>
                    </li>

                </ul>
            </div>
            <div class="help-list" v-if="$route.params.tab ==2">
                <div class="agreement">
                    <p style="text-align: center; font-size: 20px; font-weight: bold;">最终用户许可协议</p>
                    <p>
                        感谢您使用云库汇企业资产证券化服务平台（简称“本平台”）。本平台是由云库汇（北京）金融服务外包有限公司（简称“本公司”）设计、运营的。本最终用户许可协议（简称“本条款”）是您和本公司之间的法律协议。在遵守本条款规定的前提下，您有权使用本平台。如您接受本条款并使用本平台，则您必须同时接受该“其他公开规则”，包括但不限于：
                        <router-link to="/help/3">《隐私政策》</router-link>
                    </p>
                    <p>本条款自您注册成功之日起在您与本公司之间产生法律效力。</p>
                    <p>第一条 本平台简介</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;云库汇（北京）金融服务外包有限公司，企业资产证券化专业服务商，由新华保险的创始人发起，以提供企业资产证券化专业服务为切入点，以构建企业资产证券化的互联网业务模式为依托，致力于提升企业资产证券化行业效率。使资产和资金以最高效的方式精准链接，使企业资产证券化以全新的互联网模式在金融创新中发挥更大的价值。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;云库汇企业ABS服务平台旨在为企业资产证券化参与方扫清障碍，搭建企业ABS底层资产与资金对接的云数据平台，通过金融科技手段有效减少基础资产信息不对称，致力成为企业资产证券化行业中最值得信赖的专业服务平台。</p>
                    <p>第二条 用户身份保证</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;2-1
                        您承诺并保证自己是具有完全民事行为能力和完全民事权利能力的自然人。您在此保证所填写的用户信息是真实、准确、完整、及时的，并且没有任何引人误解或者虚假的陈述，且保证本公司可以通过您所填写的联系方式与您取得联系。</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;2-2 您应根据本公司对于相关服务的要求及时提供相应的身份证明等资料，否则本公司有权拒绝向您提供相关服务。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;2-3 您承诺将及时更新您的用户信息以维持该信息的有效性。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;2-4 如果您提供的资料或信息包含有不正确、不真实的信息，本公司保留取消您的用户资格并随时结束为您提供服务的权利。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;2-5
                        以代理人身份代理其他自然人进行用户注册时，您必须向本公司提供代理人和被代理人的详细资料和信息及书面授权文件，未向本公司提供上述资料信息及文件的，本公司将视注册者（代理人）为注册用户本人。
                    </p>
                    <p>第三条 企业用户特别条款
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;3-1 本条是针对企业用户的特别条款。本条的约定与本协议其他内容存在冲突的，以本条为准。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;3-2
                        企业用户可以在本平台的企业账户内自行创建多个企业内部用户。企业账户内的企业内部用户的部分操作，将被视为企业的行为（比如在本平台中与其他个人/企业用户签订合同等）。企业用户应谨慎确定与其他个人/企业用户的关联关系，谨慎管理企业内部用户及其操作权限。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;3-3
                        本公司非常重视对企业信息的安全保护。采用关键信息加密存储、信息通讯全程加密等多种技术手段和分级权限管理、关键操作验证（短信/U盾验证）等业务实现方案以保护信息安全，企业用户应当正确使用前述技术手段和方案，以共同保护企业信息的机密性、完整性和可用性。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;3-4
                        本平台中的其他个人/企业用户均无法在与企业账号建立关联关系之前查看企业账号信息。企业用户可以自由决定是否与其他个人/企业账号建立关联关系，并可以指定那些信息是对其他个人/企业用户公开的。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;3-5
                        企业用户应当建立信息安全保护制度，包括但不限于：构建完备的企业管理员体系，合理设定企业内部用户权限；提醒或要求企业内部用户保护企业信息安全；提醒或要求企业内部用户保护其账号安全，防止账号被他人使用而导致的信息泄露。

                    </p>
                    <p>第四条 邮件通知</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;您充分理解本公司将通过电子邮件的方式与您保持联络及沟通，您可以选择同意或不同意本公司通过电子邮件方式向其发送包括用户信息、本公司相关金融产品及服务信息在内的相关商业及非商业联络信息。
                    </p>
                    <p>第五条 用户身份确认
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;5-1 您注册成功后将在本平台获得您的账户，您可以使用您注册时登记的身份证件信息和您设定的登录密码登录本平台使用您的账户。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;5-2 您将对您的账户的安全（身份证件信息和密码）负全部责任，并且您对以您的账户进行的所有活动和事件负全责。您有权根据本公司规定的程序修改密码。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;5-3 非经本公司书面同意，您不得擅自转让或者授权他人使用您的账户，否则您应承担由此造成的一切后果。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;5-4 您若发现任何非法使用您的账户或您认为存在安全漏洞的情况，请立即通知本公司，以便本公司进行相应处置。

                    </p>
                    <p>第六条 服务条款的修改和服务体系修订
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;本公司有权在必要时修改本条款，本条款一旦发生变动，将会在页面上明确提示修改内容。如果不同意所改动的内容，您可以主动取消已获得的相关服务。如果您选择继续使用本平台，则视为接受本条款的变动。本公司保留随时修改其服务体系和服务内容而不需通知用户的权利。
                    </p>
                    <p>第七条 用户的权利和义务
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;7-1 您有权利拥有自己在本平台的账户，有权利在输入必要的登录信息、登录密码之后随时登录本平台。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;7-2 您有权利享受本平台提供的各种在线服务，服务内容详见本平台相关产品介绍。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;7-3 您保证不会利用技术或其他手段，破坏/扰乱本平台的正常业务、或本平台其他用户的正常使用。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;7-4
                        您应尊重本公司及其他第三方的知识产权和其他合法权利，并保证在发生上述事件时尽力保护本公司及其股东、雇员、合作伙伴等免于因该等事件受到影响或损失；本公司保留在您侵犯本公司知识产权时终止向您提供服务并要求赔偿的权利。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;7-5
                        对由于您向本公司提供的联络方式有误以及您用于接受本公司邮件的电子邮箱安全性、稳定性不佳而导致的一切后果，由您自行承担；包括但不限于因您未能及时收到本公司的相关通知而导致的后果和损失。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;7-6
                        您保证在您使用本平台服务时将遵从国家、地方法律法规、行业惯例和社会公共道德，不会利用本平台提供的服务进行存储、发布、传播如下信息和内容：违反国家法律法规政策的任何内容（信息）；违反国家规定的政治宣传和/或新闻信息；涉及国家秘密和/或安全的信息；封建迷信和/或淫秽、色情、下流的信息或教唆犯罪的信息；博彩有奖、赌博游戏；违反国家民族和宗教政策的信息；防碍互联网运行安全的信息；侵害他人合法权益的信息和/或其他有损于社会秩序、社会治安、公共道德的信息或内容。您同时承诺不得为他人发布上述不符合国家规定和/或本服务条款约定的信息内容提供任何便利，包括但不限于设置URL、BANNER链接等。您承认本公司有权在您违反上述条款时有权终止向您提供服务并不予退还任何款项，因您的上述行为给本公司造成损失的，您应给予赔偿。

                    </p>
                    <p>第八条 本公司的权利和义务
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;8-1 本公司应根据您选择服务的情况向您提供合格的服务。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;8-2 本公司承诺对您资料采取对外保密措施，不向第三方披露您的资料，不授权第三方使用您的资料，除非：
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8-2-1 依据本条款或者您与本公司之间其他服务协议、合同、在线条款等规定可以提供；
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8-2-2 依据法律法规的规定应当提供；
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8-2-3 行政、司法等有权部门要求本公司提供；
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8-2-4 您同意本公司向第三方提供；
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8-2-5 本公司解决举报事件、提起诉讼而提交的；
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8-2-6 本公司为防止严重违法行为或涉嫌犯罪行为发生而采取必要合理行动所必须提交的；
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8-2-7
                        本公司为向您提供产品、服务、信息而向第三方提供的，包括本公司通过第三方的技术及服务向您提供产品、服务、信息的情况。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;8-3 本公司有权使用您的资料。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;8-4 本公司有权利对您提交的信息进行审查并决定是否接受您成为本平台用户或是否为您提供服务的。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;8-5
                        本公司保留在您违反国家、地方法律法规规定或违反本在线注册条款的情况下终止为您提供服务并停用您的帐号的权利，并且在任何情况下，本公司对任何间接、偶然、特殊及继起的损害不负责任。

                    </p>
                    <p>第九条 服务的终止
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;9-1 您有权随时申请终止您在本平台的用户资格或其在本公司申请的一项或多项服务。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;9-2 本公司有权根据实际情况决定取消为您提供的一项或多项服务，本公司不承担任何责任。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;9-3
                        您申请成为本平台用户后应当遵守本公司不时作出的关于反垃圾邮件的决议，您承诺不会利用本公司的服务进行任何涉及垃圾邮件的行为，包括但不限于您利用本公司服务器发送垃圾邮件；您发送垃圾邮件中包含本公司服务器或IP地址的相关信息；您发送的垃圾邮件中包含其在本公司注册域名信息等可能使国内及国际反垃圾邮件组织认为本公司或本公司用户与垃圾邮件事件有关的内容或信息。您理解一旦发生垃圾邮件事件将对本平台及其所有用户造成不可挽回的巨大损失，因此本公司发现您有涉及垃圾邮件的行为将立即停止为您提供任何服务，无论您在本公司享有的服务是收费或者免费亦无论该服务是否直接与发送垃圾邮件的行为相关，本公司有权在您涉及垃圾邮件事件时取消您的本平台用户资格并保留对因您涉及垃圾邮件给本公司造成损失索赔的权利。

                    </p>
                    <p>第十条 争议解决及法律适用
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;10-1 因本条款有关的一切争议，双方当事人应通过友好协商方式解决。如果协商未成，双方同意向本公司主要经营地的人民法院起诉。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;10-2 本条款的效力、解释、履行和争议的解决均适用中华人民共和国法律法规和计算机、互联网行业的规范。

                    </p>
                    <p>第十一条 不可抗力
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;11-1 因不可抗力或者其他意外事件，使得本条款履行不可能、不必要或者无意义的，遭受不可抗力、意外事件的一方不承担责任。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;11-2
                        不可抗力、意外事件是指不能预见、不能克服并不能避免且对一方或双方当事人造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;11-3 您同意鉴于互联网的特殊性，黑客攻击、互联网连通中断或者系统故障等属于不可抗力，由此给您或者第三方造成的损失不应由本公司承担。

                    </p>
                    <p>第十二条 附则
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;12-1 本条款中有关条款若被权威机构认定为无效，不应影响其他条款的效力，也不影响本条款的解释、违约责任及争议解决的有关约定的效力。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;12-2
                        一方变更通知、通讯地址或其他联系方式，应自变更之日起及时将变更后的地址、联系方式通知另一方，否则变更方应对此造成的一切后果承担责任。您同意，本公司的有关通知只需在本公司有关网页上发布即视为送达。
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;12-3 因本公司上市、被收购、与第三方合并、名称变更等事由，您同意本公司可以将其权利和/或义务转让给相应的本公司权利/义务的承受者。
                    </p>
                </div>
            </div>
            <div class="help-list" v-if="$route.params.tab ==3">
                <div class="policy">
                    <p>
                        本网站由云库汇（北京）金融服务外包有限公司（以下简称为“我们”）运营。我们尊重在线访问者的隐私权，并认可为访问者提供安全环境的重要性。我们已经采取了在线隐私保护政策（“隐私政策”），该政策指导我们如何收集、存储和使用您提供给我们的信息。本隐私政策包括我们如何保护其在线访问者隐私权的细节，并不适用于由我们线下收集的信息。请注意，当您通过本网站链接到其它网站时，本隐私政策并不适用于其它网站、也无法控制其它网站上的活动。为保护您的隐私权，我们自愿采纳该隐私保护措施，我们所有网站均符合既定的在线信息收集及使用准则。本隐私政策将向您解释：
                    </p>
                    <ul>
                        <li>
                            <h4 class="help-question" @click="showAnswer(101)">
                                未成年人是否可以使用本网站针对个人用户的服务
                                <i class="help-question-icon"
                                   :class="[answerShow[101]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[101]">
                                <p>
                                    在注册本网站个人用户时，若您未满18周岁，请您终止您的注册行为，不要向我们提供您的任何信息。即使您注册成功，也将无法通过“实名认证“，导致无法使用本网站提供的各种服务（例如合同签订服务）。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(102)">
                                我们会收集哪些私人信息
                                <i class="help-question-icon"
                                   :class="[answerShow[102]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[102]">
                                <p>
                                    我们会收集用户自愿提交的私人信息。当在线访问者提交信息时，信息通常会通过下列某种形式进行提交（根据这些功能或服务是否提供而决定是否适用）：（1）账号注册、（2）调查问卷、（3）客户服务或技术支持，和/或（4）新闻邮件。所收集的私人信息可能包括您的名字、身份证号码、电话号码和/或电子邮件地址。如果您没有提供这些信息，您将可能无法使用某些需要注册或接收材料的服务，例如新闻邮件。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(103)">
                                我们会收集其它种类的哪些信息
                                <i class="help-question-icon"
                                   :class="[answerShow[103]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[103]">
                                <p>
                                    在某些活动中，我们可能会要求您创建用户名和密码和/或提供其它非私人信息，例如您的年龄、出生日期、性别，并将此类信息同您的私人信息整合。此外，您的网页浏览器或客户端软件可能会将某些地域信息或有关您计算机的信息（操作系统、浏览器类型、IP地址等）发送给我们。我们会出于安全、系统集成（防止黑客攻击、作弊等）或强制的目的及原因而使用这些信息。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(104)">
                                企业用户特别条款
                                <i class="help-question-icon"
                                   :class="[answerShow[104]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[104]">
                                <p>
                                    对于申请注册的企业用户，除申请人的私人信息外，我们还将收集一些与申请企业资质相关的必要信息（营业执照、法人、企业联系人信息等），并将此类信息与您的私人信息整合。企业注册需要经过我们的后台审核验证。审核通过后，我们将为您的企业创建企业账户；您将自动成为您申请的企业账户的管理员。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(105)">
                                我们如何使用您的私人/企业信息
                                <i class="help-question-icon"
                                   :class="[answerShow[105]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[105]">
                                <p>
                                    您为我们提供的私人/企业信息将使我们能够（根据您这些功能或服务是否提供而决定是否适用）提供您所订购的产品或服务，通知您有关新产品、服务、功能或改进的信息，处理/安排您所需的客户服务/技术询问或问题，和/或通知您最新的更新、促销信息、特殊活动信息或优惠。我们可能会使用第三方数据加强或整合来自网站的私人/企业信息。
                                </p>
                                <p>
                                    最后，我们可能会将您的私人/企业信息应用在市场营销、图表分析或用户统计中，以使产品和服务更加符合用户的需求。这种做法目的是更好地理解和服务我们的用户。请知悉，个人以完全出于商业目的而提交的私人信息（例如求职简历中包含的私人信息）不适用上述或本隐私政策中提及的使用原则。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(106)">
                                谁在收集您的信息
                                <i class="help-question-icon"
                                   :class="[answerShow[106]?'icon-1':'icon-2']">
                                </i>

                            </h4>

                            <div class="help-answer" v-if="answerShow[106]">
                                <p>
                                    在适用法律允许的最大范围内，除非另行说明，您在本网站上所提供的信息将由我们和我们的签约公司/企业及签约银行、金融机构（这些公司可能位于信息第一次收集地以外）共享。因此，您特此同意上述信息接收方有权使用您的个人/公司信息，并且您可能会收到来自上述提及的任何一个接收方的信息。此外，部分服务由合作伙伴共同提供。如果您不希望信息被其他公司共享，您可以选择不使用相关服务或不提供任何信息以防止信息的发送。
                                </p>
                                <p>
                                    请注意，我们无法控制共享我们数据的第三方公司的行为，我们同样无法保证第三方公司能够采取与我们相同的隐私保护及安全策略。
                                </p>
                                <p>
                                    请注意，某些广告商或网站拥有或包含指向本网站的链接，并有可能收集您的私人/企业信息。请牢记，本隐私政策不适用、不控制第三方广告商或网站的行为活动。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(107)">
                                您的私人/企业信息会被同谁共享
                                <i class="help-question-icon"
                                   :class="[answerShow[107]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[107]">
                                <p>
                                    我们可能需要将您的私人/企业信息（根据这些功能或服务是否提供而决定是否适用）透露给第三方服务供应商以完成具体的合同签订业务。我们将尽可能确保这些公司不会将您的私人/企业信息用作任何其它目的，并确保他们同意保持从我们所获私人/企业信息的保密性、安全性和完整性。
                                </p>
                                <p>
                                    我们保留因法律需要透露您私人/企业信息的权利。另外，如果您违反本网站或产品所含的使用条款或许可协议、或可能对我们的权利或财产、本网站或产品的其他用户或任何可能因您的行为而受到伤害的人带来（有意或无意的）损害或妨害，并当我们认为透露私人/企业信息对识别、联络或诉讼工作有帮助时，我们保留在特殊情况下透露您私人/企业信息的权利。
                                </p>
                                <p>
                                    同其它领域一样，您的私人/企业信息也属于资产，并将成为我们常规商务档案的一部分。并且，如果我们决定将某产品线出售、许可或外包给第三方，我们同时会将您的私人/企业信息转移给第三方，以使您可以继续获得有关该产品的服务及信息，尽可能减少对您的影响。类似的情况还包括公司合并、收购、重组、破产或其它相似事件，在这类情况中，您的私人/企业信息将被转移给我们继任公司或指定的一方。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(108)">
                                有关收集、使用和发布私人信息您有哪些选择
                                <i class="help-question-icon"
                                   :class="[answerShow[108]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[108]">
                                <p>
                                    我们允许您控制我们可获得的私人信息。在您提供私人信息的同时，我们将让您选择是否接收未来新产品、宣传或服务的信息。此外，在我们发送给您的某些“邮件”，例如新闻邮件中，包含有取消继续接收的方法。最后，您有机会选择不使用某些设定或功能。
                                    任何时候如果您希望停止同并非我们的关联公司的第三方共享私人信息，和/或停止（通过电子邮件或邮寄方式）接收有关新产品、服务或宣传的信息，您可以联系我们service@yunkuhui.com。请写明不希望继续接收的刊物或服务的名称，以便我们更好地为您解决。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(109)">
                                Cookie是什么、我们会怎样使用cookie
                                <i class="help-question-icon"
                                   :class="[answerShow[109]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[109]">
                                <p>
                                    Cookie是您的网页浏览器的一项功能，允许网站向您的计算机发送一定量的信息供保存记录用。保存在您计算机上的cookie可以用来“记忆”某些信息，例如您的已经注册过的项目，通过省去您输入注册信息等步骤，使您将来在网站上的操作更加快速、省时。此外，出于宣传、营销或安全考虑，我们还将通过cookie回收用户信息。
                                </p>
                            </div>
                        </li>

                        <li>
                            <h4 class="help-question" @click="showAnswer(110)">
                                什么是互联网协议地址
                                <i class="help-question-icon"
                                   :class="[answerShow[110]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[110]">
                                <p>
                                    因特网协议（“IP”）地址是分配给您的服务器或因特网服务供应商（“ISP”）的唯一数字。我们可以通过跟踪IP地址来实现系统管理、聚合信息报告、网站跟踪、安全措施或防止针对我们服务器的攻击。
                                </p>
                            </div>
                        </li>

                        <li>
                            <h4 class="help-question" @click="showAnswer(111)">
                                怎样更正、删除私人/企业信息
                                <i class="help-question-icon"
                                   :class="[answerShow[111]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[111]">
                                <p>
                                    如果您因任何原因对我们私人/企业信息使用方式有所忧虑、希望更改或删除您的私人/企业信息，请联系我们service@yunkuhui.com。
                                    请注意，删除您的私人/企业信息将导致您的账号以及对应服务的关闭。
                                </p>
                            </div>
                        </li>
                        <li>
                            <h4 class="help-question" @click="showAnswer(112)">
                                信息安全程度
                                <i class="help-question-icon"
                                   :class="[answerShow[112]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[112]">
                                <p>
                                    我们采取各项措施以确保所收集信息的安全且不受破坏（例如，不被修改），同时严格控制对任何私人信息的访问。例如，我们采取SSL（加密套接字协议层）行业标准来传送信息。此外，我们将采取合理的措施来保证所有共享我们数据的第三方对私人/企业信息提供充分的安全保障。
                                </p>
                            </div>
                        </li>

                        <li>
                            <h4 class="help-question" @click="showAnswer(113)">
                                如何处理问题或意见
                                <i class="help-question-icon"
                                   :class="[answerShow[113]?'icon-1':'icon-2']">
                                </i>

                            </h4>
                            <div class="help-answer" v-if="answerShow[113]">
                                <p>
                                    如果您要提交问题或意见，请联系我们service@yunkuhui.com。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'help',
        data () {
            return {
                msg: 'help',
                answerShow: {
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false,
                    7: false,
                    8: false,
                    9: false,
                    10: false,
                    11: false,
                    12: false,
                    101: false,
                    102: false,
                    103: false,
                    104: false,
                    105: false,
                    106: false,
                    107: false,
                    108: false,
                    109: false,
                    110: false,
                    111: false,
                    112: false,
                    113: false,
                }
            }
        },
        mounted: () => {
        },
        methods: {
            tabChange: function (tab) {
                this.tab = tab;
            },
            showAnswer: function (n) {
                this.answerShow[n] = !this.answerShow[n]
            }
        }
    }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
    #help {
        width: 100%;
    }
    .banner {
        background: url(../assets/help-banner.png) no-repeat center  / cover;
    }
    .help-body {
        position: relative;
        width: 868px;
        margin: auto;
        .help-nav {
            position: absolute;
            top: -40px;
            color: #fff;
            li {
                display: inline-block;
                margin-right: 40px;
                a {
                    font-size: 18px;
                    color: #e5e5e5;
                    cursor: pointer;
                    text-decoration: none;
                    &.router-link-active {
                        color: #fff;
                        border-bottom: 2px solid #fff;
                    }
                }

            }
        }
        .help-list {
            padding: 20px 0;
            .help-question {
                display: block;
                margin: 0;
                padding: 10px 0;
                color: #32a8e2;
                font-size: 16px;
                border-bottom: 1px solid rgb(230, 230, 230);
                cursor: pointer;
                position: relative;
                .help-question-icon {
                    display: block;
                    height: 20px;
                    width: 20px;
                    position: absolute;
                    right: 0;
                    top: 10px;
                    &.icon-1 {
                        background: url(../assets/help-icon-1.png) no-repeat center / 20px 20px;
                    }
                    &.icon-2 {
                        background: url(../assets/help-icon-2.png) no-repeat center / 20px 20px;
                    }
                }
            }
            .help-answer {
                font-size: 14px;
                color: #333;
            }
            .agreement {
                p {
                    color: #333;
                    font-size: 14px;
                    a {
                        color: #999;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>