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
var Identifier_1 = __importDefault(require("./Identifier"));
var College = /** @class */ (function () {
    function College() {
    }
    __decorate([
        typeorm_1.Column(function (type) { return Identifier_1.default; }),
        __metadata("design:type", Identifier_1.default)
    ], College.prototype, "identification", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], College.prototype, "graduations", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], College.prototype, "year", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], College.prototype, "toDeleteColumn", void 0);
    College = __decorate([
        typeorm_1.Entity()
    ], College);
    return College;
}());
exports.default = College;