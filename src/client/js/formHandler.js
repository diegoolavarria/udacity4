const fieldsRequired = [
  "score_tag",
  "agreement",
  "subjectivity",
  "confidence",
  "irony",
];

const handleSubmit = (event) => {
  event.preventDefault();

  // check what text was put into the form field
  let text = document.getElementById("name").value;

  const testText = Client.checkForName(text);

  if (!testText) {
    alert("Input too short.");
  } else {
    fetch("http://localhost:3001/submittext", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fieldsRequired.forEach((field) => {
          document.getElementById(field).innerHTML = data[field];
        });
      });

    return true;
  }
};

export { handleSubmit };
