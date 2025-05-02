export async function fetchQuizQuestions(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    return data.results; // Ensure this matches the API response structure
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return [];
  }
}
