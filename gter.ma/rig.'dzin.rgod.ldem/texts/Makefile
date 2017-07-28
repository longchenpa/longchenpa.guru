HTMLS := $(patsubst %.tex,%.htm,$(wildcard *.tex))

default: touch $(HTMLS)

touch:
	touch *.tex

%.htm: %.tex
	hevea "$<" -o "$@"
