###StudMuffins Pickem

10 Players, 17 Weeks, 1 team per week, no repeats.  Best record wins.

##Players
Connor
Emyr
Manasseh
Fabian
Jordan
Joe
James
Trevor
Carl
Marcus

##Schema
#Players
name
password
picks (weeks 1 - 17)
score

##External API 
ESPN? For NFL Schedule and game results

mongoimport --jsonArray --db pickem --collection players --file database-mongo/playerData.json