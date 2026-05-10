"use client";

// This is going to be a «client component».
const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    console.log("formData.get('text')", formData.get("text"));
    console.log("formData.get('amount')", formData.get("amount"));

    // From here, a «server action» will be called.
  };

  return (
    <>
      <h3>Add transaction</h3>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            name="text"
            id="text"
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            name="amount"
            id="amount"
            type="number"
            step="0.01" // to allow decimals
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
