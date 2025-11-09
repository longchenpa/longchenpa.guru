
default:
	escript pub tex index.tex
	(xelatex --interaction nonstopmode ladder.to.akanishta.tex; mv -f -v ladder.to.akanishta.pdf ../bskyed.rim.lha\'i.khrid.pdf)

pdf:
	(xelatex ladder.to.akanishta.tex; mv -f -v ../bskyed.rim.lha\'i.khrid.pdf)

clean:
	rm -f *.aux
	rm -f *.toc
	rm -f *.haux
	rm -f *.htoc
	rm -f *.log
	rm -f temp.*

