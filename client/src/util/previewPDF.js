/**
 * http://uoft-courseapi.herokuapp.com/get/CSC309H1
 */

function previewPDF() {
  const host = window.location.host;
  const myHeaders = new Headers();
  myHeaders.append("pragma", "no-cache");
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("Content-Type", "application/pdf");
  console.log(window.location.hostname);
  fetch(`https://${window.location.hostname}/PDF`, {
    method: "GET",
    headers: myHeaders
  })
    .then(res => res.blob())
    .then(response => {
      //Create a Blob from the PDF Stream
      console.log(response);
      const file = new Blob([response], {
        type: "application/pdf"
      });
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
      window.open(fileURL);
    })
    .catch(error => {
      console.log(error);
    });
}

export default previewPDF;
