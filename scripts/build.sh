cd frontend
npm run build_and_export
cd ..
if [ -d "backend/frontend-build" ]; then rm -Rf "backend/frontend-build"; fi
cp -R frontend/out/. backend/frontend-build/