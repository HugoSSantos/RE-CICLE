import kaggle
import shutil


def extract_kaggle():
    kaggle.api.authenticate()
    kaggle.api.dataset_download_files("hssantos/fictional-garbage-production", unzip=True)
    shutil.move("./*.[csv,txt,xlsx]", "../dados/*.[csv,txt,xlsx]")


def extract_local(path, path_date):
    shutil.move(path, path_date)


extract_kaggle()
path = input()
path_date = input()
extract_local(path, path_date)