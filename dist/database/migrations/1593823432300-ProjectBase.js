"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectBase1593823432300 = /** @class */ (function () {
    function ProjectBase1593823432300() {
        this.name = 'ProjectBase1593823432300';
    }
    ProjectBase1593823432300.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"college\" (\"graduations\" character varying NOT NULL, \"year\" integer NOT NULL, \"toDeleteColumn\" integer NOT NULL, \"identificationId\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"identificationName\" character varying NOT NULL, \"identificationCnpj\" character varying NOT NULL, \"identificationCreated_at\" TIMESTAMP NOT NULL DEFAULT now(), \"identificationUpdated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_ea02cccb5b3a75968ef94483fcf\" PRIMARY KEY (\"identificationId\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"discipline\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying(100) NOT NULL, \"duration\" integer NOT NULL, \"created_At\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_At\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"UQ_ba7f210baab523048c0386c3463\" UNIQUE (\"name\"), CONSTRAINT \"PK_139512aefbb11a5b2fa92696828\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"lesson\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"description\" character varying NOT NULL, \"created_At\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_At\" TIMESTAMP NOT NULL DEFAULT now(), \"disciplineId\" uuid, CONSTRAINT \"PK_0ef25918f0237e68696dee455bd\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"content\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"description\" character varying NOT NULL, \"linkContent\" character varying NOT NULL, \"created_At\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_At\" TIMESTAMP NOT NULL DEFAULT now(), \"lessonId\" uuid, CONSTRAINT \"REL_0b349f6b8ca7f05eed39ffb956\" UNIQUE (\"lessonId\"), CONSTRAINT \"PK_6a2083913f3647b44f205204e36\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"student\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying NOT NULL, \"key\" integer NOT NULL, \"email\" character varying NOT NULL, \"created_At\" TIMESTAMP NOT NULL DEFAULT now(), \"updated_At\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_3d8016e1cb58429474a3c041904\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"university\" (\"graduations\" character varying NOT NULL, \"doctors\" character varying NOT NULL, \"masters\" character varying NOT NULL, \"identificationId\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"identificationName\" character varying NOT NULL, \"identificationCnpj\" character varying NOT NULL, \"identificationCreated_at\" TIMESTAMP NOT NULL DEFAULT now(), \"identificationUpdated_at\" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT \"PK_d6c034b996fecea5836da42dc44\" PRIMARY KEY (\"identificationId\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"student_discipline_discipline\" (\"studentId\" uuid NOT NULL, \"disciplineId\" uuid NOT NULL, CONSTRAINT \"PK_3ef0759852caaefb9bac7cf913e\" PRIMARY KEY (\"studentId\", \"disciplineId\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_ccb4ae4609bfbf4d022560a3f8\" ON \"student_discipline_discipline\" (\"studentId\") ")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_9a616bdfff1c46bddeb8ad78db\" ON \"student_discipline_discipline\" (\"disciplineId\") ")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"lesson\" ADD CONSTRAINT \"FK_2652456e912c983cde73d3281db\" FOREIGN KEY (\"disciplineId\") REFERENCES \"discipline\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"content\" ADD CONSTRAINT \"FK_0b349f6b8ca7f05eed39ffb956d\" FOREIGN KEY (\"lessonId\") REFERENCES \"lesson\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"student_discipline_discipline\" ADD CONSTRAINT \"FK_ccb4ae4609bfbf4d022560a3f8c\" FOREIGN KEY (\"studentId\") REFERENCES \"student\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"student_discipline_discipline\" ADD CONSTRAINT \"FK_9a616bdfff1c46bddeb8ad78dbf\" FOREIGN KEY (\"disciplineId\") REFERENCES \"discipline\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectBase1593823432300.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"student_discipline_discipline\" DROP CONSTRAINT \"FK_9a616bdfff1c46bddeb8ad78dbf\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"student_discipline_discipline\" DROP CONSTRAINT \"FK_ccb4ae4609bfbf4d022560a3f8c\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"content\" DROP CONSTRAINT \"FK_0b349f6b8ca7f05eed39ffb956d\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"lesson\" DROP CONSTRAINT \"FK_2652456e912c983cde73d3281db\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_9a616bdfff1c46bddeb8ad78db\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"IDX_ccb4ae4609bfbf4d022560a3f8\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"student_discipline_discipline\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"university\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"student\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"content\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"lesson\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"discipline\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"college\"")];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProjectBase1593823432300;
}());
exports.default = ProjectBase1593823432300;
