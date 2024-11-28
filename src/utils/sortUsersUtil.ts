import { SortOption } from "../types/SortOption";
import User from "../types/User";

export default function sortUsersUtil(filteredUsers, sortOption, sortField) {
  return [...filteredUsers].sort((userA: User, userB: User) => {
    if (sortOption === SortOption.Asc) {
      return userA[sortField].localeCompare(userB[sortField]);
    } else {
      return userB[sortField].localeCompare(userA[sortField]);
    }
  });
}