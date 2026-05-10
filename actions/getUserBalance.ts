"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getUserBalance(): Promise<{
  balance?: number;
  error?: string;
}> {
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    return {
      error: "User not found",
    };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: {
        userId: clerkUserId,
      },
    });

    const balance = transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0,
    );

    return {
      balance,
    };
  } catch (error) {
    return {
      error: "Database error",
    };
  }
}

export default getUserBalance;
