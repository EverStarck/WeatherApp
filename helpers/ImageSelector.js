export function imgSelecter(src) {
  if (src === "01d") return `01d`;
  if (src === "01n") return `01n`;
  if (src === "02d" || src === "02n") return `02`;
  if (src === "03d" || src === "03n") return `03`;
  if (src === "04d" || src === "04n") return `04`;
  if (src === "09d" || src === "09n") return `09`;
  if (src === "10d") return `10d`;
  if (src === "10n") return `10n`;
  if (src === "11d" || src === "11n") return `11`;
  if (src === "13d" || src === "13n") return `13`;
  if (src === "50d" || src === "50n") return `50`;
}
