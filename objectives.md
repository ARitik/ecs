## Ecommerce Full-Stack App

1. React + Tailwind
2. NodeJS (Express)
3. GraphQL w/ Prisma
4. PostgreSQL 

#### Phase (1) User Login and Registration
**Objective:** To allow Users to register and login. Save the JWT into session storage. Display `UserData` on login.

```GraphQL
User {
    email: String!
    name: String!
    password: String!
    address: String
    orders: [Product]
}
```
**Todo List**
- [x] Setup Tailwind w/ Vue 
- [ ] Build Login Page
- [ ] Build Registration Page
- [ ] Display `UserData` on Login
- [ ] Setup GraphQL w/ Prisma
