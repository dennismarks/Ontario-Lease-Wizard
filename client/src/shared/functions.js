export const sendData = (data) => {
  // Will have to change in production
  const hostname = window.location.hostname;
  const port = '5000';
  fetch(`http://${hostname}:${port}/lease`,
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