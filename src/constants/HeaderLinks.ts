import { routes } from "./routes";

const headerLinks = {
  guest: [routes.main, routes.about],
  user: [routes.main, routes.about, routes.usersManagement],
}

export default headerLinks;