from pymongo import MongoClient
from flask import Flask
import json

app = Flask(__name__)


def Connect():
    client = MongoClient("mongodb+srv://test:test@cluster0-1baqs.mongodb.net/test?retryWrites=true&w=majority")
    # Enter the DataBase Name
    db = client.get_database('ase_project')
    return db

@app.route("/subject_details", methods=['GET'])
def hello():
    db_connection = Connect()
    result = []
    records = db_connection.inteview
    for document in records.find():
        document['_id'] = str(document['_id'])
        result.append(document)
    return json.dumps(str(result), indent=4)


if __name__ == "__main__":
    app.run()
