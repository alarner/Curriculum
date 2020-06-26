#!/bin/bash

files=$(ls -r [0-9][0-9][0-9]*)
biggestNumber=$(echo "$files" | tr '\r\n' ' ' | cut -c1-3 | sed 's/^0*//')
nextNumber=$(( biggestNumber + 1 ))
nextNumberWithZeros=$(printf %03d $nextNumber)
nameOfDireectory=$(echo $nextNumberWithZeros-$1)
mkdir $nameOfDireectory