export const DAYS_IN_MONTH = 30;
export const BASE_RENT = 2000;
export const BASE_RENT_FORMATTED = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD"
}).format(BASE_RENT);
