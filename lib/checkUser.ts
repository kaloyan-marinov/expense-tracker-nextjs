import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const checkUser = async () => {
  // Obtain currently logged-in «Clerk user».
  const clerkUser = await currentUser();
  console.log("clerkUser:", clerkUser);

  if (!clerkUser) {
    return null;
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: clerkUser.id,
    },
  });

  if (user) {
    return user;
  }

  // Create a new user in the DB.
  const newUser = await db.user.create({
    data: {
      clerkUserId: clerkUser.id,
      name: `${clerkUser.firstName} ${clerkUser.lastName}`,
      imageUrl: clerkUser.imageUrl,
      email: clerkUser.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
