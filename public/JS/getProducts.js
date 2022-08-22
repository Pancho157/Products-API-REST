const productsContainer = document.getElementById("productsContainer");

async function getProducts() {
  try {
    const response = await fetch("/api/productos", {
      method: "GET",
    });
    console.log(response);
  } catch (err) {
    return new Error(err);
  }
}
