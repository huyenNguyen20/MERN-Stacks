import path from "path"
import express from "express"
import template from './../template'
import { MongoClient } from 'mongodb'
//comment out before building for production
import devBundle from './devBundle'
const CURRENT_WORKING_DIR = process.cwd()

const app = express()
//comment out before building for production
devBundle.compile(app)
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3001
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

// Database Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err, db)=>{
  console.log("Connected successfully to mongodb server")
  db.close()
})