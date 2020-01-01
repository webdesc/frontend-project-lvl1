install:
	npm install

start:
	npx babel-node src/bin/even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
