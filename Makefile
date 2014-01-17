BIN=node_modules/.bin/
COGS=$(BIN)cogs
WATCHY=$(BIN)watchy

all:
	$(COGS) -C cogs-server
	$(MAKE) -j cogs-client cogs-server server

cogs-client:
	$(COGS) -w client,styles,shared -C cogs-client

cogs-server:
	$(COGS) -w server,shared -C cogs-server

server:
	$(WATCHY) -w build -W 1 -- node build/node_modules/app.js

.PHONY: server
