export default async function currenceApi() {
  const currence = await fetch('https://economia.awesomeapi.com.br/json/all', {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));

  delete currence.USDT;

  return currence;
}

export async function initialsApi() {
  const currence = await fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .catch((error) => console.log(error));

  delete currence.USDT;

  const initials = Object.keys(currence);

  return initials;
}
