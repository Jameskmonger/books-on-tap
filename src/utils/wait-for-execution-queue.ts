// this can be used to `await` and resume at the end of the current execution queue
// useful to wait for async operations in tests
export const waitForExecutionQueue = () => new Promise(r => setTimeout(r));
