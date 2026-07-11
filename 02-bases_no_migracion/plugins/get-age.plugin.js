import getAgePlugin from "get-age";

const getAge = (birthdate) => {
  if (!birthdate) return new Error("birthdate is requied");

  return getAgePlugin(birthdate);
};

export { getAge };
