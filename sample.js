
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const signInBtn = document.getElementById('signin-btn');
    const form = document.getElementById('csrf-form');
    const csrfInput = document.getElementById('csrf-input');
    const cookieBtn = document.getElementById('cookie-btn');
    const cookie = document.getElementById('cookie');

    cookieBtn.addEventListener('click', (event) => { 
        event.preventDefault();

        axios.get('http://localhost:4200/api/auth/csrf')
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          // show the cookie on the page
          cookie.innerHTML = response.data.csrfToken
        })
    });
    signInBtn.addEventListener('click', (event) => { 
        event.preventDefault();
     
        axios.get('http://localhost:4200/api/auth/csrf')
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            csrfInput.value = response.data.csrfToken
            // show the cookie on the page
            cookie.innerHTML = response.data.csrfToken
            form.submit()
          })
    
        
    })
        
     


























// console.log('start')
//           axios.get('http://localhost:4200/api/auth/csrf')
//           .then(function (response) {
//             console.log(JSON.stringify(response.data));
//             // if (response.data.csrfToken) {
//             //     console.log(response)
//             //     axios.post('http://localhost:4200/api/auth/signin/azureb2c', {
//             //         header: {
//             //             'csrfToken': response.data.csrfToken
//             //         }
//             //     })
//             //     .then(function (response) { 
//             //         console.log(response)

//             //         console.log(JSON.stringify(response.data));
//             //     }).catch(function (error) {
//             //         throw new Error(error);
//             //     })
//             // }
//             // else {
//             //     throw new Error('No csrfToken present in response');
//             // }
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
          
//     })
});

