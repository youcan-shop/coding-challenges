# Senior Software Engineer - Typescript (WIP)

> [!IMPORTANT]
> Follow the instructions and evaluation criteria closely, your work will be assessed accordingly. While discussing design choices and implementation details is possible, the criteria outlined in this document must be implemented first before any debate.

## Context

Your task is to implement an easy to use async state management composable in Vue3, with Typescript support.

### Prerequisites

- Vue 3.4
- Typescript 5

## Instructions

Example files are in [The context folder](./context/).
You must implement a `useAsync` composable that does the following:

```ts
// usage
useAsync<T>(
    task // MaybeRef<() => Promise<T>>,
    options: { immediate?: boolean } // whether or not to instantly execute the task
)

// non-awaited, must not return a promise
// this will not trigger the suspense fallback if present

const {
    data, // ref of type T | unknown, this is the async state
    error, // ref of error, whether or not the task failed
    pending, // ref of boolean, whether or not the task finished
    execute, // a function that (re)executes the task and updates the state
    abort, // a function that aborts the running task
} = useAsync<T>(/** async code */)

// awaited, same as the above with minor differences
// this will trigger the suspense fallback if present

const {
    data, // ref of type T, or null if error
    error,
    pending,
    execute,
    abort,
} = await useAsync<T>(/** async code */)
```

### Example usage

Can be used to run a fetch request and transform the data for example.

```ts
const { data, pending } = useAsync(
    async ({ signal }) => {
        const res = await fetch('/api/things', { signal })
            .then(res => res.json());

        return await res.json(); // this is the data or state
    }
);
```

### Behavior

- The return type must be the same whether or not it is awaited.
- If the first argumnt (`task`) is a ref, the task must be re-executed on every change.
- The invoked task must be called with an options argument, that has to include at least an `AbortSignal` that the user can leverage to cancel their task.

## Evaluation criteria

- Ability to follow instructions
- Code must be consistent regardless of which style is used.

## Submission

Please implement your solution on an online development environment (e.g. [vue.new](https://vue.new)), and send it to [tech-challenge@youcan.shop](mailto://tech-challenge@youcan.shop).
