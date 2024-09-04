export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UsersState {
  users: User[];
  filteredUsers: User[];
  filterQuery: User;
}
