export function debounce<F extends (...args: any) => any>(func: F, ms: number) {
    let timer: null | NodeJS.Timeout = null;
    return function (this: any, ...arg: Parameters<F>) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(func, ms, ...arg);
        return timer;
    };
}

export function throttle(callback: any, limit: number) {
    let waiting = false; // Initially, we're not waiting
    return function (this: any) {
        // We return a throttled function
        if (!waiting) {
            // If we're not waiting
            callback.apply(this, arguments); // Execute users function
            waiting = true; // Prevent future invocations
            setTimeout(
                () =>
                    // After a period of time
                    (waiting = false), // And allow future invocations
                limit
            );
        }
    };
}

