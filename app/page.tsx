import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";

const HomePage = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return <Guest />;
  }

  return (
    <main>
      <h2>Welcome, {clerkUser.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
    </main>
  );
};

export default HomePage;
