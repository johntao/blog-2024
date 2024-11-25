---
title: 'Evaluate notes via relations (pt1)'
description: 'Discuss the basic concept of page and block, and a thorough list to cover all possible relations that a page or block could form in LogSeq'
pubDate: 'Nov 25 2024'
tags: ["logseq", "km"]
---

Let's talk about page and blocks in [LogSeq (i.e. outliner note-taking app)](https://logseq.com).  


The basic concept of page and blocks:
1. A page may contains multiple blocks.
2. A page may mention another page either in metadata or in the blocks (i.e. block content).
3. A block may mention another page or block either in metadata or in the content
4. It is possible to declare hierarchical page relations.
5. Is is possible to declare hierarchical block relations (i.e. indent to create nested structure).

Infer a list of first degree relation based on previous concepts:
1. Block-to-Block Relation
	1. Block A is lineal related to Block B
	2. Block A mentions Block B in meta
	3. Block A mentions Block B in content
2. Block-to-Page Relation
	1. Block A is lineal related to Page A (i.e. Page A contains Block A)
	2. Block A mentions Page A in meta
	3. Block A mentions Page A in content
3. Page-to-Page Relation 1st degree
	1. Page A is lineal related to Page B
	2. Page A mention Page B in meta
	3. Page A mention Page B in content

Infer a list of second degree relation based on first degree relation:
1. Block A is related to PageAny && PageAny is related to Page B
	>&nbsp;\> Block A is related to Page B
1. Block A is related to BlockAny && BlockAny is related to Page B
	>&nbsp;\> Block A is related to Page B
2. Block A is related to PageAny && PageAny is related to Block B
	>&nbsp;\>  Block A is related to Block B
3. Block A is related to BlockAny && BlockAny is related to Block B
	>&nbsp;\>  Block A is related to Block B
4. Page A is related to PageAny && PageAny is related to Page B
	>&nbsp;\>  Page A is related to Page B
5. Page A is related to BlockAny && BlockAny is related to Page B
	>&nbsp;\>  Page A is related to Page B
6. Page A is related to PageAny && PageAny is related to Block B
	>&nbsp;\>  Page A is related to Block B
7. Page A is related to BlockAny && BlockAny is related to Block B
	>&nbsp;\>  Page A is related to Block B

### Future Work

1. Implement all the relations using advanced queries in LogSeq
2. Define weight on each type of relations
3. Make a metrics to evaluate pages with given criteria
