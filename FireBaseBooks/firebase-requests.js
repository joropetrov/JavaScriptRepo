export const apiKey = 'https://dbexercises.firebaseio.com/';

export const getAllBooks = () => {
    return fetch(apiKey + 'books.json').then(res => res.json());
},

getBookById = (bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`).then(res => res.json());
},

 createNewBooks = (bookBody) => {
    return fetch(apiKey + 'books.json', {
        method: 'POST',
        body: JSON.stringify(bookBody)
    })
    .then(res => res.json());
},

 updateBook = (bookBody, bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`, {
        method: 'PUT',
        body: JSON.stringify(bookBody)
    })
    .then(res => res.json());
},

 deleteBook = (bookId) => {
    return fetch(`${apiKey}books/${bookId}.json`,{
    method: 'DELETE'
    })
    .then(res => res.json());
};