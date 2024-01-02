const url = "src.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const boxesContainer = document.getElementById("boxes");
    const searchBar = document.getElementById("searchBar");

    // Function to filter and display boxes
    function updateBoxes(searchTerm = "") {
      boxesContainer.innerHTML = ""; // Clear existing boxes

      for (let item of data.apps) {
        // Filter by name
        if (item.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
          const PackageID = item.PackageID;
          const viewCountEl = document.createElement("h4");
          viewCountEl.textContent = "Loading...";

          async function getViewCount(packageId, viewCountEl) {
            const url = `https://bootloopdb.c22code.repl.co/${PackageID}`;
            const response = await fetch(url);
            const data = await response.text();
            viewCountEl.textContent = `Bootloops: ${data}`;
          }

          getViewCount(PackageID, viewCountEl);
          const box = document.createElement("div");
          box.classList.add("box");

          const img = document.createElement("img");
          img.setAttribute("src", item.Icon);

          const title = document.createElement("h3");
          title.textContent = item.Name;

          const spacer = document.createElement("br");

          const downloadLink = item.Releases[item.Releases.length - 1].Package;
          const downloadBtn = document.createElement("a");
          downloadBtn.setAttribute("href", downloadLink);
          downloadBtn.textContent = "GET";

          box.appendChild(img);
          box.appendChild(title);
          box.appendChild(spacer);
          box.appendChild(viewCountEl);
          box.appendChild(downloadBtn);

          boxesContainer.appendChild(box);
        }
      }
    }

    // Initial display
    updateBoxes();

    // Event listener for search bar
    searchBar.addEventListener("input", (event) => {
      updateBoxes(event.target.value);
    });
  })
  .catch((error) => console.error(error));
