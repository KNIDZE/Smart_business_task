import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UsersState, User } from "../common/inderfaces";

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filterQuery: {
    name: "",
    email: "",
    username: "",
    phone: "",
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateFilterQuery: (state, action: PayloadAction<[string, string]>) => {
      const filterQuery = { ...state.filterQuery };
      filterQuery[action.payload[0] as keyof User] = action.payload[1];

      const filteredUsers = state.users.filter((user) => {
        // if query value is '' - return True, simply skip it
        const hasRequiredValues = (queryKey: string) => {
          return user[queryKey as keyof User]
            .toLowerCase()
            .includes(filterQuery[queryKey as keyof User].toLowerCase());
        };
        //it returns filtered list of users
        return Object.keys(filterQuery)
          .filter((key) => filterQuery[key as keyof User] !== "")
          .every(hasRequiredValues);
      });
      return {
        ...state,
        filteredUsers: filteredUsers,
        filterQuery: filterQuery,
      };
    },
    setAllUsers(state, action: PayloadAction<User[]>) {
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFilterQuery, setAllUsers } = usersSlice.actions;

export default usersSlice.reducer;
