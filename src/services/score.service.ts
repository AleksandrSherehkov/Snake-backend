import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addScore = async (name: string, score: number) => {
  return prisma.score.create({
    data: {
      name,
      score,
    },
  });
};

export const getScores = async () => {
  return prisma.score.findMany({
    orderBy: {
      score: 'desc',
    },
    take: 10,
  });
};
