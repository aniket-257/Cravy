# React 🚀

- Header
- - Logo
- - Nav Bar
- Body
- - Search Bar
- - RestaurantContainer
-      - RestroCard
- Footer
- - Copyright
- - Links
- - Contacts
    \*/

# Two types of Import/Export

## Named Export

    export const data = [];

## Named Import

    import {data} from ...

## Default Export

    export default component/Variable

## Default Import

    import component from ...

## React Hooks

# useState() => 70% Usecase

# UseEffect() => 20% Usecase

# other Hooks => 10% USecase

- React Hooks are nothing but a Normal Javascript utility functiuons provided by React
- They are use to defined Super powerfull Variables
- useState return an array of variable name and setVariable Function
- setVaribale function is use to change value of variable (variable changes using normal assignment will not take into consideration)

# Reconsiliation (React Fiber)

- it uses a virtual DOM to do efficient DOM manipulation
- Virtual DOM nothing but a Javascript Object (Object(Virtual DOM) comparison is faster than comparing two Actual DOM)

# 2 Types of Routing

- Client Side Routing
- Server Side Routing

React re-renders child components when the parent re-renders because it treats components as functions. React can’t know if the output is the same, so it calls them again — unless you tell it not to using React.memo, useMemo, or useCallback.

# customHooks life cycle

Initial render:
hook → restroMenuData = null → Shimmer

After fetch completes:
hook sets state → React triggers re-render

Second render:
hook → restroMenuData = data → real content rendered

## Chunking

## Code spliting

## Dynamic bundling

## Lazy loading

## On Demant loading

## Dynamic imports

🔹 React.lazy()
React.lazy() is used to dynamically import a component only when it is needed.

✅ Use Case:
To reduce the initial bundle size, load components only when the user actually needs them (e.g., routing).
✅ Syntax:
const LazyComponent = React.lazy(() => import('./MyComponent'));

🔹 <Suspense>
<Suspense> is a React component used to show a loading fallback UI while the lazy component is being loaded.

✅ Use Case:
Wraps around lazy components and provides a fallback UI (like a spinner or shimmer).
✅ Syntax:
<Suspense fallback={<div>Loading...</div>}>
<LazyComponent />
</Suspense>

🔹 fallback prop
fallback is a prop passed to <Suspense> which defines what to render while loading the lazy component.

✅ Use Case:
Shows a temporary UI (like a loader) until the actual component is loaded.

# Configure Tailwind CSS for PARCEL

# Higher Order Component

## Normal Javascript Function or PURE Function

### Imput : Component

### Output : Inhanced Component

# Controlled and Uncontrolled Components

## Controlled Component:

    => Controlled By parent (When to Show & Hide likewise)
    => Component doesn't have its useState Variable to controll itself
    => Component controlled through PROPS (Parent -> Child)

## Uncontrolled Component:

    => Component have its useState Variable to controll itself
    => Doesn't relly on Parent instructions

# Lifting the state up (Read React New DOCS)

# Prop Drilling => Solution (createContext)

## How to create Context

import { createContext } from "react";

const UserContext = createContext({
loggedInUser: "Default User",
});

export default UserContext;

=> Use createContext React API to create your own context
=> To Use Context import your context and use with useContext React API in a file
=> Example:

import UserContext from "../utils/UserContext";
import { useContext } from "react";
const { loggedInUser } = useContext(UserContext);

=> Below Example for Class based component
<UserContext.Consumer>
{(contextData) => <h1>{contextData.loggedInUser}</h1>}
</UserContext.Consumer>

# How to Set or modify Context Value

.... WE CAN HAVE MULTIPLE PROVIDER AND CONTEXT
.... setUserInfo add on context value without declaring before hand
// Default loggedInUser Value
<UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
{/_ 'Aniket Tarale' loggedInUser Value_/}

<div className="app">
<UserContext.Provider value={{ loggedInUser: "SHRUTIKA DONDE" }}>
{/_ 'SHRUTIKA DONDE' loggedInUser Value_/}
<Header />
</UserContext.Provider>
<Outlet />
</div>
</UserContext.Provider>

# Summary React Context VS Redux or Zustand:

Use React Context for simple, app-wide data.

- Built-in feature of React for sharing state/data across components.
- Best for simple, static, or low-frequency updates (e.g., theme, user info)
- Sharing static or rarely-changing data.
- Avoiding prop drilling for a few values.

Use Redux for complex state logic, large apps, or when you need advanced features like middleware and devtools.

