import "regenerator-runtime/runtime";

class Weather {
  static getWeather = async (search) => {
    try {
      const response = await fetch(`https://huxjksutkr5d7u7a.herokuapp.com/weather?search=${search}`);
      if (response.status === 404) {
          throw new Error()
      } else {
        const finalData = await response.json();
        return finalData;
      }
    } catch(e) {
      return false
    }
  };


}

export { Weather };