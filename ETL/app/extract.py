import kaggle
import shutil
import os


def extract_kaggle():
    kaggle.api.authenticate()
    kaggle.api.dataset_download_files("hssantos/fictional-garbage-production", unzip=True)


def extract_local(files):
    for file in files:
        if file.endswith("csv") or file.endswith("xslx") or file.endswith("txt"):
            shutil.move("./build_trash.csv", "../dados/build_trash.csv")


extract_kaggle()
file_list = os.listdir("./")
extract_local(file_list)
