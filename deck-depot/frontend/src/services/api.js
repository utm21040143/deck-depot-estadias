const API_URL = "https://deck-depot-backend-abc123-3001.app.github.dev/api"; // tu URL real

export async function obtenerProductos() {
  const res = await fetch(`${API_URL}/productos`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error: ${res.status} - ${text}`);
  }
  return await res.json();
}
