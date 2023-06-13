import pandas as pd
import sqlite3


garbage = pd.read_csv("../dados/build_prodution.csv")

conn = sqlite3.connect("../BD/garbage.sqlite")
cur = conn.cursor()

cur.execute("""CREATE TABLE IF NOT EXISTS build_trash 
            (buildingAddress TEXT,
            latitude REAL,
            longitude REAL,
            city TEXT,
            municipality TEXT,
            date TEXT,
            buildingAge INTEGER,
            pricePerM2 REAL,
            numApartments INTEGER,
            populationTotal INTEGER,
            petPolicy TEXT,
            trashGatheringInterval INTEGER,
            trashCollectedInKg INTEGER);""")


for i, row in garbage.iterrows():
    cur.execute("""INSERT INTO build_trash (buildingAddress, latitude, longitude, city, municipality, date, buildingAge, 
                pricePerM2, numApartments, populationTotal, petPolicy, trashGatheringInterval, trashCollectedInKg)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                (row['Building Address'], row['Latitude'], row['Longitude'], row['City'], row['Municipality'],
                 row['Date'], row['Building Age'], row['Price per m2'], row['Number of apartments'],
                 row['Population Total'], row['Pet Policy'], row['Trash gathering interval/Days'],
                 row['Trash collected in kg']))

conn.commit()
cur.close()
conn.close()