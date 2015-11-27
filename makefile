install:
	cp -n settings-dist.json settings.json

run:
	meteor --settings settings.json

test:
	meteor --test
