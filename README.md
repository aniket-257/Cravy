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
