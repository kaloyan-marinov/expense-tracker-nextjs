import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";

const HomePage = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return <Guest />;
  }

  return (
    <main>
      <h1>Welcome, {clerkUser.firstName}</h1>
      <AddTransaction />
    </main>
  );
};

export default HomePage;
