1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :   
getElementById : It finds a element in DOM by its Id. Returns a single element and        
Syntax is : document.getElementById('íd-name')
getElementsByClassName : It find elements in DOM by className. Returns a html collection,
which is  an array like object.
Syntax is : document.getElementsByClassName('class-name')
querySelector : It finds the element in DOM by CSS selector. And returns only the first 
element that matches the CSS selector.
Syntax is : document.querySelector('.call-btn')
querySelectorAll : It also find elements in DOM by CSS selector but returns all the matches          elements as a node list.
Syntax is : document.querySelectorAll('.call-btn)

2.How do you create and insert a new element into the DOM?      
Ans : I will create a new element by using document.createElement(). Inside this parenthesis you have to write the html element name.
I will set contain into the new element by using innerText or innerHTML.
And lastly I will insert the new element into the DOM using method appendChild().

3.What is Event Bubbling and how does it work?
Ans : When an event happens in an element, first it runs from the document to the target element which is known as capturing phase, then it runs again to the upward direction reaches any event listener on its way to the parent until it reaches to the document again. This upward phase is known as bubble phase. This total phase is known as event bubbling.

4.What is Event Delegation? Why is it useful?
Ans : Event delegation is a process to add event listener to the parent element instead of adding  event listener to many child elements. This process use event bubbling to catch every child events of that parent element.
This process is useful because-
a) This process helps to add event to all the new elements of that parent element.
b) It reduces the pain of adding single event to every child elements.
c) It makes the code cleaner and easier to manage.
d) This process also reduces memory usage and improve the responsiveness of the page.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans : The preventDefault() method stops the default action of an element. Example: prevent a <form> from auto reload the page.
The stopPropagation() method used to stop an event from bubbling up or capturing down in DOM tree. It prevents the event from propagating to its parent elements. 
