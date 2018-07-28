import requests

NEWS_API_ENDPOINT = 'https://newsapi.org/v1/'
NEWS_API_KEY = '1ac0dcf940dc46e99aaf537ad0f5a287'
ARTICLES_API = 'articles'

DEFAULT_SOURCES = 'cnn'

SORT_BY_TOP = 'top'

def buildUrl(end_point=NEWS_API_ENDPOINT, api_name=ARTICLES_API):
    '''
    get url
    '''
    return end_point + api_name

def getNewsFromSource(sources=DEFAULT_SOURCES, sort_by=SORT_BY_TOP):
    articles = []

    for source in sources:
        payload = {'apiKey':NEWS_API_KEY,
                   'source':source,
                   'sortBy':sort_by}

        response = requests.get(buildUrl(), params=payload)
        res_json = loads(response.context)

        # Extract info from response
        if (res_json is not None and
            res_json['status'] == 'ok' and
            res_json['source'] is not None):

            # populate news source in each articles
            for news in res_json['articles']:
                news['source'] = res_json['source']

            articles.extend(res_json['articles'])

    return articles
