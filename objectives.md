## Ecommerce Full-Stack App

1. React + Redux
2. TailwindCSS
3. NodeJS (Express)
4. Prisma ORM
5. PostgreSQL

#### Phase (1) User Login and Registration

**Objective:** To allow Users to _Register_ and _Login_. Save the JWT as a Cookie. Display `UserData` on login.

```GraphQL
User {
    email: String!
    name: String!
    password: String!
    address: String
    createdAt: date
    updatedAt: date
    orders: [Product]
}
```

**Todo List**

- [x] Setup Tailwind w/ React
- [x] Setup Redux (redux-toolkit)
- [x] Create UserSlice with loginSuccess, logoutSuccess -> actions
- [x] Setup (`login`,`logout`,`loginOnReload`) Async (thunk) middleware
- [x] Server renders Client `index.html` on `/` route. _Avoid CORS Errors_
- [ ] Build Login Page
- [ ] Build Registration Page
- [ ] Display `UserData` on Login
