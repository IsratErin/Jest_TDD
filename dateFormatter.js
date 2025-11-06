const dateFormatter = (input) => {
  if (input === null || !input) {
    return "";
  }
  const date = input instanceof Date ? input : new Date(input);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(date);
  return formattedDate;
};

export default dateFormatter;
