import { reactive } from 'vue';

type Task<T> = () => Promise<T>;

type Options = {
    // whether or not to execute the task immediately
    immediate?: boolean
};

export function useAsync<T>(task: Task<T>, options: Options = {}) {
    // your logic goes here
};