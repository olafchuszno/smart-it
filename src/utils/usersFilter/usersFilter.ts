import { Filters } from "../../types/Filters";
import isPhoneMatchingUser from "../isPhoneMatchingUser/isPhoneMatchingUser.ts";

export const usersFilter = (user, filters: Filters) => {
  if (
    user.name.toLocaleLowerCase().includes(filters.name)
    && user.username.toLocaleLowerCase().includes(filters.username)
    && user.email.toLocaleLowerCase().includes(filters.email)
    && isPhoneMatchingUser(user.phone, filters.phone)
  ) {
    return user;
  }
}
