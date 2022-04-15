function throttle(
  delay: any,
  callback: any,
  debounceMode: any,
  noTrailing?: any
) {
  let timeoutID: any;
  let cancelled = false;
  let lastExec = 0;

  console.log(callback);

  function clearExistingTimeout() {
    if (timeoutID === undefined) return;
    clearTimeout(timeoutID);
  }

  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }

  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }

  function wrapper (...args: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = globalThis;
    const elapsed = Date.now() - lastExec;

    if (cancelled) return;

    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }

    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) exec();

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      );
    }
  }

  wrapper.cancel = cancel;
  return wrapper;
}

export const debounce = (callback: any, delay: any) =>
  throttle(delay, callback, false);
