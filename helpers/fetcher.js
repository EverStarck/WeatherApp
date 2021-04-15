export async function fetcher(url) {
    console.log("llamando");
    const response = await fetch(url);
    console.log(response.status);

    if (!response.ok || response.status === "503" || response.status === "500") {
    console.log('Error calling to the api')
      return "Error calling to the api";
    } else {
      const dataJson = await response.json();
      console.log(dataJson);
      return dataJson;
    }
  }