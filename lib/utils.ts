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

export const getLocation = async (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          localStorage.setItem(
            "horizoniq",
            JSON.stringify({ latitude, longitude })
          );
          resolve({ latitude, longitude });
        },
        (err) => {
          reject(new Error(err.message));
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

export const capFirstLetters = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
