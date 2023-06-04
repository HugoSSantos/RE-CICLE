#!/bin/bash

saida=$(python3 ./app/extract.py)

if [ "$saida" == "sucesso" ]; then
  saida2=$(python3 ./app/transform.py)
  if [ "$saida2" == "sucesso" ]; then
    python3 load.py
  else
    echo "Falha ao executar o transform.py"
  fi
else
  echo "Falha ao executar o extract.py"
fi