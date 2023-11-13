/*

Создайте интерфейсы User и Admin.

User должен содержать следующие ключи:

login, email, password, isOnline, lastVisited
Admin содержит все те же ключи, плюс ключ role.

Создайте функцию login, которая принимает один параметр в виде объекта с логином и паролем.

Проверьте, что поля не пустые и выведите приветственное сообщение в консоль.

*/

interface User {
  login: string,
  email: string,
  password: string,
  isOnline: boolean,
  lastVisited: Date,
}

interface Admin extends User {
  role: string,
}

const user1: User = {
  login: 'user123',
  email: 'user@gmail.com',
  password: '123',
  isOnline: false,
  lastVisited: new Date(2023, 10, 29),
};

const admin1: Admin = {
  login: 'admin',
  email: 'admin@gmail.com',
  password: '12345',
  isOnline: true,
  lastVisited: new Date(2023, 10, 30),
  role: 'admin',
};

const login = (user: { login: string, password: string }): void => {
  if (user.login.length > 0 && user.password.length > 0) {
    console.log('Welcome, ', user.login);
  }
};

login(user1);
login(admin1);

export default login;
