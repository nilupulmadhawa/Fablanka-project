from news.viewsets import NewsViewSet
from rest_framework import routers
from pastevent.viewsets import PastEventViewSet
from projectmakandura.viewsets import ProjectMakanduraViewSet

router = routers.DefaultRouter()

router.register('news', NewsViewSet)
router.register('pastevent', PastEventViewSet)
router.register('projectmakandura', ProjectMakanduraViewSet)