import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";
const dummyExpenses = [
	{
		id: "e1",
		title: "Laptop",
		amount: 1400,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "Laptop stand",
		amount: 49.99,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Wireless headphones",
		amount: 199.99,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "Workout clothes",
		amount: 140.5,
		date: new Date(2021, 5, 12),
	},
	{
		id: "e5",
		title: "Boots",
		amount: 180.99,
		date: new Date(2022, 5, 30),
	},
	{
		id: "e6",
		title: "Winter dresses",
		amount: 250,
		date: new Date(2022, 4, 15),
	},
	{
		id: "e6",
		title: "Whitsundays holiday",
		amount: 3000,
		date: new Date(2022, 3, 29),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(dummyExpenses);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
