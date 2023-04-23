
const development = {
    name : "development",
    db_name : "todo-api",
    JWT_SECRET : "sachin",
    smtp:{
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: 'ny72161100@gmail.com',
          // clientId: credentials.web.client_id,
          // clientSecret: credentials.web.client_secret,
          // refreshToken: credentials.web.REFRESH_TOKEN,
          // accessToken: credentials.web.ACCESS_TOKEN
        }
    }
};


module.exports = development;