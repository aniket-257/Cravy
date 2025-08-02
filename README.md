# React 🚀

/\*\*

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

# Summary React Context VS Redux:

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
