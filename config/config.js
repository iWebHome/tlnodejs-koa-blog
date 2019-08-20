module.exports = {
    environment: 'dev',
    database: {
        dbName: 'tlblogs',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456'
    },
    security: {
        secretKey: "tlblog_secret_key",
        // 过期时间 6小时
        expiresIn: 60 * 60 * 6
    },
    wx: {
        appId: '',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}
