'use client';

import { createJuego } from '@/app/lib/actions';
import { Juego } from '@/app/lib/definitions';
import Link from 'next/link';


export default function createJuegoForm() {
  return (
    <div className="max-w-md mx-auto">
    <form action={createJuego}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Nombre de Juego */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Nombre del juego:
          </label>
          <div className="relative">
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Nombre del juego"
            >
            </input>
            </div>
        </div>

        {/* Consola */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Consola
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="consola"
                name="consola"
                type="text"
                placeholder="Nombre de la consola"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar Creacion
        </Link>
        <button
          type="submit"
          className='flex cursor-pointer h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
        >
          Crear Juego
        </button>
      </div>
    </form>
    </div>
  );
}
