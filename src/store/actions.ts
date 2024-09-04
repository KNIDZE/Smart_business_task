import { Dispatch } from "@reduxjs/toolkit";
import { setAllUsers, updateFilterQuery } from "./usersSlice";
import api from "../api";
import { User } from "../common/inderfaces";

export async function getUsersFromApi(dispatch: Dispatch) {
  const users = await api.get("/users");
  dispatch(setAllUsers(users.data as User[]));
}

export function updateFilter(data: string, title: string, dispatch: Dispatch) {
  // create a query object (index 0 - its key, index 2 - its value)
  const query: [string, string] = [
    title.toLowerCase(),
    data !== title ? data : "",
  ];
  dispatch(updateFilterQuery(query));
}
