import Link from 'next/link';
import { deleteJuego } from '../lib/actions';


export function CreateJuego() {
  return (
    <div className="flex justify-center">
      <Link
        href="/juegos/create"
        className="inline-flex h-10 w-80 justify-center items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <span>Crear Juego</span>
      </Link>
    </div>
  );
}

export function UpdateJuego({ id }: { id: number }) {
  return (
    <Link
      href={`/juegos/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100 cursor-pointer"
    >
        <span>Actualizar Juego</span>{' '}
    </Link>
  );
}

export function DeleteJuego({ id }: { id: number }) {
  const deleteJuegoWithId = deleteJuego.bind(null, id);
  return (
    <form action={deleteJuegoWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100 cursor-pointer">
        <span className="sr-only">Delete</span>
        <span>Eliminar Juego</span>{' '}
      </button>
     </form>
  );
}
