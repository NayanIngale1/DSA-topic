/*

NOTES
Introduction to Linked List

-In array we can store all elements of same data type and elements will stored in continuous memory locations, because of that reason In arrays random accessing is possible

-Now coming to Linked List it is not like that, every element in a Linked List is represented using a node, node contains a data type and a pointer to the next node
so because of that in Linked List, random access is not possible


- But we can modify linked list, like adding a node where ever we want, for example Middle, or at the beginning or at the end or at the specific position.

-Because of that linked are flexible, compare to Arrays.
Let's have look at structure of Linked list

-every linked list node contains two elements, once is data part and other is a pointer which points to next node, i.e it will stores address of the next node.

- So Head is a pointer that will always point to the beginning of the linked list and for the last node address part is null, so which indicates that it is the end of the linked list

- we can access the data of any node of a linked list like this head→data or head.data depends on the language the syntax is going to change.so throughout these lectures, we are going to use the head.data to access the node data.


- lets see how to traverse the linked list

curr = head
while(curr!=NULL)
{
   print(curr.data)
   curr=curr.next
}

-Let's look at some of the operations that we can perform on the linked list very effectively which we can't do using arrays effectively.


-Insert a node at the beginning of SLL: -
    
function insertAtBegnining(int value)
{
      Node beg = new Node() // which creates a new node
      beg.data = value // assigning value to the newly created node
      beg.next = head  // new node address is assigned with head address
      head=beg          // head is moved to the beg node
}


2.Insert a node at the ending of DLL :-

function insertAtEnding(int value)
{
     Node end = new Node()// which creates a new node of name end
     end.data = value  // end node data part, I am assigning value
	   curr=head
     while(curr.next!=NULL)//try to move curr pointer to the last node
     {
         curr=curr.next
     }
     curr.next = end// curr node address is assigned with end node address
     end.next=NULL // end address is assigning with null, so that now it becomes last node
}
     
a. on the similar way we can insert any node at the middle and after or before any particular node.

 b.only thing is to play with the nodes.



 **Constructor for node and linked List :-
    (node is an object which we create using class)
    (linked list is an group of objects which we create using nodes)


    when we are creating node at first time we need to store data as this.data 
    so thats why we are assigning it by item ;
    and next pointer should not contain any value because we only creating one element of 
    linked list so initially next pointer is null ;

-->

    class Node {
        constructor(item){
            this.data = item ;    
            this.next = null ;
        }
    }


    now this is linked list class which contruct a new list ,
    first we can assign an empty list so head pointer is initially empty ,
    we are using one more variable which is our choice , in this variable we are storing 
    size of the list , also we are adding some functions on it 
    like addEnd ==> which add item at end
    addStart ==> which add item at start 
    printList ==> which can print the list 
    

    class LinkedList {
        constructor(){
            this.head = null;
            this.size = 0 ;
        }

        isEmpty(){
            return this.size === 0 ? true : false  
            //it compare the size of list and return true if list is empty ;

            // or we can also do by head method like

            return this.head == null ? true : false
            // it compare head with null and return true if list is empty ;
        }

        sizeOfList (){
            return this.size ;           // which retturn size of list 
        }


        addEnd(item){                       //  insert at the end
            var node = new Node(item)

            if(this.head == null){   // cheacking if it is first element in the list or not
              
                this.head = node ;       // if yes then assigning the list head to node
            
            }
            else{
            
                var cur = this.head       // assigning head address to cur variable 

                while(cur.next != null){       // moving cur variable to the last node 
                                              // last node always have their next as null
                    cur = cur.next

                }                
                cur.next = node;          // adding node to last 
            }
            this.size++                  // After adding element incrementing size by one
        
        }


        addStart(item){                  // insert at start or begining
             var node = new Node(item)

            if(this.head == null){   // cheacking if it is first element in the list or not
              
                this.head = node ;       // if yes then assigning the list head to node
            
            }
            else{
            
                node.next = this.head     // assigning the previous head to newly added 
                                           // node's next part 

                this.head = node           // and now assigning the head as new node 

            }

            this.size++                 // After adding element incrementing size by one
        }

        printList(){
            
            var cur = this.head         // assigning the head to cur variable 
            var index = 0 ;             // we are also using index var for printing index 

            while(cur != null){
            
                console.log("data :" , this.data);     // printing the node data one by one
                console.log("index :" , index++) ;    // printing index of node one by one
                
                cur = cur.next          //moving cur pointer one step ahed

            }
        }        
    } 

    you can also add more functions like adding, printing, deleting on your own 

    calling the functions on linked list or performing the insertion task on list ;

    var list = new LinkedList();

    list.addEnd(2);          // 2
    list.addEnd(3);          // 2 3
    list.addEnd(5);          // 2 3 5
    list.addStart(1);        // 1 2 3 5 

    list.printList();      // ==>    1 2 3 5 


*/