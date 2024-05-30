export const importAllImages = () => {
  const images = import.meta.glob(
    "../assets/images/cats/*.{png,jpg,jpeg,svg}",
    {
      eager: true,
    }
  );
  let imageObjects = {};
  Object.keys(images).forEach((key) => {
    const newKey = key.replace("../assets/images/", "");
    imageObjects[newKey] = images[key].default;
  });
  return imageObjects;
};
