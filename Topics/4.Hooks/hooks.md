### Hooks

Hooks are special JS functions that provides a simpler and more powerful way to manage state, handle side effects, and reuse logic.

Before Hooks, you had to use class components to manage state and lifecycle methods, which was often confusing.

we will see it very soon!

The two most important hooks are

1. useState()
   - lets you to create local state variable
   - whenever we update the state variable the UI re renders
   - reconciliation is triggered
2. useEffect()
   - The callback function in the useEffect() will be executed after the UI is rendered

**The Rules of Hooks**
There are two strict rules you must follow when using Hooks. Breaking them can lead to bugs and unpredictable behavior.

1. Only Call Hooks at the Top Level: Do not call Hooks inside loops, conditions, or nested functions. They must be called at the top of your functional component.
2. Only Call Hooks from React Functions: Do not call Hooks from regular JavaScript functions. You can only call them from functional components or other custom Hooks
