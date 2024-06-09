export async function fetchProducts() {
  try {
    const response = await fetch("/src/data/data.js");
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
