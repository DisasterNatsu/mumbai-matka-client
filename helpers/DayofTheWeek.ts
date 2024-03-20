export const getDayOfWeek = (dateString: string) => {
  // Split the date string into day, month, and year components
  const [day, month, year] = dateString.split("-").map(Number);

  // Create a Date object with the provided year, month (zero-based), and day
  const date = new Date(year, month - 1, day); // month is zero-based in Date constructor

  // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });

  return dayOfWeek;
};
