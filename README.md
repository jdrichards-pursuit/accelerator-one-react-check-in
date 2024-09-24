# Book Catalog

<img src='./assets/react.webp' width="300px">

This is a basic book catalog application built with React. It allows you to add and view books from a catalog array.

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

### BookCatalog Component

1. Import the useState and useEffect hooks from React.

1. The component should accept a prop named bookTitle

1. Set up two state variables using the useState hook:
    - `books` to store the array of books initialized with an empty array
    - `newBook` to store the details of a book being added initialized as an object with empty strings for title, author, and year.

1. Implement a useEffect hook to load the initial books into the books state when the component mounts. This should use the existing array, `initialBooks`, already created to load the state. It should only run once.

1. In the return statement, update the JSX structure to:
    - Use the bookTitle prop in an h1 heading that must be received as a prop from the App component
    - Display the total number of books in a string with the format e.g."Total books: 11"
    - Create a form for adding new books with inputs for title, author, and year
    - Add a submit button for the form
    - Create a unordered list to display all the books
    - Each book in the list should have its title, author, and year displayed in an li element


1. Add to the BookCatalog component functions to handle:
    -  input changes that updates the newBook state as the user types in the form fields. Call this function handleChange.
    - form submission that adds a new book to the books state. Call this function handleSubmit.


