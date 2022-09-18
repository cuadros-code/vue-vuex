
export const generateRandomInt = () => {
  return new Promise( resolve => {
    const rnsInt = Math.floor(Math.random() * 20)
    setTimeout(() => {
      resolve(rnsInt)
    }, 2000);
  })
}