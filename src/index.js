import 'dotenv/config'
import app from './app.js'
import { connectDB } from './db.js'

connectDB();
app.listen(8080)
console.log("Server funcionando en", 8080)