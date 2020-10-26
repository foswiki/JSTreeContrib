FOSWIKI_ROOT?=~/foswiki/trunk/core
TARGET=pkg.js
SUBDIRS=themes
PKG_SOURCE=jstree.uncompressed.js jstree.init.uncompressed.js

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

clean:
	rm $(TARGET) *.gz

git:
	git clone https://github.com/vakata/jstree.git $@

ifneq (,$(wildcard git))
jstree.uncompressed.js: git/dist/jstree.js
	cp $^ $@
	patch < jstree.patch
endif

pkg.uncompressed.js: $(PKG_SOURCE)
	cat $^ > $@
