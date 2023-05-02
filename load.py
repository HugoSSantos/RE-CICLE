import pandas as pd
import sqlite3


garbage = pd.read_csv("./dados/trash_prodution.csv")

conn = sqlite3.connect("./garbage.sqlite")
cur = conn.cursor()

cur.execute("""CREATE TABLE IF NOT EXISTS producao_lixo 
            (Building VARCHAR NOT NULL, 
            Population VARCHAR NULL,
            WeeklyProduction FLOAT,
            MonthProduction FLOAT,
            YearProduction FLOAT);""")


for i, row in garbage.iterrows():
    cur.execute("""INSERT INTO producao_lixo (Building, Population, WeeklyProduction, MonthProduction, YearProduction)
                VALUES (?, ?, ?, ?, ?)""",
                (row['Building Address'], row['Population'], row['Weekly Trash Production (kg)'],
                 row['Month Trash Production(kg)'], row['Year Trash Production(kg)']))

conn.commit()
cur.close()
conn.close()
