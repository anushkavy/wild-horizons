export function getDataByPathParams(data, locationType, location) {
  const filteredData = data.filter(
    (destination) =>
      destination[locationType].toLocaleLowerCase() ===
      location.toLocaleLowerCase()
  );
  return filteredData;
}
