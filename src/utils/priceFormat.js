export function priceFormat (price) {
    return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumIntegerDigits: 1,
        maximumFractionDigits: 0
    }).format(price);
}