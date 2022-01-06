fetch("http://172.105.253.222:8000/doctors")
  .then((res) => res.json())
  .then((json) => {
    // how to access each value
    document.write(JSON.stringify(json["data"]));
  });

// fetch("http://172.105.253.22:8000/doctors/61cd8f95423169b69988e76d", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((json) => {
//     // how to access each value
//     document.write(JSON.stringify(json["data"][0]));
//   });
// fetch("http://172.105.253.22:8000/doctors", {
//   method: "post",
//   headers: {
//     Accept: "*",
//     "Content-Type": "application/json",
//   },

//   //make sure to serialize your JSON body
//   body: JSON.stringify({
//     username: "anyName",
//     legalname: "realname",
//     email: "new@gmail.com",
//     password: "strongPass",
//     address: "new p add",
//   }),
// }).then((response) => {
//   console.log(response.json());
// });

// fetch("http://localhost:8000/doctors", {
//   method: "post",
//   headers: {
//     Accept: " *",
//     "Content-Type": "application/json",
//   },

//   //make sure to serialize your JSON body
//   body: JSON.stringify({
//     username: "anyName",
//     legalname: "realname",
//     email: "new@gmail.com",
//     password: "strongPass",
//     address: "new p add",
//   }),
// }).then((response) => {
//   console.log(response.json());
// });

// fetch('http://172.105.253.222:8000/doctors', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//    body: JSON.stringify({
//      // your expected POST request payload goes here
//       title: "My post title",
//       body: "My post content."
//       })
// })
//   .then(res => res.json())
//   .then(data => {
//    // enter you logic when the fetch is successful
//     console.log(data)
//   })
//   .catch(error => {
//   // enter your logic for when there is an error (ex. error toast)
//    console.log(error)
//   })
