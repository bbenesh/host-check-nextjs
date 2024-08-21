#!/bin/sh
cd /app
#yarn dev

npm run start

exit 0;

if [ $LAGOON_ENVIRONMENT_TYPE == "production" ]; then
	cd /app
	#yarn preview
	npm run start
else
	cd /app

	#yarn dev
	npm run start
fi