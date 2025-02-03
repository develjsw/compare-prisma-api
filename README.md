### Prisma ORM과 TypeORM을 비교하기 위한 Repository

#### Prisma ORM에서 선행되야 할 작업
- DB가 이미 생성되어 있다는 가정하에 진행
~~~
$ npm i @prisma/client && npm i -D prisma  # 패키지 설치
$ prisma init # 초기화
$ npx prisma db pull  # 기존 DB 스키마 가져오기 (DB가 존재하는 경우)
$ npx prisma generate  # Prisma Client 생성
~~~