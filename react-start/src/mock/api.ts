// export type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// export const postUsers = (usersData: { name: string; email: string }) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           id: Date.now(),
//           name: usersData.name,
//           email: usersData.email,
//         }
//       ]);
//     }, 1000);
//   });
// };

export type User = {
  id: number;
  name: string;
  email: string;
};

export const postUsers = async (usersData: { name: string; email: string }): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(),
        name: usersData.name,
        email: usersData.email,
      });
    }, 500);
  });
};
