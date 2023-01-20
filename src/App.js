import { useState } from "react";
import { marked } from "marked";
import './App.css';

function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Project!

  ## This is a subheading.

  ### Here are some more examples of using markdown:

  This is a [link](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)

  This is code: 
  \`<div></div>\` 

  And this is a code block: 
  \`\`\` 
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 24
  } 
  \`\`\`

  These are list items:
  - Villager
  - Duck Hunt
  - Mario


  This is a blockquote:
  > Backslash!

  This is an image:
  ![Person in a forest shining a flashlight on snow with a backdrop of a starry night](person-in-snow.jpg)

  This is bolded text:
  **PK Fire!**
  `);

  marked.setOptions({
    breaks: true
  })
  
  return (
    <div className="App">
      <textarea 
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
