const path = process.env.NODE_ENV === "development" ? `http://${window.location.hostname}:5000` : `https://${window.location.hostname}`

export const sendData = (data) => {
  // Will have to change in production
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

export const getData = () =>
  // Will have to change in production 
  fetch(`${path}/lease`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log(error);
    });