export const addClass = (el: HTMLElement, classToAdd: string) =>
  el.classList.add(classToAdd);
export const hasClass = (el: HTMLElement, classTocheck: string) =>
  el.classList.contains(classTocheck);
export const removeClass = (el: HTMLElement, classToRemove: string) =>
  el.classList.remove(classToRemove);
export const verifyClass = (els: Array<HTMLElement>, classTocheck: string) => {
  els.forEach((el) => {
    if (hasClass(el, classTocheck)) removeClass(el, classTocheck);
  });
};

export function debounce(fn: () => void, ms: number, ...rest: any) {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, rest);
    }, ms);
  };
}
