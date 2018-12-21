export function usersFormattedForDropdown(users) {
  return users.map(user => ({
    value: user.fullname,
    text: user.fullname
  }));
}
