from django.shortcuts import render
import requests
from rest_framework import generics
from django.conf import settings
from .serializers import FacebookSerializer
from rest_framework.response import Response
from rest_framework import status


class CurrentUserView(generics.GenericAPIView):

    serializer_class = FacebookSerializer

    def get(self, request):
        access_token = 'EAAhTBZBKjZAOkBAEjZAjwggP20SrOVfeZB9uM7nljoEAx9WCfwRgYjkxzlkZAJyHZAjm62F8qj4mE3Dxk4ZBqAZBBudC6s11hyFoZBB0iBJCTxwCP1isJBxV7Vvjr6nSYPY7Y5WfFRaw76Js3dhcnV0TN7hQZAqhPz0v15E7w92WgssVqDOMoZAk6s2'
        parameters = {'access_token': access_token}
        page_url = 'https://graph.facebook.com/%d?fields=name,about,location' % settings.PAGE_ID
        r = requests.get(page_url, params=parameters)
        return Response(r.json())
    
    def post(self, request):
        access_token = 'EAAhTBZBKjZAOkBAEjZAjwggP20SrOVfeZB9uM7nljoEAx9WCfwRgYjkxzlkZAJyHZAjm62F8qj4mE3Dxk4ZBqAZBBudC6s11hyFoZBB0iBJCTxwCP1isJBxV7Vvjr6nSYPY7Y5WfFRaw76Js3dhcnV0TN7hQZAqhPz0v15E7w92WgssVqDOMoZAk6s2'
        parameters = {'access_token': access_token}
        page_url = 'https://graph.facebook.com/%d?about=%s' % (
            settings.PAGE_ID, request.data['about'])
        r = requests.post(page_url, params=parameters)
        return Response(r.json())
