console.log("Script works");
uppercase.addEventListener("click", () => {
  console.log("Transforming to uppercase...");
  inpText.value = inpText.value.toUpperCase();
});
lowercase.addEventListener("click", () => {
  console.log("Transforming to Lowercase...");
  inpText.value = inpText.value.toLowerCase();
});
removeSpace.addEventListener("click", () => {
  console.log("Removing extra spaces...");
  inpText.value = inpText.value.replace(/\s+/g, " ").trim();
});
inpText.addEventListener("input", () => {
  console.log("Changed");
  charCount.innerText = inpText.value.length;
  wordCount.innerText = inpText.value.trim().split(" ").length;
});

function downloadFile(filenanme, content) {
  const element = document.createElement("a");
  const blob = new Blob([content], {
    type: "plain/text",
  });
  const fileUrl = URL.createObjectURL(blob);
  element.setAttribute("href", fileUrl);
  element.setAttribute("download", filenanme);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
window.onload = () => {
  document.getElementById("download").addEventListener("click", (e) => {
    const filename = document.getElementById("filename").value;
    const content = document.getElementById("inpText").value;
    if (filename && content) {
      downloadFile(filename, content);
    }
  });
};
