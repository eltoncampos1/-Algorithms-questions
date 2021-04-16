# Encontre o valor mais próximo no BST


Escreva uma função que leve em uma ``Binary Search Tree  (BST)`` e um valor inteiro de destino e retorne o valor mais próximo a esse valor destino contido no BST.

Você pode presumir que haverá apenas um valor mais próximo.


Cada nó `` BST`` tem um inteiro `` value``, um nó filho `` left`` e um nó filho `` right``.
O um nó é considerado um nó `` BST`` válido se e somente se satisfizer a propriedade `` BST``: o `` value`` é estritamente maior do que os valores de cada nó à sua esquerda; seu `` valor`` é menor ou igual aos valores de cada nó à sua direita; e seus nós filhos são nós próprios `` BST`` válidos ou `` None`` / `` null``.


entrada:

```json
tree =  10
       /  \
      5    15
     / \  /  \
    2   5 13  22
   /        \   
  1          14 

target =12   
``` 


saida = 20

<br><br>

<hr>

<br><br>

# Find Closest Value in BST


Write a function that takes in a ``Binary Search Tree (BST)`` and a target integer value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.


Each ``BST`` node has an integer ``value``, a ``left`` child node, and a ``right`` child node. A node is said a valid ``BST`` node if and only if it satisfies the ``BST`` property:is ``value`` is strictly greater than the values of every node to its left;its ``value`` is less than or equal to the values of every node to its right; and its children nodes are either valid ``BST`` nodes themselves or ``None``/``null``.`



input:

```json
tree =  10
       /  \
      5    15
     / \  /  \
    2   5 13  22
   /        \   
  1          14 

target =12   
``` 

output = 20