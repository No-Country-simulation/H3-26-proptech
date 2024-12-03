from .serializers import PersonalInfoSerializer
from core.models import Personal_Info
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.


class PersonalInfoList(generics.ListCreateAPIView):
    serializer_class = PersonalInfoSerializer
    queryset = Personal_Info.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class PersonalInfoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PersonalInfoSerializer
    queryset = Personal_Info.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
