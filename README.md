# Book Catalog

<img src='./assets/react.webp' width="300px">

This is a basic Book Catalog application built with React to check your understanding of React concepts. It allows you to add and view books from a catalog array.

## Features

- Display a heading with the title "Book Catalog" from props
- Display the list of books
- Form to add a new book to the list



## Getting Started

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser to view the app


## Instructions

### BookCatalog Component

1. Import the useState and useEffect hooks from React.

1. The component should accept a prop named `bookTitle`

1. Set up two pieces of state using the useState hook:
    - `books` to store the array of books initialized with an empty array
    - `newBook` to store the details of a book being added initialized as an object with empty strings for `title`, `author`, and `year` inside the object.

1. Implement a `useEffect` hook to set the `books` state to the `initialBooks` array. The `useEffect` should only run once.

1. In the return statement, update the JSX structure to:
    - Use the `bookTitle` prop in an `h1` heading that must be received as a prop from the App component
    - Create:
        - a form for adding new books
        - input attributes for `title`, `author`, and `year`
        - a label attribute for each input
        - a submit button for the form
        - an unordered list to display all the books
    - Each book in the list should have its title, author, and year displayed in an li element


1. Create these functions inside the BookCatalog component:
    - `handleChange` that updates the `newBook` state as the user types in the form fields.
    - `handleSubmit` that adds a new book to the `books` state.


