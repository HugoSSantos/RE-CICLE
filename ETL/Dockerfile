FROM python:3.10.7

COPY . /ETL
WORKDIR /ETL
RUN pip install --no-cache-dir -r requirements.txt

COPY executa.sh /etc/executa.sh
COPY crontab /etc/executa.sh

# Dê permissão de execução ao script cron
RUN chmod +w /etc/executa.sh
RUN chmod +w /etc/crontab

RUN crontab /etc/executa.sh

USER root

CMD cron && tail -f /var/log/cron.log