
import random
import requests
from bs4 import BeautifulSoup
import time
from Global_Constants import MAX_RETRIES, HEADERS, GOOD_STATUS, BAD_STATUS, HEADERS_LIST


class Response:

    def get_user_agent(self):
        '''
        :return: random user agent from headers list
        '''
        num = random.randint(0, len(HEADERS_LIST) - 1)

        return HEADERS_LIST[num]

    def get_content(self,url):
        """
        :param url: page_url
        :return: Beautifulsoup object
        """
        try:
            response = self.get_request(url)
            # check if we got response then parse that response with beautifulsoup
            if response is None:
                return None
            else:
                # print(BeautifulSoup(response.content, 'lxml'))
                return BeautifulSoup(response.content, 'lxml')

        except Exception as e:
            print (e)
            return self.get_content(url)

    def get_request(self, url, proxy=False):
        response = None
        HEADERS["User-Agent"] = self.get_user_agent()
        #PROXY_1 = dict()
        #PROXY_1["http"] = 'http://root:gu5LDMa2YoJAhUeOpIhHd4FB@198.58.111.25:5729/'
        #PROXY_1["https"] = 'https://root:gu5LDMa2YoJAhUeOpIhHd4FB@198.58.111.25:5729/'
        for count in range(MAX_RETRIES):
            try:
                # time.sleep(30)
		#`print "IN"
                req = requests.get(url, headers=HEADERS, timeout=60)

                if req.status_code == GOOD_STATUS:
                    response = req
                    break
                elif req.status_code == BAD_STATUS:
                    print(url)
                    print('blocked attempt, retrying')
                    time.sleep(random.uniform(1.0, 2.0) * count)

                else:
                    print(url)
                    time.sleep(50)
                    print ("got invalid response")
            except Exception as e:
                time.sleep(50)
                print('Exception')
                print(url)
            if response == None:
                print(url)
                print ("blocked")
        return response

