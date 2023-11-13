/* eslint-disable prefer-arrow/prefer-arrow-functions */
export {};

// Утверждения

type User = {
  name: string,
  displayName: string | null,
};

// TypeScript cannot use arrowFunctions for assertions
function assertsDisplayName(user: User): asserts user is User & { displayName: string } {
  if (!user.displayName) {
    throw new Error("User doesn't have a display name");
  }
}

const logUserByDisplayName = (user: User) => {
  assertsDisplayName(user);
  console.log(user.displayName?.toUpperCase());
};

const user1 = {
  name: 'user',
  displayName: 'username',
};

logUserByDisplayName(user1);
