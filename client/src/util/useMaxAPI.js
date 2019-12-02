/**
 * http://uoft-courseapi.herokuapp.com/get/CSC309H1
 */

function useMaxAPI() {
  const host = window.location.host;
  fetch(`http://127.0.0.1:5000/PDF`, {
    responseType: "blob" //Force to receive data in a Blob Format
  })
    .then(response => {
      //Create a Blob from the PDF Stream
      const file = new Blob([response.data], { type: "application/pdf" }); //Build a URL from the file
      const fileURL = URL.createObjectURL(file); //Open the URL on new Window
      console.log(fileURL);
      window.open("http://127.0.0.1:5000/PDF");
    })
    .catch(error => {
      console.log(error);
    });
}

export default useMaxAPI;
