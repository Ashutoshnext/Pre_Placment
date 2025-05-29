
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data payload");
      } else {
        reject(new Error("Network error"));
      }
    }, 1000); 
  });
}

async function fetchDataHandler() {
  try {
    const data = await fetchData();
    console.log("Fetched data successfully!", data);
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
}

fetchDataHandler();
