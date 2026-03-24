'use server';

import { redirect } from "next/navigation";
import { API_BASE, Juego } from "./definitions";
import { revalidatePath } from "next/cache";

export async function createJuego(formData: FormData) {
  const juego = {
    id: 0,
    nombre: formData.get("nombre") as string,
    consola: formData.get("consola") as string
  };
  const res = await fetch(`${API_BASE}/juego/`, {
    method: "POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify(juego),
  });
  if (!res.ok) {
    throw new Error("Error creando juego:", { cause: await res.text() });
  }
  revalidatePath("/");
  redirect("/");
}

export async function updateJuego(juego: Juego, formData: FormData) {
  juego.nombre = formData.get("nombre") as string;
  juego.consola = formData.get("consola") as string;
  const res = await fetch(`${API_BASE}/juego`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(juego),
  });
  
  if (!res.ok) {
    if (res.status === 404) throw new Error("Juego no encontrado");
    throw new Error("Error actualizando juego");
  }
  revalidatePath("/");
  redirect("/");
  
}

export async function deleteJuego(id: number) {
  const res = await fetch(`${API_BASE}/juego/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error("Juego no encontrado");
    throw new Error("Error borrando juego");
  }
  return res.json();
}