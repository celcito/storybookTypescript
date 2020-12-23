export const addClass = (el: HTMLElement, classToAdd: string): void =>
  el.classList.add(classToAdd);
export const hasClass = (el: HTMLElement, classTocheck: string): boolean =>
  el.classList.contains(classTocheck);
export const removeClass = (el: HTMLElement, classToRemove: string): void =>
  el.classList.remove(classToRemove);
export const verifyClass = (
  els: Array<HTMLElement>,
  classTocheck: string
): void => {
  els.forEach((el) => {
    if (hasClass(el, classTocheck)) removeClass(el, classTocheck);
  });
};
