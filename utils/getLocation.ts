export const getLocation = (): Promise<{
  lat: number;
  lng: number;
}> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords;
          const locationData = { lat, lng };
          localStorage.setItem("horizoniq", JSON.stringify(locationData));
          resolve(locationData);
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
