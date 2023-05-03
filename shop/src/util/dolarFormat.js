export const dolorFormat = (numValue) => {
    const dolar = numValue / 4000;
    const formatter = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(dolar);
}