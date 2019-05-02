FOSWIKI_ROOT?=~/foswiki/trunk/core
TARGET=style.css

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

clean:
	rm $(TARGET) *.gz

ifneq (,$(wildcard ../../git))
style_src.js: ../../git/dist/themes/default-dark/style.css
	cp $^ $@
endif
