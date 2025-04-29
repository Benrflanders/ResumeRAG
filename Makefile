.PHONY: build clean test link unlink publish

## Build the project (compile TypeScript)
build:
	npm run build

## Clean build output
clean:
	rm -rf dist

## Run tests
test:
	npm run test

## Link the package locally for testing CLI
link:
	npm link

## Unlink the package
unlink:
	npm unlink

## Publish to npm
publish: clean build
	npm publish
