import pandas as pd
import sqlite3



conn = sqlite3.connect("./garbage.sqlite")
cur = conn.cursor()
cur.execute("""CREATE TABLE IF NOT EXISTS producao_lixo 
            (Estado VARCHAR NOT NULL PRIMARY KEY, 
            Predio TEXT NOT NULL,
            producao INTEGER);""")


for i, row in consumo_domesticos.iterrows():
    cur.execute("INSERT INTO consumoDomestico (Country, Coffee_type, domestic_consumption) VALUES (?, ?, ?)",
                (row['Country'], row['Coffee type'], row['domestic_consumption']))


conn.commit()
cur.close()
conn.close()