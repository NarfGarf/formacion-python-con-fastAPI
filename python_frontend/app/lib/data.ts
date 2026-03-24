import { API_BASE,Juego } from "./definitions";


export async function getJuegos() {
  const res = await fetch(`${API_BASE}/juegos/`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener juegos");
  console.log("Juegos obtenidos:", await res.clone().json());
  return res.json();
}


export async function getJuegoFromID(id: number) {
  const res = await fetch(`${API_BASE}/juego/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener juego");
  console.log("Juego obtenido:", await res.clone().json());
  return res.json();
}