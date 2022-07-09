const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (amount: number) => CURRENCY_FORMATTER.format(amount);

export default formatCurrency;
