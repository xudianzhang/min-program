const CONF = {
    // // 本地如何搭建开发环境https://cloud.tencent.com/document/product/619/12794
    // serverHost: 'localhost',
    // tunnelServerUrl: '',
    // tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    //   // 腾讯云相关配置可以查看云 API 密钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1257967921',
    qcloudSecretId: 'AKIDITTHnFRaTDmAj9nPFsLcgYEi183ms5i9',
    qcloudSecretKey: 'OeiaGk270hCUaUEmDTXQ7cv2gEakkYAc',
    // wxMessageToken: 'weixinmsgtoken',
    // networkTimeout: 30000,

    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx1b04b8cfc7235040',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'wx1b04b8cfc7235040',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou', 
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
