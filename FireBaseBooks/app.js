import { apiKey, createNewBooks, getAllBooks, getBookById, updateBook, deleteBook } from './firebase-requests.js';

function extractFormData(formRef, formConfig) {
    return formConfig.reduce((acc, inputName) => {
        acc[inputName] = formRef.elements[inputName].value;
        return acc;
    }, {})
}

function fillFormWithData(formRef, formValue) {
    return Object.entries(formValue).map(([inputName, value]) => {
        formRef.elements.namedItem(inputName).value = value;
    });
}

function addTableRow(tbody, bookValue, bookId) {

    let tempRow = document.createElement('tr');

    tempRow.setAttribute('data-book-id', bookId);

    tempRow.innerHTML = `
        <td>${bookValue.title}</td>
        <td>${bookValue.author}</td>
        <td>${bookValue.isbn}</td>
        <td>
            <button data-method ="edit">Edit</button>
            <button data-method ="delete">Delete</button>
        </td>`;

    tbody.appendChild(tempRow);
}
(function doStuff() {

    let formInputs = ['title', 'author', 'isbn'];

    let formRef = document.querySelector('form');
    let tBodyRef = document.querySelector('tbody');
    let loadBooksButtonRef = document.querySelector('#loadBooks');

    formRef.addEventListener('submit', e => {
        e.preventDefault();

        let parsedForm = extractFormData(formRef, formInputs);

        createNewBooks(parsedForm);

    })

    function showAllBooks(tBodyRef) {
        getAllBooks()
            .then((res) => {
                tBodyRef.innerHTML = '';
                Object.entries(res).map(([id, bookValue]) => {
                    addTableRow(tBodyRef, bookValue, id);

                });
            });
    }

    loadBooksButtonRef.addEventListener('click', () => {

        showAllBooks(tBodyRef);
    });

    tBodyRef.addEventListener('click', async (e) => {
        e.preventDefault();

        let targetBookId = e.target.closest('tr').dataset.bookId;

        if (e.target instanceof HTMLButtonElement) {
            const { method } = e.target.dataset;

            if (method === 'edit') {
                await updateBook(extractFormData(formRef, formInputs), targetBookId)
            }
            if (method === 'delete') {
                await deleteBook(targetBookId);
            }
            showAllBooks(tBodyRef);

            return;
        }

        getBookById(targetBookId).then(x => {
            fillFormWithData(formRef, x);
        });
    });
})()