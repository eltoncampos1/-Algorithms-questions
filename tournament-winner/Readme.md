# Vencedor do torneio

Há um torneio de algoritmos em que equipes de programadores competem entre si para resolver problemas algorítmicos o mais rápido possível. As equipes competem em um round-robin, onde cada equipe enfrenta todas as outras equipes. apenas duas equipes competem uma contra a outra ao mesmo tempo, e para cada competição, uma equipe é designada a equipe da casa, enquanto as outras equipes são o time visitante. Em cada competição há sempre um vencedor e um perdedor; não há empates. Uma equipe recebe 3 pontos se vencer e 0 pontos se perder. O vencedor do torneio é a equipe que receber a maior quantidade de pontos.
Dado um array de pares representando as equipes que competiram entre si e um array contendo os resultados de cada competição, escreva uma função que retorne o vencedor do torneio. As matrizes de entrada são denominadas ``"competitions"`` e ``"results"``, respectivamente. A matriz ``"competitions"`` tem elementos na forma de ```[homeTeam, awayTeam]```,
onde cada equipe é uma seqüência de no máximo 30 caracteres que representam o nome da equipe. a área ``"results"`` contém informações sobre o vencedor de cada competição correspondente na matriz ``"competitions"``. Especificamente, os ``results[i]`` denotam o vencedor das ``competitions[i]``,
onde um ``"1"`` na matriz ``"results"`` significa que o time da casa na competição correspondente venceu e um ``"0"`` significa que o time visitante venceu.

É garantido que exatamente uma equipe vencerá o torneio e que cada equipe competirá contra todas as outras equipes apenas uma vez. Também é garantido que o torneio sempre terá pelo menos duas equipes.


exemplo: 

entrada

```js
competitions = [
    ['java', 'c'],
    ['c', 'python'],
    ['python', 'java']
]
results = [0,0,1]
```

saida 

```json
"Python"
```

<br><br>

<hr>

<br><br>

# Tournament Winner

There's an algorithms tournaments taking place in wich teams of programmers compete against each other to solve algorithmic problems as fast possible. Teams compete in a round-robin, where each team faces off against all other teams. only two  teams compete against each other at a time, and for each competition, one team is designated the home team, while the other teams is the away team. In each competitiom there's always ine winner and one loser; there are no ties. A team receiver 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receive the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named ``"competitions"`` and ``"results"``, respectively. The ``"competitions"`` array has elements in the form of ``[homeTeam, awayTeam]``, where each team is a string of at most 30 characters representing the name of the team. the ``"results"`` aray contains information about the winner of each corresponding competition in the ``"competitions"`` array. Specifically, ``results[i]`` denotes winner of ``competitions[i]``, where a  ``"1"`` in the ``"results"``array means that the home team in the corresponding competition won and a "0" means that the away team won.

It's guaranteed that exactly one team will win the tournament and thaat each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least twi teams.

Example:

input

```js
competitions = [
    ['java', 'c'],
    ['c', 'python'],
    ['python', 'java']
]
results = [0,0,1]
```

output 

```json
"Python"
```