import { useState } from "react";

import BookCatalog from "./BookCatalog";



const App = () => {
  const [title,setTitle] = useState('Book Catalog')
    return <BookCatalog bookCatalog={title} />;
};

export default App;

