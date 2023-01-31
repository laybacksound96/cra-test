async function ApiCaller(charName) {
  const url =
    "https://developer-lostark.game.onstove.com/characters/" +
    charName +
    "/siblings";
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      accept: "application/json",
      authorization: `bearer ${process.env.REACT_APP_LOSTARK_API_KEY}`,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  const data = await response.json();
  return data;
}

export default ApiCaller;
