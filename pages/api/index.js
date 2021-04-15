// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   let ip = req.headers["X-Forwarded-For"] || req.connection.remoteAddress;
//   if (ip.substr(0, 7) == "::ffff:") {
//     ip = ip.substr(7);
//   }

//   // console.log(req.headers);

//   res.statusCode = 200;
//   // res.json({ name: "John Doe" });
//   res.json({ ip });
// };



export async function getData(passReq) {
  //   const myData = await db.query("posts");
  //   return myData;

  let myData =
    passReq.headers["x-forwarded-for"] ||
    passReq.connection.remoteAddress ||
    passReq.socket.remoteAddress ||
    (passReq.connection.socket
      ? passReq.connection.socket.remoteAddress
      : null);


  if (myData.substr(0, 7) == "::ffff:") {
    myData = myData.substr(7);
  }

  console.log(myData)

  return myData;
}

export default async (req, res) => {
  // const myData = await getData()
  // res.json(myData)

  //   let ip =
  //     req.headers["x-forwarded-for"] ||
  //     req.connection.remoteAddress ||
  //     req.socket.remoteAddress ||
  //     (req.connection.socket ? req.connection.socket.remoteAddress : null);

  //   res.statusCode = 200;
  //   res.json({ name: "John Doe", ip });
  //     console.log(ip);

  const myData = await getData(req);
  res.json({ myData });
};
