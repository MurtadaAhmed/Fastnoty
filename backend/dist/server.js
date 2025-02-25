"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const PORT = 5000;
const FILE_PATH = 'notes.json';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/note", (req, res) => {
    fs_1.default.readFile(FILE_PATH, "utf8", (err, data) => {
        if (err)
            return res.json([]);
        res.json(JSON.parse(data));
    });
});
app.post("/note", (req, res) => {
    const notes = req.body;
    fs_1.default.writeFile(FILE_PATH, JSON.stringify(notes, null, 2), (err) => {
        if (err)
            return res.status(500).json({ error: "Falied to save" });
        res.json({ message: "Notes Saved!" });
    });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
