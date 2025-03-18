export const convertCurrency = (amount: number | string) => {
  return new Intl.NumberFormat("ru-Ru", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(+amount);
};
