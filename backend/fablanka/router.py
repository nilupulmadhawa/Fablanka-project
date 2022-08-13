# from news.viewsets import NewsViewSet
from rest_framework import routers
from pastevent.viewsets import PastEventViewSet
from projectmakandura.viewsets import ProjectMakanduraViewSet
from newspage.viewsets import NewsPageViewSet


router = routers.DefaultRouter()

router.register('newspage', NewsPageViewSet)
router.register('pastevent', PastEventViewSet)
router.register('projectmakandura', ProjectMakanduraViewSet)