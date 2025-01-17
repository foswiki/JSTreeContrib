FOSWIKI_ROOT?=~/foswiki/trunk/core
TARGET=build/pkg.js
SUBDIRS=themes
PKG_SOURCE=lib/jstree.js src/jstree.init.js

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

clean:
	rm -f build/*

git:
	git clone https://github.com/vakata/jstree.git $@

ifneq (,$(wildcard git))
lib/jstree.js: git/dist/jstree.js
	cp $^ $@
	cd lib && patch < ../jstree.patch
endif

build/pkg.js: $(PKG_SOURCE)
	$(JSMIN) $^ > $@
