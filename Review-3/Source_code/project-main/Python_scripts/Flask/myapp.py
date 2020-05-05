from pymongo import MongoClient
from flask import Flask
import json
from random import randrange
import random

app = Flask(__name__)


def Connect():
    client = MongoClient("mongodb+srv://test:test@cluster0-1baqs.mongodb.net/test?retryWrites=true&w=majority")
    # Enter the DataBase Name
    db = client.get_database('mock')
    return db


@app.route("/subject_details", methods=['GET'])
def hello():
    db_connection = Connect()
    result = []
    records = db_connection.interview
    for document in records.find():
        document['_id'] = str(document['_id'])
        result.append(document)
    return json.dumps(str(result), indent=4)


@app.route("/add/<name>", methods=['GET'])
def retrieve_by_name_db(name):
    db_connection = Connect()
    answer_dict = {
        "id": randrange(10),
        "name": name,
        "description": str(name) + " Quiz",
        "questions": []
    }
    count = 0
    for i in db_connection.interview.aggregate([{'$match': {'Subject':name}},{'$sample': {'size': 10}}]):
            try:
                answer_dict['questions'].append({
                    "id": count,
                    "name": i['Question'],
                    "questionTypeId": 1,
                    "options": [
                        {
                            "id": 0,
                            "questionId": count,
                            "name": i['Options'][0],
                            "isAnswer": str(i['Answer'][0]).replace("['", "").replace("']", "")
                        },
                        {
                            "id": 1,
                            "questionId": count,
                            "name": i['Options'][1],
                            "isAnswer": str(i['Answer'][1]).replace("['", "").replace("']", "")
                        },
                        {
                            "id": 2,
                            "questionId": count,
                            "name": i['Options'][2],
                            "isAnswer": str(i['Answer'][2]).replace("['", "").replace("']", "")
                        },
                        {
                            "id": 3,
                            "questionId": count,
                            "name": i['Options'][3],
                            "isAnswer": str(i['Answer'][3]).replace("['", "").replace("']", "")
                        }
                    ],

                    "questionType": {
                        "id": 1,
                        "name": "Multiple Choice",
                        "isActive": "true",
                    }
                })
            except:
                pass
            count = count + 1
    return str(json.dumps(answer_dict))


if __name__ == "__main__":
    app.run(debug=True)
