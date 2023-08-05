import requests
import json

data = {
  'text': 'risc v oral sex',
  'mode': 'standard',
  'lang': 'en',
  'opt_countries': 'us,gb,fr',
  'api_user': '1570624853',
  'api_secret': 'NbAKjjzdMKmfazYKnUjT'
}
r = requests.post('https://api.sightengine.com/1.0/text/check.json', data=data)

output = json.loads(r.text)
explicit_keywords = output['profanity']['matches']
if len(explicit_keywords) > 0 :
  print("Adult Keywords found")
else:
  print("No Adult Keywords")
