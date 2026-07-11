import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../../generated/prisma/client";
import { envs } from "../../config/env";

const adapter = new PrismaPg({ connectionString: envs.POSTGRES_URL });

export const prisma = new PrismaClient({ adapter });
