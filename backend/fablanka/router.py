from news.viewsets import NewsViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('news', NewsViewSet)