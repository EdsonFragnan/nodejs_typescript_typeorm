"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var lesson_routes_1 = __importDefault(require("./lesson.routes"));
var student_routes_1 = __importDefault(require("./student.routes"));
var content_routes_1 = __importDefault(require("./content.routes"));
var discipline_routes_1 = __importDefault(require("./discipline.routes"));
var routes = express_1.Router();
routes.use('/discipline', discipline_routes_1.default);
routes.use('/lesson', lesson_routes_1.default);
routes.use('/student', student_routes_1.default);
routes.use('/content', content_routes_1.default);
exports.default = routes;
