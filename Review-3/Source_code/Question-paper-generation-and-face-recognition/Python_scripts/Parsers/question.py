import response_getter, json, re
from pymongo import MongoClient
import pymysql as pymysql

client = MongoClient("mongodb+srv://test:<password>@cluster0-1baqs.mongodb.net/test?retryWrites=true&w=majority")

# Enter the DataBase Name
db = client.get_database('mock')

# Enter the Collection Name
records = db.interview


def interview_question(end_point, sub_name):
    response_obj = response_getter.Response()
    site = response_obj.get_content(end_point + "?min=1&max=100")

    for j in (site.find_all("div", {'class': "Q"})):
        db_dict = {}
        db_list = []
        db_list2 = []
        question = j.p.text
        db_dict['Subject'] = sub_name
        try:
            db_dict['Question'] = question.split("- ")[1]
        except:
            pass
        for k in (j.find_all('a')):
            option_list = k.text
            answer = k['class']
            db_list.append(
                option_list.replace("A - ", "").replace("B - ", "").replace("C - ", "").replace("D - ", "").replace(
                    "E - ", "").replace("F - ", ""))
            db_list2.append(answer)
            db_dict['Options'] = db_list
            db_dict['Answer'] = db_list2
        records.insert_one(db_dict)
        print(sub_name)


if __name__ == '__main__':
    root_url = "https://www.tutorialspoint.com"
    url = "https://www.tutorialspoint.com/questions_and_answers.htm"
    response_obj = response_getter.Response()
    site = response_obj.get_content(url)
    parse_data = site.find_all('div', {'class': 'featured-box'})[3]
    for i in parse_data.find_all('li'):
        end_point = root_url + i.a['href']
        sub_name = i.text
        # print(end_point,sub_name)
        interview_question(end_point, sub_name)