- External state management library, works with React and other frameworks.
- Centralized store, actions, reducers, middleware, and devtools support.

### Example Use Cases

- **React Context:** Theme switching, user authentication info, language settings.
- **Redux:** Shopping cart, complex forms, real-time data, multi-user collaboration, undo/redo features.

# 🛒 Redux Toolkit Slice: Today's Modification (03-Aug-2025)

## Redux & React-Redux: Core Concepts and Usage

### Reducers & Actions

- **Reducer:** A pure function that takes the current state and an action, and returns the new state.
- **Action:** An object describing what happened (must have a `type` property). Actions are dispatched to trigger state changes.

### Provider

- The `<Provider>` component from `react-redux` makes the Redux store available to all React components in the app, so you can access state and dispatch actions anywhere in the component tree.

### useSelector

- The `useSelector` hook lets you extract data from the Redux store state for use in your React components.

### useDispatch

- The `useDispatch` hook returns a reference to the `dispatch` function from the Redux store, allowing you to dispatch actions from your components.

### Why Two Packages: `@reduxjs/toolkit` & `react-redux`

- **@reduxjs/toolkit:**  
  Provides utilities to write Redux logic (slices, reducers, actions, store setup) in a simpler, less error-prone way.
- **react-redux:**  
  Connects Redux to React. Provides `<Provider>`, `useSelector`, and `useDispatch` so React components can interact with the Redux store.

---

## Redux Toolkit & React-Redux: Code Examples and Deep Dives

### 1. Reducer and Actions (with code)

```js
// src/utils/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

- **Why export actions separately?**  
  The actions (`addItem`, `removeItem`, `clearCart`) are used with `dispatch` in your components. Exporting them lets you import and use them anywhere in your app.

- **Why export `sliceName.reducer`?**  
  The reducer (`cartSlice.reducer`) is what you combine in your main Redux store. You do not export the whole `reducers` object, only the generated reducer function.

---

### 2. Main Store Setup (with code)

```js
// src/utils/appStore.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // 'cart' key in store, value is reducer from slice
    // add more slices here
  },
});

export default appStore;
```

- **Why use reducer in main store?**  
  The main store combines all your slice reducers. Each slice manages a part of the state tree.

---

### 3. Provider (with code)

```js
// src/App.js
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <Provider store={appStore}>
      <MainComponent />
    </Provider>
  );
}
export default App;
```

- **Why Provider?**  
  It makes the Redux store available to all nested components.

---

### 4. useSelector (with code)

```js
import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);
```

- **Why useSelector?**  
  To read data from the Redux store in any component.

---

### 5. useDispatch (with code)

```js
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const dispatch = useDispatch();
dispatch(addItem({ id: 1, name: "Pizza" }));
```

- **Why useDispatch?**  
  To send actions to the Redux store from your components.

---

### 6. Why two packages: redux-toolkit & react-redux?

- `@reduxjs/toolkit` is for writing Redux logic (slices, reducers, actions, store).
- `react-redux` is for connecting Redux to React (Provider, hooks).

---

---

## Key Learnings & Best Practices

- **Initial State Must Be Defined:**  
  When creating a slice with Redux Toolkit, always use the `initialState` property (not `initialStore`). If the state is undefined, the reducer must return the initial state, or Redux will throw an error.

- **Immutability Made Easy:**  
  Redux Toolkit uses the Immer library under the hood, allowing you to write "mutating" logic in reducers (e.g., `state.items.push(...)`). This is safe and recommended, as Immer ensures the state remains immutable.

- **Reducer Examples:**

  - `addItem`: Adds an item to the cart using `state.items.push(action.payload)`.
  - `removeItem`: Removes an item by filtering out the matching `id`.
  - `clearCart`: Clears the cart by setting `state.items.length = 0` (or `state.items = []`).

- **Vanilla Redux vs. Redux Toolkit:**  
  In vanilla Redux, you must never mutate state directly and always return a new object. Redux Toolkit simplifies this by handling immutability for you.

## Common Interview Points

- **Why is `initialState` important?**  
  Without it, the reducer may return `undefined`, causing Redux to fail during initialization.

- **How does Redux Toolkit handle immutability?**  
  It uses Immer, so you can write code that looks like it mutates state, but it actually creates a new immutable state behind the scenes.

- **How to clear an array in Redux Toolkit?**  
  You can use `state.items.length = 0` or `state.items = []`—both are valid due to Immer.

---

/\*\*
