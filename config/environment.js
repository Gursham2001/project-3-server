import dotenv from 'dotenv'
dotenv.config()


export const dbUrl =
process.env.DB_URL || 'mongodb://localhost/placesdb'

export const secret =
process.env.SECRET || 'shhhh its a secret!'

export const port = process.env.PORT || 4000
