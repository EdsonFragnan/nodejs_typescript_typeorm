"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var dotenv_1 = __importDefault(require("dotenv"));
var class_validator_1 = require("class-validator");
var Discipline_1 = __importDefault(require("./Discipline"));
var crypto_1 = require("../helpers/crypto");
dotenv_1.default.config();
var Student = /** @class */ (function () {
    function Student() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Student.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'varchar',
            nullable: false,
            transformer: crypto_1.MyCrypto,
        }),
        class_validator_1.MaxLength(50, { message: 'Nome precisar no máximo 50 caracteres' }),
        class_validator_1.MinLength(2, { message: 'Nome deve possuir no mínimo 1 caractere' }),
        __metadata("design:type", String)
    ], Student.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Max(99999, { message: 'Chave inválida' }),
        class_validator_1.Min(10000),
        __metadata("design:type", Number)
    ], Student.prototype, "key", void 0);
    __decorate([
        typeorm_1.Column({
            transformer: crypto_1.MyCrypto,
        }),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], Student.prototype, "email", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Discipline_1.default; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Discipline_1.default)
    ], Student.prototype, "discipline", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ name: 'created_At' }),
        __metadata("design:type", Date)
    ], Student.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({ name: 'updated_At' }),
        __metadata("design:type", Date)
    ], Student.prototype, "updatedAt", void 0);
    Student = __decorate([
        typeorm_1.Entity('student')
    ], Student);
    return Student;
}());
exports.default = Student;
