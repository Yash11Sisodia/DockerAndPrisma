Watch to see how to run : https://www.youtube.com/watch?v=L9H-rrAGeUg

1st RUN :
docker-compose build

2nd RUN : 
docker-compose up

*IMP*
3rd RUN 
(Prisma migration needs to be done in interaction shell only so didnt ran it with RUN or CMD): 
docker-compose exec server /bin/sh
npx prisma migrate dev --name init

