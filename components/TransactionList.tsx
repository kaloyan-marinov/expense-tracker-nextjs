import { Transaction } from "@/types/Transaction";

const TransactionList = () => {
  const transactions = [
    {
      id: "id-1",
      text: "text-1",
      amount: 111,
      userId: "userId-1",
      createdAt: new Date(Date.now()),
    },
    {
      id: "id-2",
      text: "text-2",
      amount: 222,
      userId: "userId-2",
      createdAt: new Date(Date.now()),
    },
  ];

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <p>{transaction.text}</p>
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
