HTMLS := $(patsubst %.tex,%.htm,$(wildcard *.tex))
PDFS := $(patsubst %.tex,%.pdf,$(wildcard *.tex))

default: touch $(HTMLS) $(PDFS)

%.pdf: %.tex
	xelatex --interaction nonstopmode "$<"

touch:
	touch *.tex

%.htm: %.tex
	hevea "$<" -o "$@"
