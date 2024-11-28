import { Filters } from "../../types/Filters";
import isPhoneMatchingUser from "../isPhoneMatchingUser/isPhoneMatchingUser.ts";

// Function used in filter array method to filter each user
const filterUserUtil = (user, filters: Filters) => {
  if (
    user.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())
    && user.username.toLocaleLowerCase().includes(filters.username.toLocaleLowerCase())
    && user.email.toLocaleLowerCase().includes(filters.email.toLocaleLowerCase())
    && isPhoneMatchingUser(user.phone.toLocaleLowerCase(), filters.phone.toLocaleLowerCase())
  ) {
    return user;
  }
}

export default filterUserUtil;