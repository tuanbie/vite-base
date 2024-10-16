export const currentUserSelector = (state: { auth: { currentUser: any } }) => state.auth.currentUser;
export const messageLogin = (state: { auth: { login: { message: any } } }) => state.auth.login.message;
