import { HttpError } from 'wasp/server'

export const addReflection = async ({ content }, context) => {
  if (!context.user) { throw new HttpError(401) };
  return context.entities.Reflection.create({
    data: {
      content,
      userId: context.user.id
    }
  });
}

export const submitRippleStory = async ({ soulCode, content }, context) => {
  const user = await context.entities.User.findUnique({
    where: { soulCode }
  });
  if (!user) { throw new HttpError(404, 'User not found with the provided Soul Code.'); }

  await context.entities.RippleStory.create({
    data: {
      content,
      userId: user.id
    }
  });

  return { message: 'Ripple Story submitted successfully.' };
}
