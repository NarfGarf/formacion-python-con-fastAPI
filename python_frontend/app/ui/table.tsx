'use client';
import { getJuegos } from '@/app/lib/data';
import { DeleteJuego, UpdateJuego } from './buttons';

type Juego = { id: number; nombre: string; consola: string };

export default async function JuegosTable() {
    const juegos = await getJuegos();

    return (
        <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">

        <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
        <tr>
        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
        Nombre
        </th>
        <th scope="col" className="px-3 py-5 font-medium">
        Consola
        </th>
        <th scope="col" className="relative py-3 pl-6 pr-3">
        <span className="sr-only">Edit</span>
        </th>
        </tr>
        </thead>
        <tbody className="bg-white">
        {juegos?.map((juego:Juego) => (
            <tr
            key={juego.id}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
            <div className="flex items-center gap-3">
            <p>{juego.nombre}</p>
            </div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">
            {juego.consola}
            </td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
            <div className="flex justify-end gap-3">
            <UpdateJuego id={juego.id} />
            <DeleteJuego id={juego.id} />
            </div>
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
        </div>
        </div>
    );
}
