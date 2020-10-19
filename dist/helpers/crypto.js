"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_encrypted_1 = require("typeorm-encrypted");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// eslint-disable-next-line import/prefer-default-export
exports.MyCrypto = new typeorm_encrypted_1.EncryptionTransformer({
    key: "" + process.env.DB_KEY,
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: process.env.DB_IV,
});
