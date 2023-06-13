import pandas as pd
import os


garbage = pd.read_csv("../dados/build_trash.csv")
uf = {'Sao_Paulo': 'SP', 'Recife': 'RE'}
garbage["City"] = garbage["City"].map(uf)

print(garbage.head(3))

garbage.to_csv("../dados/build_prodution.csv")
os.remove('../dados/build_trash.csv')
