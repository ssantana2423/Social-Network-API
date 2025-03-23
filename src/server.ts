import mongoose from 'mongoose'
import express from 'express'
import {User} from './models/index.js'
const app = express()
app.use(express.json())

app.post('/api/users', async function (req, res) {
 try {
  const user = await User.create(req.body)
  res.json(user)
  
 } catch (error) {
  res.json(error)

  
 }
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/socialmediaDB');
  app.listen(3000)

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
