FROM python:3.10.7
WORKDIR /app

ADD ./app /app

COPY ./requirements.txt /etc

RUN pip install -r /etc/requirements.txt

EXPOSE 8080

CMD ["python", "extract.py"]