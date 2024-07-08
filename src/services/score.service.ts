import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ScoreResult {
  id: number;
  name: string;
  score: number;
  createdAt: Date;
  updated: boolean;
}

export const addOrUpdateScore = async (
  name: string,
  score: number
): Promise<ScoreResult> => {
  const existingScore = await prisma.score.findUnique({
    where: { name: name } as Prisma.ScoreWhereUniqueInput,
  });

  if (!existingScore || score > existingScore.score) {
    const result = await prisma.score.upsert({
      where: { name: name } as Prisma.ScoreWhereUniqueInput,
      update: { score },
      create: { name, score },
    });
    return { ...result, updated: true };
  }

  return { ...existingScore, updated: false };
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
