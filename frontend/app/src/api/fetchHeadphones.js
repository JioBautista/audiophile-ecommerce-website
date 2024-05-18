export async function fetchHeadphones() {
  try {
    const response = await fetch("/src/data/data.json");
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
