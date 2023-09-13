import "../../src/sass/style.scss";
import Split from "split.js";
import { Offcanvas } from "bootstrap";
Split(["#editor", "#output"], {
  direction: "vertical",
  sizes: [75, 25],
});

document.querySelector("#playBtn").addEventListener("click", () => {
  const code = codeEditor.getValue();
  const outputBody = document.querySelector("#output--body");

  //DATA OBJECT
  let data = new FormData();
  data.append("type", "py");
  data.append("code", code);

  let client = new XMLHttpRequest();
  client.open(
    "POST",
    "http://localhost/code-editor/php/server/api/execute.php"
  );
  client.send(data);
  client.onload = function () {
    outputBody.innerHTML = JSON.parse(this.responseText).data.replace(
      /(?:\r\n|\r|\n)/g,
      "<br>"
    );
  };
});

//WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
// fetch("http://localhost/page/php/server/api/execute.php", {
//   method: "POST",
//   body: {
//     type: "py",
//     code: "print('hello world')",
//   },
// })
//   .then((res) => res.json())
//   .then((compiledData) => {
//     console.log(compiledData.data);
//   });
// console.log(
//   JSON.stringify({
//     type: "py",
//     code: "print('hello world')",
//   })
// );
