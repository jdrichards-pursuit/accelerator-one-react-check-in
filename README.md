# Book Catalog

This is a simple book catalog application built with React. It allows you to add, remove, and view books in a catalog.

## Features

- Display the total number of books
- Display the list of books
- Add a new book to the list
- Display a heading with the title "Book Catalog"


## Getting Started

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser to view the app


## Instructions

1. In the existing BookCatalog.jsx file, import the useState and useEffect hooks from React.

2. The component should accept a prop named bookTitle
  
3. Set up two state variables using the useState hook:
    - books to store the array of books
    - newBook to store the details of a book being added

4. Implement a useEffect hook to load the initial books into the books state when the component mounts. This should use the existing array in the file.

5. Create a function to handle input changes that updates the new book state as the user types in the form fields.

6. Create a function to handle adding a new book to the books state when the form is submitted.

7. In the component's return statement, update the JSX structure to:
    - Use the bookTitle prop in an h1 heading
    - Display the total number of books
    - Create a form for adding new books with inputs for title, author, and year
    - Add a submit button for the form
    - Create a list to display all the books

