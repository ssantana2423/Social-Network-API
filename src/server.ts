import mongoose from 'mongoose'
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  app.listen(3000)

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
