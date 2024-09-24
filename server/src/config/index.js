import { configDotenv } from 'dotenv'

configDotenv()

const serverPort = process.env.PORT || 8000
const dbUrl = process.env.DATABASE_URL
const host = process.env.HOST
const userEmail = process.env.USER_EMAIL
const userEmailPassword = process.env.USER_EMAIL_PASSWORD

export { serverPort, dbUrl, host, userEmail, userEmailPassword }
