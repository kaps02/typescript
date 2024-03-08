"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
// Use built-in Express JSON parsing middleware
app.use(express_1.default.json());
// Use todo routes
app.use(todos_1.default);
// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
