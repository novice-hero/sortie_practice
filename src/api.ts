import axios from "axios";
import { Order, TableHeaderLabel } from "./type";

const BASE_URL = "http://localhost:3000";

const fetchAllData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPageData = async (page: number, limit?: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data?_page=${page}&_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchSortData = async (
  label: TableHeaderLabel,
  order: Order,
  page: number,
  limit?: number
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/data?_sort=${label}&_order=${order}&_page=${page}&_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllData, fetchPageData, fetchSortData };
