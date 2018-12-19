export function usersFormattedForDropdown(users) {
  return users.map(user => ({
    value: user,
    text: user
  }));
}
