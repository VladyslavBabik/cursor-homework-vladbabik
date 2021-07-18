async function getRandomChinese(length) {
  let randomChinese = "";
  for (let i = 0; i < length; i++) {
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        const index = Date.now().toString().slice(-5);
        const convertToChinese = String.fromCharCode(index);
        resolve(convertToChinese);
      }, 50 * i);
    });
    randomChinese += await promise;
  }
  console.log(randomChinese);
}
getRandomChinese(6);
