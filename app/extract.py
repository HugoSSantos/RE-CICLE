import kaggle
import shutil


kaggle.api.authenticate()

kaggle.api.dataset_download_files("hssantos/fictional-garbage-production", unzip=True)

shutil.move("./trash_prodution.csv", "../dados/trash_prodution.csv")
