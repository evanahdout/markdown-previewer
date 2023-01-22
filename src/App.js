import { useState } from "react";
import { marked } from "marked";
import './App.css';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";


function App() {
  const [text, setText] = useState(
`# Welcome to my React Markdown Project!
## The user can type input text in the editor box and a markdown output of that text will be displayed in the preview box.
### Here are some more examples of using markdown:
You can insert links: [link](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)
You can also insert code: \`<div></div>\` 
This is a code block: 
\`\`\` 
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 24
}
\`\`\`
You can create an unordered list:
- Villager
- Duck Hunt
- Mario
You can insert a blockquote:
>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada tempor lacinia. Suspendisse sed pharetra mi, a pulvinar dui. Sed semper, diam at commodo tristique, dolor tortor condimentum eros, ut semper lectus sem rhoncus quam. Vestibulum at orci magna. Vestibulum non gravida urna. Pellentesque sollicitudin ut nibh cursus iaculis. Suspendisse consectetur, sem efficitur rhoncus tempus, mauris magna pulvinar odio, nec accumsan mi mi ut enim. Pellentesque ac gravida orci, non facilisis ligula. Nam sagittis, odio eget blandit auctor, eros arcu elementum turpis, nec pulvinar arcu ex sed risus. Aenean nec nunc condimentum, cursus felis eu, vulputate erat.

This is an image: ![Person in a forest shining a flashlight on snow with a backdrop of a starry night](https://i.imgur.com/KuWIeI1.jpeg)
Here's some bolded text: **PK Fire!**`
);

  marked.setOptions({
    breaks: true
  })
  
  return (
    <div className="App">
      <Editor onChange={setText} text={text} />
      <div id="separator"/>
      <Previewer markdown={marked(text)} />
    </div>
  );
}

export default App;