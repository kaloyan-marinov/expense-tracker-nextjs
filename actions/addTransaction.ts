"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// This is only going to run on the server.

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  // Validate inputs.
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  if (!textValue || textValue === "" || !amountValue) {
    return {
      error: "Text or amount is missing",
    };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  // Get the logged-in user.
  const { userId: clerkUserId } = await auth();
  console.log("clerkUserId", clerkUserId);
  if (!clerkUserId) {
    return {
      error: "User not found",
    };
  }

  // Persist a transaction in the DB.
  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId: clerkUserId,
      },
    });

    // Force the browser to refresh the page.
    revalidatePath("/");

    return {
      data: transactionData,
    };
  } catch (error) {
    return {
      error: "Transaction not added",
    };
  }
}

export default addTransaction;
