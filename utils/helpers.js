export const generateRandomId = () => Math.floor(Math.random() * 1000000);

export const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // пробелы в "-"
    .replace(/[^\w\-]+/g, '')       // убрать все не буквенно-цифровые
    .replace(/\-\-+/g, '-')         // убрать двойные "-"
    .replace(/^-+/, '')             // убрать "-" в начале
    .replace(/-+$/, '');            // убрать "-" в конце
};
