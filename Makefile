install:
	docker-compose run nuxt yarn install

pull:
	git pull
	docker-compose run nuxt yarn install

build:
	docker-compose run nuxt yarn build

development:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up

staging:
	docker-compose run nuxt yarn install
	docker-compose run nuxt yarn build
	docker-compose -f docker-compose.yml -f docker-compose.staging.yml up -d --force-recreate
