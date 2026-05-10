import getUserBalance from "@/actions/getUserBalance";

const Balance = async () => {
  const { balance, error } = await getUserBalance();

  return (
    <>
      <h4>Your balance</h4>
      <h1>${balance ?? 0}</h1>
    </>
  );
};

export default Balance;
