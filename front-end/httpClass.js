class HttpRequests {
    get(url) {
        axios    
            .get(url)
            .then(res => res.data.forEach( user => addUserToList(user)))  
    }

    post(url, userData) {
        axios
            .post(url, userData)
    }

    put(url, userData) {
        axios
            .put(url, userData)
    }

    delete(url) {
        axios
            .delete(url)
    }
}