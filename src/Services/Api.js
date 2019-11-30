const superagent = require('superagent');

var Api = {
    get() {
        return new Promise(function(resolve, reject) {
            superagent
                .get('https://api.darksky.net/forecast/8bbc6cb016c26deee2b7b0e043f8bcf6/42.3601,-71.0589')
                .end((error, response) => {
                    // Calling the end function will send the request
                    if (error) {
                        reject(error)
                    } else {
                        resolve(response.body)
                    }
                });
        });
    }
}


export default Api;

// GET https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589