import Link from 'next/link';
import { deleteJuego } from '../lib/actions';


export function CreateJuego() {
  return (
    <Link
      href="/juegos/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span>Crear Juego</span>{' '}
    </Link>
  );
}

export function UpdateJuego({ id }: { id: number }) {
  return (
    <Link
      href={`/juegos/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
        <span>Actualizar Juego</span>{' '}
    </Link>
  );
}

export function DeleteJuego({ id }: { id: number }) {
  const deleteJuegoWithId = deleteJuego.bind(null, id);
  return (
    <form action={deleteJuegoWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <span>Eliminar Juego</span>{' '}
      </button>
     </form>
  );
}
