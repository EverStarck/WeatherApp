// GET IP
// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_KEY}`
  );
  const userIp = await res.json();

  console.log("IP," + process.env.IPIFY_KEY);
  console.log("WEATHER," + process.env.OPENWEATHERMAP_KEY);
  console.log("PIXABAY," + process.env.PIXABAY_KEY);

  // Pass data to the page via props
  return { props: { userIp } };
}
