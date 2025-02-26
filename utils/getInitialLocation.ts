export const getInitialLocation = (): [number, number] => {
  if (typeof window === "undefined") {
    return [51.505, -0.09];
  }

  const storedLocation = localStorage.getItem("horizoniq");
  if (storedLocation) {
    try {
      const parsed = JSON.parse(storedLocation);
      return [parsed.lat, parsed.lng];
    } catch (e) {
      console.error("Failed to parse location from localStorage:", e);
    }
  }
  return [51.505, -0.09];
};
