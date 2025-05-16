import { HttpError } from 'wasp/server';

export const getUserGrowthMap = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  const traits = await context.entities.Trait.findMany({
    where: { userId: context.user.id },
    select: { name: true, growthScore: true }
  });

  return traits;
}

export const getRippleStories = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  return context.entities.RippleStory.findMany({
    where: {
      userId: context.user.id
    },
    orderBy: {
      date: 'desc'
    }
  });
}
