export const getWondersOfTheWorld = () => {
  const URL = 'http://www.mocky.io/v2/5bdd28dd32000075008c6227';
  return fetch(URL)
    .then(response => response.json())
    .then((result = {}) => {
      localStorage.apiHitCount = JSON.stringify(JSON.parse(localStorage.apiHitCount) + 1);
      console.log(result.data);
      // return new Promise((resolve) =>{
      //   resolve(result.data || []);
      // });
      return result.data || [];
    })
    .catch(error => {
      console.log(error);
      return [];
      // return new Promise((resolve =>{
      //   resolve([]);
      // }));
    });
}