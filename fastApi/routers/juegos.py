from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from db_client import client

juegoRouter = APIRouter()

class Juego(BaseModel):
    id:int
    nombre:str
    consola:str


# get
@juegoRouter.get("/juegos/")
async def getJuegos():
    juegoList=[]
    client.cursor.execute("SELECT * FROM juegos")

    for x in client.cursor:
        juegoList.append(Juego(id=x[0],nombre=x[1],consola=x[2]))

    return juegoList

# get from id
@juegoRouter.get("/juego/{id}")
async def getJuegoFromId(id:int):
    client.cursor.execute("SELECT * FROM juegos WHERE id = %s", (id,))
    row = client.cursor.fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="Juego no encontrado")
    return Juego(id=row[0], nombre=row[1], consola=row[2])

# create
@juegoRouter.post("/juego/", status_code=201)
async def createJuego(juego:Juego):
    try:
        client.cursor.execute("INSERT INTO juegos (id, nombre,consola) VALUES (%s, %s,%s)",(juego.id, juego.nombre, juego.consola))
        client.conn.commit()
        print(client.cursor.rowcount, "juego agregado")
        return {"success":"juego agregado"}
    except:
        raise HTTPException(status_code=400,detail="juego ya existe")

# delete
@juegoRouter.delete("/juego/{id}")
async def deleteJuego(id:int):
    client.cursor.execute("DELETE FROM juegos WHERE id = %s ",(id,))
    client.conn.commit()
    if client.cursor.rowcount == 0:
        raise HTTPException(status_code=404,detail="juego no encontrado")
    print(client.cursor.rowcount, "juego borrado")
    return {"success":"juego borrado"}

# update
@juegoRouter.put("/juego")
async def putJuego(juego: Juego):
    client.cursor.execute("UPDATE juegos SET nombre = %s,consola = %s WHERE id = %s",( juego.nombre, juego.consola,juego.id))
    client.conn.commit()
    #if client.cursor.rowcount == 0: esto tambien se llama cuando el juego existe pero no se actualiza nada porque los datos son iguales
    #    print(f"UPDATE juegos SET nombre = {juego.nombre},consola = {juego.consola} WHERE id = {juego.id}")
    #    raise HTTPException(status_code=404,detail="juego no encontrado")
    return {"success":"juego actualizado"}
