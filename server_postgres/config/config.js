module.exports = {
    environment: 'dev',
    database: {
        dbName: 'tlblogs',
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '123456',
        dialect: 'postgres'     // 数据库类型
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
