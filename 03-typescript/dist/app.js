"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero = (0, hero_service_1.findHeroById)(5);
console.log(hero?.name ?? "Hero not found!!");
//# sourceMappingURL=app.js.map