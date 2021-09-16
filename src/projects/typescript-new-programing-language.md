---
title: Typescript New Programming Language
tags: ["Node", "Typescript"]
slug: ts-new-program-lang
date: 2021-06-20T00:00:00+00:00
thumb: ../images/thumbs/tsnewlang.png
featuredImg: ../images/featured/tsnewlang.png
short-info: A new programming language based on Typescript with a Lexer, a Parser and an Abstract Syntax Tree
code: https://github.com/magnusglide/typescript-programming-language
web: ""
---

I decided to learn how programming languages work so I have found a tutorial - how to create a programming language.
I wrote the code myself but I wouldn't be able to do that without a good explanation of programming language fundamentals like Lexer Parser, AST from a Youtube tutorial.

&nbsp;

&nbsp;

#### Important features:

<li>if you have made an error - you will see following output in console: what was expected, where it was expected, what actually is there instead</li>
<li>Lexer scans the input and produces the matching tokens</li>
<li>Parser then scans the tokens and produces the parsing result (with errors)</li>
<li>AST - is a tree of tokens made with lexer and proved with parser</li>

&nbsp;

#### Features that I added all by myself:

<li>you can write new executable code in a typescript variable with the name code in the main file or you can write the code in any .txt file in a special folder called code</li>
<li>the output in console shows from where that code was executed</li>
