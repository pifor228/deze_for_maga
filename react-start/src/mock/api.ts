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

// export type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// export const postUsers = async (usersData: { name: string; email: string }): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         id: Date.now(),
//         name: usersData.name,
//         email: usersData.email,
//       });
//     }, 500);
//   });
// };

export type Task = {
  id: number;
  title: string;
  description: string;
  status: 'new' | 'in-progress' | 'completed';
};
export const getTasks = async (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Task 1",
          description: "Description for Task 1",
          status: 'new'
        },
        {
          id: 2,
          title: "Task 2",
          description: "Description for Task 2",
          status: 'in-progress'
        }
      ]);
    }, 500);
  });
};
export const createTasks = async (taskData: { title: string; description: string }): Promise<Task> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(),
        title: taskData.title,
        description: taskData.description,
        status: 'new',
      });
    }, 500);
  });
};
export const updateTasks = async (taskId: number, taskData: { title?: string; description?: string; status?: 'new' | 'in-progress' | 'completed' }): Promise<Task> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: taskId,
        title: taskData.title || "",
        description: taskData.description || "",
        status: taskData.status || 'new',
      });
    }, 500);
  });
};
export const deleteTasks = async (_taskId: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};