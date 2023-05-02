import pandas as pd


garbage = pd.read_csv("./dados/trash_prodution.csv")

garbage['Month Trash Production(kg)'] = garbage['Weekly Trash Production (kg)'] * 4
# garbage.to_csv("./dados/trash_prodution.csv")

garbage['Year Trash Production(kg)'] = garbage['Weekly Trash Production (kg)'] * 52
garbage.drop("Unnamed: 0", axis=1, inplace=True)

print(garbage.head())
# garbage.drop('Unnamed: 0', inplace=True)

