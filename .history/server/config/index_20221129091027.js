const config = {
    port: process.env.PORT,
    db_username: process.env.NODE_ENV === "production" ? process.env.REMOTE_DB_USER : process.env.LOCAL_DB_USER,
    db_password: process.env.NODE_ENV === "production" ? process.env.REMOTE_DB_PWD : process.env.LOCAL_DB_PWD,
    db_name: process.env.DB_NAME,
    db_host: process.env.DB_HOST,
    user_default_image: process.env.USER_DEFAULT_IMAGE,
    post_default_image: process.env.POST_DEFAULT_IMAGE
}

module.exports = config