import express, {Request, Response} from "express";
import cors from "cors";
import fs from "fs";

const app = express()
const PORT = 5000;
const FILE_PATH = 'notes.json'

app.use(cors())
app.use(express.json())

app.get("/note", (req: Request, res: Response) => {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
        if (err) return res.json([]);
        res.json(JSON.parse(data))
    })
} )

app.post("/note", (req: Request, res: Response) => {
    const notes: unknown = req.body;
    fs.writeFile(FILE_PATH, JSON.stringify(notes, null, 2), (err) => {
        if (err) return res.status(500).json({error: "Falied to save"});
        res.json({ message: "Notes Saved!"})
    })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))