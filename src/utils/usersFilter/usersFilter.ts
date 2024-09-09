import { Filters } from "../../types/Filters";
import isPhoneMatchingUser from "../isPhoneMatchingUser/isPhoneMatchingUser.ts";

export const usersFilter = (user, filters: Filters) => {
  if (
    user.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())
    && user.username.toLocaleLowerCase().includes(filters.username.toLocaleLowerCase())
    && user.email.toLocaleLowerCase().includes(filters.email.toLocaleLowerCase())
    && isPhoneMatchingUser(user.phone.toLocaleLowerCase(), filters.phone.toLocaleLowerCase())
  ) {
    return user;
  }
}
