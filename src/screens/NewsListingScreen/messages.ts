import { defineMessages } from "react-intl";

export const scope = "app.Screens.NewsListingScreen";

export default defineMessages({
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: "No News Found!",
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: "Something went wrong!",
  },
});
