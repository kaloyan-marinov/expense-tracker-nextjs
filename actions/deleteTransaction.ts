"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function deleteTransaction(transactionId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId: clerkUserId } = await auth();

  if (!clerkUserId) {
    return {
      error: "User not found",
    };
  }

  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId: clerkUserId, // This seems off but it is in line with the call to `db.transaction.create`
      },
    });

    // Force the browser to refresh the page.
    revalidatePath("/");

    return {
      message: "Transaction deleted",
    };
  } catch (error) {
    return {
      error: "Database error",
    };
  }
}

export default deleteTransaction;
