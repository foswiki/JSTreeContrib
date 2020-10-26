FOSWIKI_ROOT?=~/foswiki/trunk/core
TARGET=style.css 32px.png 40px.png throbber.gif

-include $(FOSWIKI_ROOT)/pub/System/JQueryPlugin/Makefile.include

clean:
	rm $(TARGET) *.gz

ifneq (,$(wildcard ../../git))
style_src.js: ../../git/dist/themes/default/style.css
	cp $^ $@

%: ../../git/dist/themes/default/%
	cp $^ $@
endif
