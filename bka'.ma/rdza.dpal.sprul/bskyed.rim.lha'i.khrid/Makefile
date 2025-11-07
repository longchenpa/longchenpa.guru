
default:
	escript pub tex index.tex
	(xelatex --interaction nonstopmode ladder.to.akanishta.tex; mv -f -v ladder.to.akanishta.pdf index.pdf)

pdf:
	(xelatex ladder.to.akanishta.tex; mv -f -v ladder.to.akanishta.pdf index.pdf)

clean:
	rm -f *.aux
	rm -f *.toc
	rm -f *.haux
	rm -f *.htoc
	rm -f *.log
	rm -f temp.*

