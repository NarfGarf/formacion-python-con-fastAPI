import mysql.connector

conn = mysql.connector.connect(
  host="localhost",
  user="mySQLUser",
  password="1234",
  database="juegos_db"
)

cursor = conn.cursor()


