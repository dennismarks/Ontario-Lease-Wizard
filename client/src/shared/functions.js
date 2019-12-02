export const sendData = (data) => {
  // Will have to change in production
  // const hostname = window.location.hostname;
  // const port = '5000';
  const path = process.env.NODE_ENV === "development" ? `http://${window.location.hostname}:5000` : `https://${window.location.hostname}`
  console.log("path", path)
  fetch(`${path}/lease`,
    {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PATCH",
    body: JSON.stringify(data)
  }).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
};