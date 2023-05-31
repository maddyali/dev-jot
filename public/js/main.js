const deleteBtns = document.querySelectorAll(".fa-trash");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", deleteJE);
});

async function deleteJE() {
  const entryId = this.parentNode.parentNode.dataset.id;

  try {
    const response = await fetch("journal/deleteEntry", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entryIdFromJSFile: entryId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
