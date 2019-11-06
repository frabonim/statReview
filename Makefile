## ********************************************************************* ##
## Copyright 2016                                                        ##
## David Farmer, Greg Hartman, Alex Jordan, Carly Vollet                 ##
##                                                                       ##
## This file is part of APEX Calculus                                    ##
##                                                                       ##
## ********************************************************************* ##

#######################
# DO NOT EDIT THIS FILE
#######################

#   1) Make a copy of Makefile.paths.original
#      as Makefile.paths, which git will ignore.
#   2) Edit Makefile.paths to provide full paths to the root folders 
#      of your local clones of the project repository and the mathbook
#      repository as described below.
#   3) The files Makefile and Makefile.paths.original
#      are managed by git revision control and any edits you make to 
#      these will conflict. You should only be editing Makefile.paths.

##############
# Introduction
##############

# This is not a "true" makefile, since it does not
# operate on dependencies.  It is more of a shell
# script, sharing common configurations

######################
# System Prerequisites
######################

#   install         (system tool to make directories)
#   xsltproc        (xml/xsl text processor)
#   xmllint         (only to check source against DTD)
#   <helpers>       (PDF viewer, web browser, pager, Sage executable, etc)

#####
# Use
#####

#	A) Navigate to the location of this file
#	B) At command line:  make <some-target-from-the-options-below>

# The included file contains customized versions
# of locations of the principal components of this
# project and names of various helper executables
include Makefile.paths

# These paths are subdirectories of
# the project distribution
PRJSRC    = $(PRJ)/src
OUTPUT    = $(PRJ)/output
STYLE     = $(PRJ)/style
IMGSRC    = $(PRJ)/images

# The project's main hub file
MAINFILE  = $(PRJSRC)/index.ptx

# The project's styling files
CSS       = $(STYLE)/css/custom.css

# These paths are subdirectories of
# the Mathbook XML distribution
# MBUSR is where extension files get copied
# so relative paths work properly
MBXSL = $(MB)/xsl
MBUSR = $(MB)/user
DTD   = $(MB)/schema/dtd

# These paths are subdirectories of
# the scratch directory
PGOUT      = $(OUTPUT)/pg
HTMLOUT    = $(OUTPUT)/html
PDFOUT     = $(OUTPUT)/pdf
IMAGESOUT  = $(OUTPUT)/images


#  HTML output 
#  Output lands in the subdirectory:  $(HTMLOUT)
html:
	install -d $(HTMLOUT)
	-rm $(HTMLOUT)/*.html
	-rm $(HTMLOUT)/knowl/*.html
	cp -a $(IMGSRC) $(HTMLOUT)
	cp -a $(IMAGESOUT) $(HTMLOUT)
	cd $(HTMLOUT); \
	xsltproc -xinclude --stringparam exercise.divisional.answer 'no' --stringparam exercise.divisional.solution 'no' --stringparam html.knowl.exercise.inline no --stringparam numbering.maximum.level "0" --stringparam numbering.theorems.level '0' --stringparam numbering.projects.level "0" --stringparam numbering.footnotes.level "0" --stringparam numbering.equations.level "0" --stringparam html.knowl.example no $(MBXSL)/mathbook-html.xsl $(MAINFILE)
	chmod -R go+rX *


# make all the image files in svg format
images:
	install -d $(IMAGESOUT)
	-rm $(IMAGESOUT)/*.svg
	$(MB)/script/mbx -c latex-image -f svg -d $(IMAGESOUT) $(MAINFILE)
#	$(MB)/script/mbx -c sageplot -f svg -d $(IMAGESOUT) $(MAINFILE)
#	$(MB)/script/mbx -c asy -f svg -d $(IMAGESOUT) $(MAINFILE)

# make all the image files in pdf format
# only need to run this if you have sageplot imsages
# anything that's pgfplot will be made when compiling with xelatex
pdfimages:
	install -d $(IMAGESOUT)
	-rm $(IMAGESOUT)/*.pdf
	$(MB)/script/mbx -c sageplot -f pdf -d $(IMAGESOUT) $(MAINFILE)


# LaTeX for print
# see prerequisite just above
# the "webwork-tex" directory must be given here
# [note trailing slash (subject to change)]
latex:
	install -d $(PDFOUT)
	-rm $(PDFOUT)/*.tex
	cd $(PDFOUT); \
	xsltproc -xinclude --stringparam webwork.server.latex $(PDFOUT)/webwork-tex/ --stringparam exercise.divisional.hint no --stringparam exercise.divisional.solution no --stringparam exercise.divisional.answer no $(MBXSL)/latex/pretext-latex-chaos_mine.xsl $(MAINFILE); \

#MF 
# for some reason, needed to run: sed -i -e 's/\\amp/\&/g' index.tex
# I guess it doesn't replace the \amp properly.
# I've updated mathbook since then, so maybe not anymore?



# PDF for print
# see prerequisite just above
# the "webwork-tex" directory must be given here
# [note trailing slash (subject to change)]
pdf:
	install -d $(PDFOUT)
	install -d $(PDFOUT)/images
	-rm $(PDFOUT)/*.tex
	-cp -a $(IMAGESOUT)/*.pdf $(PDFOUT)/images/
	-cp -a $(IMGSRC)/*.pdf $(PDFOUT)/images/
	cd $(PDFOUT); \
	xsltproc -xinclude --stringparam webwork.server.latex $(PDFOUT)/webwork-tex/ --stringparam exercise.divisional.hint no --stringparam exercise.divisional.solution no --stringparam exercise.divisional.answer no $(MBXSL)/latex/pretext-latex-chaos_mine.xsl $(MAINFILE); \
	xelatex index.tex; \
	xelatex index.tex

###########
# Utilities
###########

# Verify Source integrity
#   Leaves "dtderrors.txt" in OUTPUT
#   can then grep on, e.g.
#     "element XXX:"
#     "does not follow"
#     "Element XXXX content does not follow"
#     "No declaration for"
#   Automatically invokes the "less" pager, could configure as $(PAGER)
check:
	install -d $(OUTPUT)
	-rm $(OUTPUT)/dtderrors.*
	-xmllint --xinclude --postvalid --noout --dtdvalid $(DTD)/mathbook.dtd $(MAINFILE) 2> $(OUTPUT)/dtderrors.txt
	less $(OUTPUT)/dtderrors.txt