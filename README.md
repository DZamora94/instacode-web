# InstaCode Web - MiniCodeLab

### Todo List:

- [x] Install `React Router`
- [x] Install `axios`
- [x] Install `React Hook Form`
- [x] Install `emotion` (`styled-components` alternative)
  - npm install @emotion/react
  - npm install @emotion/styled
  - Add config in react pluggin

---

- [x] Create design system on Emotion
  - Create global variables in CSS
  - Import fonts (Roboto regular & bold)
- [x] Create routing system with react-router-dom
- [x] Create protected route component
- [] Authentication with API
  - [x] Register
  - [x] Login

---

- [x] Prettier config
  - npx i -D prettier
  - Create .prettierrc file
  - Create .prettierignore file
- [x] ESLint config
  - npx eslint --init
  - npm i --save-dev eslint-config-prettier eslint-plugin-prettier
  - Add rules and extensions to .eslintrc
  - Add detect React version in .eslintrc settings
  - Create .eslintignore file
- [x] Husky config
  - npm i -D husky lint-staged
- [x] Jest config

- [x] Register refactor

  - [-] Create Authentication hook
  - [x] Create API Service
  - [x] Save user data in Context
  - [x] Save token in local storage

- [x] Create components for form

  - [x] Input
  - [x] Button
  - [x] Error
  - [x] Image Container
  - [x] Image
  - [x] Layout
  - [x] Form
  - [x] AuthenticateLayout

- [x] Add forms in register and login pages

  - [x] Register
  - [x] Login
  - [x] Add route /codes protected

- [x] Load user data on app load
- [x] Create views for protected routes
- [x] Create code list components

  - [x] Create code snippet component

- [] Snippets

  - [x] Connect API to get snippets
  - [x] Form to create snippets

- [] Refactor Forms

  - [] Create generic components
  - [] HOC so auth users do not land in Authenticate
  - [] Control generic form errors

- [] Snippets

  - [] Add pagination
  - [] Language filter
  - [] Add error toasts

- [] General
  - [] Create log out nav bar
  - [] Deploy prod in Vercel
  - [] General refactor
