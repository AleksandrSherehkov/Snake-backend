import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const addOrUpdateScore = async (name: string, score: number) => {
  return prisma.score.upsert({
    where: { name: name } as Prisma.ScoreWhereUniqueInput,
    update: { score },
    create: { name, score },
  });
};

export const getScores = async () => {
  return prisma.score.findMany({
    orderBy: { score: 'desc' },
    take: 10,
  });
};

export const isNameUnique = async (name: string) => {
  const existingScore = await prisma.score.findFirst({ where: { name } });
  return !existingScore;
};
