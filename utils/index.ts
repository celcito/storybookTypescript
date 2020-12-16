export const addClass = (
  el: { classList: { add: (arg0: string) => any } },
  classToAdd: string
) => el.classList.add(classToAdd);
export const hasClass = (
  el: { classList: { contains: (arg0: string) => any } },
  classTocheck: string
) => el.classList.contains(classTocheck);
export const removeClass = (
  el: { classList: { remove: (arg0: string) => any } },
  classToRemove: string
) => el.classList.remove(classToRemove);
export const verifyClass = (els: any[], classTocheck: string) => {
  els.forEach((el: any) => {
    if (hasClass(el, classTocheck)) removeClass(el, classTocheck);
  });
};

export function debounce(
  fn: { apply: (arg0: any, arg1: IArguments) => void },
  ms: number
) {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
