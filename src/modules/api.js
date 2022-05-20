import "regenerator-runtime/runtime";

const getWeather = async (search) => {
  try {
    const link = import.meta.env.VITE_LINK;
    const response = await fetch(`${link}weather?search=${search}`);
    if (response.status === 404) {
      throw new Error();
    } else {
      const finalData = await response.json();
      return finalData;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default getWeather;
