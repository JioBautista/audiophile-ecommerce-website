export async function fetchProductDetail(productId) {
  try {
    const response = await fetch("/src/data/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
