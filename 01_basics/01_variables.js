// let, var and const 

/*
============================== var ==========================
* var is functional scoped and it ignores block-scoped
* In the same scope we can redeclare a variable using 'var'
* Variables declares with 'var' are hoisted  to the top of their scope and initialized with undefined

*/

/* 
============================== let ==========================
* let is blocked-scoped 
* in the same scope we can not redeclare a variable using 'let'
* 'let'  variable are hoisted to the top of their block but are not initialized  until the declaration is encounterd (it entres temporal dead zone)

*/


/* 
============================= const ========================

* const is also blocked-scope
* can not be redeclare a 'const' variable
* variable declared with const can not be reassigned
* like 'let', 'const' variables are hoisted but are not initialized until their declaration 

*/
/*
Scope	           |    Function-scoped	      |   Block-scoped	           | Block-scoped
Redeclaration	   |    Allowed	              |   Not allowed	           | Not allowed
Reassignment	   |    Allowed	              |   Allowed	               | Not allowed
Hoisting	       |    Hoisted, initialized  |   Hoisted, Not initialized | Hoisted, Not initialized
                   |    to undefined	      | 	                       |
Temporal Dead Zone |    No	                  |   Yes	                   | Yes
Mutability	       |    Mutable               |	  Mutable	               | Immutable (but objects/arrays can be modified)


*/