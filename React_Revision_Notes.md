# React Revision Notes

## Key Concepts from Your Code

### 1. React Components

- **Functional Components**: Use functions and hooks (e.g., `useState`, `useEffect`).
- **Class Components**: Use ES6 classes, lifecycle methods (`constructor`, `render`, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).
- **Example**: `UserClass` is a class component with detailed lifecycle comments.

### 2. State and Props

- **State**: Managed with `useState` in functional components, `this.state` in class components.
- **Props**: Passed from parent to child, read-only.
- **State changes trigger re-renders.**

### 3. useEffect Hook

- Used for side effects (API calls, subscriptions).
- Behaves like lifecycle methods:
  - No dependency array: runs after every render.
  - Empty array: runs once after initial render (like `componentDidMount`).
  - With dependencies: runs when dependencies change (like `componentDidUpdate`).
- Cleanup function (returned from useEffect) runs on unmount (like `componentWillUnmount`).

### 4. Context API

- Used to pass data deeply without prop drilling.
- `UserContext` is created and provided at the top level (`AppLayout`).
- Accessed with `useContext` (functional) or `UserContext.Consumer` (class).

### 5. Custom Hooks

- Example: `useOnlineStatus` tracks online/offline status using browser events.
- Example: `useRestaurantMenuCard` fetches restaurant menu data.

### 6. Routing

- Uses `react-router-dom` for client-side routing.
- `createBrowserRouter`, `RouterProvider`, `Outlet` for nested routes.
- Lazy loading with `React.lazy` and `Suspense` for code splitting and performance.

### 7. Code Splitting & Lazy Loading

- `React.lazy()` and `Suspense` are used to load components only when needed (improves performance).
- Related concepts: chunking, dynamic imports, on-demand loading.

### 8. Component Lifecycle (Class Components)

- **Mounting**: constructor → render → componentDidMount
- **Updating**: render → componentDidUpdate
- **Unmounting**: componentWillUnmount
- Comments in `UserClass` explain these phases in detail.

### 9. SPA (Single Page Application)

- React apps are SPAs: navigation does not reload the page.
- Clean up intervals/timeouts in `componentWillUnmount` to avoid memory leaks.

### 10. Best Practices & Notes from Comments

- Always call `super()` in class constructors.
- Declare state variables at the top level of components.
- Do not use async directly in `useEffect` (define async function inside).
- Use optional chaining (`?.`) for safe property access.
- Use cleanup functions in `useEffect` for subscriptions/intervals.
- Use context for global data (e.g., user info).
- Use hooks only inside React function components or custom hooks.

---

## Additional React Concepts (Not Explicitly in Code)

### 11. Keys in Lists

- Use unique `key` props when rendering lists to help React identify items.

### 12. Error Boundaries

- Use error boundaries (class components with `componentDidCatch`) to catch errors in the component tree.

### 13. Memoization

- Use `React.memo`, `useMemo`, and `useCallback` to optimize performance by memoizing components, values, or functions.

### 14. PropTypes & Type Checking

- Use `prop-types` or TypeScript for type checking props.

### 15. Controlled vs Uncontrolled Components

- Controlled: React manages the state (e.g., form inputs with `value` and `onChange`).
- Uncontrolled: DOM manages the state (use `ref`).

---

## Useful Code Snippets from Your Comments

```js
// useEffect(() => {
//   const timer = setInterval(() => {
//     console.log("React Oppppp!");
//   }, 1000);
//   return () => clearInterval(timer); // cleanup
// }, []);

// Always call super() in class constructors
// if(this.state.count !== prevState.count) { ... } // in componentDidUpdate
// Use optional chaining: json?.data?.cards
```

---

## Resources

- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Hooks API Reference](https://react.dev/reference/react)
- [Component Lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

---

## _These notes combine your code comments, best practices, and extra React concepts for quick revision._

## React Interview Questions & Answers (with Concepts and Best Practices)

### 1. What is React?

**Answer:** React is a JavaScript library for building user interfaces, especially single-page applications, using a component-based architecture.

---

### 2. What are components in React?

**Answer:** Components are reusable, independent pieces of UI. They can be functional (using hooks) or class-based (using lifecycle methods).

---

### 3. What is JSX?

**Answer:** JSX is a syntax extension for JavaScript that looks similar to HTML. It is used to describe UI structure in React components. JSX is compiled to `React.createElement` calls.

---

### 4. What are props and state?

**Props:** Data passed from parent to child component (read-only).
**State:** Local data managed within a component (can change over time).

---

### 5. What is the Virtual DOM?

**Answer:** The Virtual DOM is a lightweight copy of the real DOM. React uses it to efficiently update the UI by comparing the virtual DOM with the real DOM and applying only the necessary changes (diffing and reconciliation).

---

### 6. What are hooks? Name a few commonly used hooks.

**Answer:** Hooks are functions that let you use React features in functional components. Common hooks:

- `useState` (state management)
- `useEffect` (side effects)
- `useContext` (context API)
- `useRef`, `useMemo`, `useCallback`

---

### 7. What is useEffect and how does it work?

**Answer:** `useEffect` lets you perform side effects (data fetching, subscriptions, etc.) in functional components. It can run after every render, only once, or when dependencies change.

---

### 8. What is context in React?

**Answer:** Context provides a way to pass data through the component tree without passing props manually at every level. Useful for global data like user info, theme, etc.

---

### 9. What is prop drilling and how do you avoid it?

**Answer:** Prop drilling is passing data through many layers of components via props. Avoid it using Context API or state management libraries (Redux, Zustand, etc.).

---

### 10. What is Redux? Is it required for all React apps?

**Answer:** Redux is a state management library for predictable state updates. It is not required for all apps—use it for complex state needs. For simple apps, Context or local state is enough.

---

### 11. What is code splitting and why is it important?

**Answer:** Code splitting breaks your code into smaller bundles, loaded on demand. It improves performance by reducing initial load time. Use `React.lazy` and `Suspense` for component-level code splitting.

---

### 12. What are controlled and uncontrolled components?

**Controlled:** React manages the state (e.g., form input with value and onChange).
**Uncontrolled:** DOM manages the state (use `ref`).

---

### 13. What are keys in React lists and why are they important?

**Answer:** Keys help React identify which items have changed, are added, or are removed. Use unique and stable keys (not array index if possible).

---

### 14. What is an error boundary?

**Answer:** A class component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI. Use `componentDidCatch` and `getDerivedStateFromError`.

---

### 15. What is memoization in React?

**Answer:** Memoization optimizes performance by caching the result of expensive calculations or components. Use `React.memo`, `useMemo`, and `useCallback`.

---

### 16. What is the difference between useMemo and useCallback?

**useMemo:** Returns a memoized value.
**useCallback:** Returns a memoized function.

---

### 17. What is lifting state up?

**Answer:** Moving state to the closest common ancestor of components that need to share it.

---

### 18. What is the difference between mounting, updating, and unmounting?

- **Mounting:** Component is created and inserted into the DOM.
- **Updating:** Component is re-rendered due to state/props changes.
- **Unmounting:** Component is removed from the DOM.

---

### 19. What is reconciliation?

**Answer:** The process by which React updates the DOM by comparing the new virtual DOM with the previous one and applying only the necessary changes.

---

### 20. What are fragments in React?

**Answer:** Fragments (`<></>` or `<React.Fragment>`) let you group multiple elements without adding extra nodes to the DOM.

---

## React Best Practices (Quick List)

- Use functional components and hooks for new code.
- Keep components small and focused.
- Use prop-types or TypeScript for type safety.
- Use keys in lists.
- Avoid inline functions in render (use useCallback).
- Use memoization for expensive calculations/components.
- Clean up side effects in useEffect.
- Use Context for global data, but avoid overuse.
- Split code with React.lazy and Suspense.
- Write pure components when possible.
- Use error boundaries for robust apps.
- Keep state as local as possible.
- Prefer composition over inheritance.

---

## Deep Knowledge & Advanced Concepts

- **Reconciliation Algorithm:** React uses a heuristic O(n) algorithm for diffing virtual DOM trees.
- **Concurrent Mode:** Allows React to interrupt rendering to keep the app responsive (future feature, experimental).
- **Suspense for Data Fetching:** Not just for code splitting, but also for async data (with libraries like React Query).
- **Portals:** Render children into a DOM node outside the parent hierarchy (e.g., modals).
- **Refs:** Access DOM nodes or React elements directly.
- **Forwarding Refs:** Pass refs through components using `React.forwardRef`.
- **Render Props & HOCs:** Patterns for code reuse before hooks.
- **Server-Side Rendering (SSR):** Render React on the server for SEO and performance (Next.js).
- **Static Site Generation (SSG):** Pre-render pages at build time (Next.js).
- **Hydration:** Attaching event listeners to server-rendered HTML.

---

## Quick React Cheat Sheet

```js
// Functional Component
function MyComponent({ name }) {
  const [count, setCount] = useState(0);
  useEffect(() => { /* side effect */ }, [count]);
  return <div>Hello {name}, {count}</div>;
}

// Context
const MyContext = React.createContext();
<MyContext.Provider value={...}><Child /></MyContext.Provider>
const value = useContext(MyContext);

// Lazy Loading
const LazyComp = React.lazy(() => import('./LazyComp'));
<Suspense fallback={<div>Loading...</div>}><LazyComp /></Suspense>

// Memoization
const memoizedValue = useMemo(() => computeExpensive(), [dep]);
const memoizedFn = useCallback(() => fn(dep), [dep]);

// Error Boundary
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { /* log error */ }
  render() { return this.state.hasError ? <h1>Error!</h1> : this.props.children; }
}
```

---

_Use these questions, answers, and best practices for interviews and deep understanding of React!_

---

## More Advanced React Knowledge & Real-World Tips

### 1. React Design Patterns

- **Container/Presentational Pattern:** Separate logic (container) from UI (presentational).
- **Compound Components:** Components that work together and share implicit state (e.g., Tabs, Accordion).
- **Controlled vs Uncontrolled Patterns:** For forms and UI widgets.
- **Provider Pattern:** Use context to provide data/functions to many components.
- **Hooks Pattern:** Custom hooks for reusable logic.

### 2. Performance Optimization

- Use `React.memo` for pure functional components to avoid unnecessary re-renders.
- Use `useMemo` and `useCallback` to memoize expensive calculations and functions.
- Avoid passing new objects/arrays/functions as props unless needed.
- Use code splitting and lazy loading for large apps.
- Virtualize long lists (e.g., with `react-window` or `react-virtualized`).
- Avoid deep prop drilling; use context or state management.

### 3. Testing in React

- Use **Jest** for unit testing and **React Testing Library** for component testing.
- Test user interactions, not implementation details.
- Use `data-testid` for selecting elements in tests.
- Mock API calls and context providers in tests.

### 4. React Ecosystem

- **Routing:** `react-router-dom` for navigation.
- **State Management:** Context, Redux, Zustand, Jotai, Recoil, MobX.
- **Forms:** Formik, React Hook Form.
- **Styling:** CSS Modules, Styled Components, Emotion, Tailwind CSS.
- **Data Fetching:** SWR, React Query, Axios, Fetch API.
- **Type Checking:** PropTypes, TypeScript.

### 5. Accessibility (a11y)

- Use semantic HTML elements (e.g., `<button>`, `<nav>`, `<main>`).
- Add `aria-*` attributes for screen readers.
- Ensure keyboard navigation works for all interactive elements.
- Use color contrast and focus indicators.

### 6. Security Best Practices

- Never trust user input; always sanitize data.
- Avoid `dangerouslySetInnerHTML` unless necessary.
- Use HTTPS for API calls.
- Protect sensitive routes and data.

### 7. Real-World Tips

- Use environment variables for config (e.g., API URLs).
- Use error boundaries at the top level to catch app crashes.
- Use suspense boundaries for async loading states.
- Prefer composition over inheritance for code reuse.
- Keep dependencies up to date.
- Use ESLint and Prettier for code quality and formatting.

### 8. Common Pitfalls

- Mutating state directly (always use setState or state setters).
- Not providing unique keys in lists.
- Forgetting to clean up effects (memory leaks).
- Using hooks outside of React function components.
- Overusing context for frequently changing data (can cause re-renders).

### 9. Useful Libraries

- **classnames:** Conditionally join classNames.
- **date-fns** or **moment:** Date utilities.
- **uuid:** Generate unique IDs.
- **axios:** Promise-based HTTP client.
- **react-icons:** Popular icon packs.

### 10. Deployment

- Use Vercel, Netlify, or GitHub Pages for static React apps.
- For SSR/SSG, use Next.js or Remix.
- Use CI/CD pipelines for automated testing and deployment.

---

## Example: Custom Hook Template

```js
import { useState, useEffect } from "react";
function useCustomHook(someParam) {
  const [value, setValue] = useState(null);
  useEffect(() => {
    // logic here
    return () => {
      /* cleanup */
    };
  }, [someParam]);
  return value;
}
```

---

## Example: Compound Component Pattern

```js
function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          active: idx === activeIndex,
          onClick: () => setActiveIndex(idx),
        })
      )}
    </div>
  );
}
Tabs.Tab = function Tab({ active, onClick, children }) {
  return (
    <button
      style={{ fontWeight: active ? "bold" : "normal" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

---

## Example: Error Boundary (Class)

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // log error
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

_This section adds even more practical, advanced, and real-world React knowledge for interviews and daily development!_

---

## Even More Advanced & Modern React Knowledge

### 1. New and Emerging React Features

- **React Server Components:** Render components on the server and send only the necessary data to the client (experimental, used in Next.js App Router).
- **React Forget:** Automatic memoization by the React compiler (experimental).
- **useTransition & useDeferredValue:** For concurrent rendering and smooth UI updates.
- **useId:** Generate unique IDs for accessibility and hydration.
- **useSyncExternalStore:** For subscribing to external stores (used by libraries like Redux).

### 2. Server-Side Rendering (SSR) & Static Site Generation (SSG)

- **SSR:** Improves SEO and initial load by rendering HTML on the server (Next.js, Remix).
- **SSG:** Pre-renders pages at build time for fast static delivery (Next.js, Gatsby).
- **Incremental Static Regeneration (ISR):** Update static pages after deployment (Next.js).

### 3. Concurrent Rendering & Suspense

- **Concurrent Rendering:** React can interrupt rendering to keep the UI responsive (future standard).
- **Suspense for Data Fetching:** Combine loading states and async data (React Query, Relay, Next.js).

### 4. React Native

- Build native mobile apps using React (iOS, Android).
- Shares most React concepts, but uses native components instead of HTML.

### 5. Internationalization (i18n)

- Use libraries like `react-i18next` for multi-language support.
- Store translations in JSON files and use hooks/components to switch languages.

### 6. Animation in React

- Use CSS transitions, or libraries like `framer-motion`, `react-spring`, or `react-transition-group` for advanced animations.

### 7. DevTools & Debugging

- Use React DevTools browser extension to inspect component tree, state, and props.
- Use Redux DevTools for state debugging.
- Use source maps for easier debugging in production.

### 8. Large Scale App Structure

- Organize by feature/module, not by type (e.g., `features/user/`, `features/cart/`).
- Use absolute imports or path aliases for cleaner imports.
- Use barrel files (`index.js`) to re-export modules.

### 9. API Integration Patterns

- Use custom hooks for API logic (e.g., `useUser`, `usePosts`).
- Use SWR or React Query for caching, revalidation, and background updates.
- Handle loading, error, and success states in UI.

### 10. State Management Tips

- Use local state for UI, context for app-wide data, and external libraries for complex state.
- Avoid global state unless necessary.
- Normalize data for easier updates.

### 11. Useful React Patterns

- **Render Props:** Pass a function as a child to share code between components.
- **Higher-Order Components (HOC):** Functions that take a component and return a new component with added props/logic.
- **Controlled/Uncontrolled Inputs:** For forms and widgets.

### 12. React and TypeScript

- Use TypeScript for type safety and better developer experience.
- Define prop types, state types, and custom hook types.
- Use generics for reusable components and hooks.

### 13. Deployment & CI/CD

- Use Vercel, Netlify, AWS Amplify, or traditional servers.
- Set up CI/CD pipelines for automated testing, linting, and deployment (GitHub Actions, GitLab CI).

### 14. SEO in React

- Use SSR/SSG for better SEO.
- Use `react-helmet` or Next.js Head component to manage meta tags.
- Generate sitemaps and use semantic HTML.

### 15. Monitoring & Analytics

- Integrate tools like Sentry for error monitoring.
- Use Google Analytics or Plausible for usage tracking.

### 16. Community & Learning

- Follow the official React blog and RFCs for updates.
- Join communities: Stack Overflow, Reddit, Discord, Twitter.
- Practice on platforms like CodeSandbox, StackBlitz, and LeetCode (for JS/React challenges).

---

_This section adds even more advanced, up-to-date, and practical React knowledge for interviews, real-world projects, and deep learning!_
