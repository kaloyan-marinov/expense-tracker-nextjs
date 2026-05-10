"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
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

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item);

    const expense = amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => acc + item);

    return {
      income,
      expense: Math.abs(expense),
    };
  } catch (error) {
    return {
      error: "Database error",
    };
  }
}

export default getIncomeExpense;
