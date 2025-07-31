export const formatDate = (isoDate: string) => {
  const cleaned = isoDate.replace(" -", "-");

  return new Date(cleaned).toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
};
