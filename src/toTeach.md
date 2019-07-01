SVG Morph
Page Transitions
Scroll Animation

css Transform - it trans form an element

<!-- https://www.w3schools.com/cssref/css3_pr_transform.asp -->

take image / SVG and transform it

select id and : use

id.{
transform : translate X or Y
can be + or -
with no x or y
transform : translate(x,y)
}

next

id.{
transform : scale x ir y()
float bumbers make bigger or smaller
transform : scale(x,y )
}

id{
transform : rotateX()
deg
explain x and Y and Z

Z is clockwize or anti clock + and -
}
transform-origin: 20% 40%;

can chain all together

// Transitions
Simple way to animate transition state in a set Time

hover is good way

Add over to element make is switch quick with no Transitions
origonal gets Transitions prop

Transitions propers
.id{
transition all 1s
}

you can target Transitions

.id{
transition background 1s
}

delay
.id{
transition background (time)(delay),
}

timing fuctions easy ease

<!-- https://cubic-bezier.com -->
<!-- https://www.w3schools.com/cssref/css3_pr_transition.asp -->

KeyFramse

@keyframse NAME{
from{
TRANSFORM:TRANSLATEX()0
}
to{
TRANSFORM:TRANSLATEX(500)

}

FILL MODE
}

REPEATING

AIRECTION
TIMING FUNCTIONS
CHAIN
