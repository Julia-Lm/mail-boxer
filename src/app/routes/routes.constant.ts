export enum ROUTES_KEYS {
  emails = "emails",
}

export const ROUTES = {
  basePath: "/",
  emails: {
    key: ROUTES_KEYS.emails,
    url: `/${ROUTES_KEYS.emails}`,
  },
};
