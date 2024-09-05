import { Filters } from "../types/Filters";

export const usersFilter = (user, filters: Filters) => {
  if (
    user.name.toLocaleLowerCase().includes(filters.name)
    && user.username.toLocaleLowerCase().includes(filters.username)
    && user.email.toLocaleLowerCase().includes(filters.email)
    && user.phone.toLocaleLowerCase().includes(filters.phone)
  ) {
    return user;
  }
}