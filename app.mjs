import express, {json} from "express"
const app = express() 
const PORT = process.env.PORT || 8000

const db = [
  {
    id: 1,
    input: "input",
    letter: "n",
    customWord: "iput"
  },
]
app.use(json())

app.get('/api/db/read', (req, res) => {
  res.send(db)
})

app.post('/api/db/add', (req, res) => {
  db.push({
    id: db.length + 1,
    input: req.body.input,
    letter: req.body.letter,
    customWord: req.body.input.split(req.body.letter).join('')
  })
  res.send(db)
})


app.listen(PORT, err => console.log(err ? err : PORT))