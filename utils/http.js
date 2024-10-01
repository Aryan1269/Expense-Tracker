import axios from "axios";
import { Text } from "react-native";

const BACKEND_URL =
  "https://expensetracker-b5b0e-default-rtdb.asia-southeast1.firebasedatabase.app";

export const storeExpense = async (expensedata) => {
  try {
    const rs = await axios.post(BACKEND_URL + "/expense.json", expensedata);

    const id = rs.data.name;

    return id;
  } catch (error) {
    console.log(error);
  }
};

export const fetchExpense = async () => {
  const response = await axios.get(BACKEND_URL + "/expense.json");

  const expense = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: +response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expense.push(expenseObj);
  }

  return expense;
};

export async function updateExpense(id, expenseData) {
  return await axios.put(BACKEND_URL + `/expense/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expense/${id}.json`);
}
