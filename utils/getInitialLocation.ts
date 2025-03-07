export const getInitialLocation = (): [number, number] => {
  if (typeof window === "undefined") {
    return [51.505, -0.09];
  }

  const storedLocation = localStorage.getItem("horizoniq");
  if (storedLocation) {
    const { latitude, longitude } = JSON.parse(storedLocation);
    return [latitude, longitude];
  }
  return [51.505, -0.09];
};
