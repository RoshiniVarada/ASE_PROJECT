import response_getter, json
from pymongo import MongoClient

client = MongoClient("mongodb+srv://test:test@cluster0-1baqs.mongodb.net/test?retryWrites=true&w=majority")

# Enter the DataBase Name
db = client.get_database('ase_project')

# Enter the Collection Name
records = db.inteview


def interview_question(end_point, sub_name):
    response_obj = response_getter.Response()
    site = response_obj.get_content(end_point)
    dd = dict()
    for i in site.find_all('section', {'class': 'toggle'}):
        ss = {
            "Subject": sub_name,
            "question": i.label.text
        }
        print(records.insert_one(ss))


if __name__ == '__main__':
    root_url = "https://www.tutorialspoint.com"
    url = "https://www.tutorialspoint.com/questions_and_answers.htm"
    response_obj = response_getter.Response()
    site = response_obj.get_content(url)
    parse_data = site.find_all('div', {'class': 'featured-box'})[0]
    for i in parse_data.find_all('li'):
        end_point = root_url + i.a['href']
        sub_name = i.text
        interview_question(end_point, sub_name)
