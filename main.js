function showContent(section) {
  const content = document.getElementById("content");
  fetch(`${section}.html`)
    .then((response) => response.text())
    .then((data) => (content.innerHTML = data))
    .catch(
      (error) =>
        (content.innerHTML = `<p>Error loading ${section} content.</p>`)
    );
}
