export function convertToAMPMFormat(time: string): string {
  // Split the time string into hours and minutes
  const [hours, minutes] = time.split(":").map(Number);

  // Create a Date object and set the hours and minutes
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  // Get hours and minutes in 12-hour format with leading zeros
  const hours12 = (date.getHours() % 12 || 12).toString().padStart(2, "0");
  const minutesStr = date.getMinutes().toString().padStart(2, "0");

  // Determine whether it's AM or PM
  const meridiem = date.getHours() >= 12 ? "PM" : "AM";

  // Construct the formatted time string
  return `${hours12}:${minutesStr} ${meridiem}`;
}
