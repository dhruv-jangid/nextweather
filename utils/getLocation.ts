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
