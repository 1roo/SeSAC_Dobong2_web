show databases;

#############################[DDL]#############################
-- 데이터 정의어
-- 테이블이나 관계의 구조를 생성하는데 사용하는 명령어

CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
/*
utf8
utf8mb4: utf8보다 더 많은 문자열 저장 가능(이모지, 특수문자, 다국어 등)
*/

-- 데이터 베이스 사용 선언
USE sesac;

-- 테이블 목록 확인
SHOW TABLES;

-- 데이터베이스 삭제
DROP DATABASE mydatabase;

#############################[테이블 관련 명령어]#############################
/*
CREATE TABLE 테이블이름(
    속성이름1 데이터타입 제약조건,
    속성이름2 데이터타입 제약조건,
);
*/
-- 제약조건
-- NOT NULL: null 허용 X
-- AUTO INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정(중복 허용X, null허용X)
-- DEFAULT: 기본 값 설정
-- UNIQUE: 중복 허용X, null 허용X, 한 테이블에 여러 개 설정 가능

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- 테이블 구조 확인
DESC products;

-- 테이블 삭제
DROP TABLE products;

-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);
ALTER TABLE products MODIFY new_column INT;
ALTER TABLE products DROP new_column;


#############################[DML]#############################
-- 데이터 조작어
-- 데이터 CRUD를 위해 사용하는 SQL문

CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- Create >> INSERT INTO
INSERT INTO user (name, age, address) VALUES ('김민정', 29, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('홍길동', 45, '서울특별시 성동구');
INSERT INTO user (name, age, address) VALUES ('박성철', 32, '서울특별시 강동구');
INSERT INTO user (name, age, address) VALUES ('김수민', 30, '서울특별시 용산구');
INSERT INTO user (name, age, address) VALUES ('김정찬', 22, '충청남도 청주시');
INSERT INTO user (name, age, address) VALUES ('황민수', 34, '강원도 영월군');
INSERT INTO user (name, age, address) VALUES ('박영철', 18, '대전광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한민지', 20, '인천광역시 미추홀구');
INSERT INTO user (name, age, address) VALUES ('함수원', 35, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('김인철', 43, '부산광역시 중구');
INSERT INTO user (name, age, address) VALUES ('하유정', 25, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('김준오', 23, '서울특별시 은평구');

-- Read >> SELECT [컬럼이름] FROM [테이블 이름] (WHERE 조건)
SELECT * FROM user; -- 전체 컬럼 전체 조회

SELECT name FROM user; -- 특정 컬럼 전체 조회
SELECT age, name FROM user; -- 특정 컬럼들 전체 조회

-- where절을 이용해서 조건 걸기
SELECT * FROM user WHERE age >= 25; -- 이상 비교
SELECT * FROM user WHERE id = 3; -- 일치 비교
SELECT id, age FROM user WHERE name = '김준오'; -- 일치 비교

-- LIKE 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; -- '서울'로 시작하는 주소값
SELECT * FROM user WHERE name LIKE '__동'; -- 이름의 마지막 글자가 '동'인 사람
SELECT * FROM user WHERE name LIKE '%민%'; -- 이름에 '민'이 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역시%'; -- 광역시 주소인 사람들

-- IN(list)
SELECT * FROM user WHERE age IN(20, 21, 22, 23); -- 나이가 20, 21, 22, 23 중 하나

-- BETWEEN a AND b (a와 b는 포함)
SELECT * FROM user WHERE age BETWEEN 20 AND 23; -- 나이가 20 이상 ~23 이하 중 하나

INSERT INTO user(name, age) VALUES ('홍수현', 28);

-- IS NULL, IS NOT NULL
SELECT * FROM user WHERE address IS NULL; -- 주소가 null인 사람 조회
SELECT * FROM user WHERE address IS NOT NULL; -- 주소가 null이 아닌 사람 조회

-- 논리 연산자
-- 주소가 null이 아니면서, age가 25 초과인 전체 속성
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;

-- 김씨이고, 나이가 30인 사람
SELECT * FROM user WHERE name LIKE '김_' AND age = 30;

-- 서울에 살거나 박씨인 사람
SELECT * FROM user WHERE address LIKE '서울%' OR name LIKE '최_';

-- order by, distinct, limit
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순 정렬
SELECT * FROM user WHERE id > 6 ORDER BY age ASC; -- id가 6 이후인 사람들 age 기준으로 오름차순 정렬

-- distinct
SELECT DISTINCT age FROM user ORDER BY age ASC;

-- 서울시에 사는 사람의 이름만, 2개만
SELECT name, address FROM user WHERE address LIKE '서울%' ORDER BY name ASC LIMIT 2;

-- 실습1
CREATE DATABASE useDobong DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE useDobong;
CREATE TABLE member (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(3) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2)
);

-- 실습2
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP age;
ALTER TABLE member ADD interest VARCHAR(100);

-- 실습3
CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

-- 실습4
INSERT INTO user VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

-- 실습5
SELECT * FROM user ORDER BY birthday ASC;
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;
SELECT id, name from user WHERE birthday LIKE '1990%';
SELECT * from user WHERE birthday LIKE '_____06' ORDER BY birthday ASC;
SELECT * from user WHERE gender = 'M' AND birthday BETWEEN '1970-01-01' AND '1979-12-31';
SELECT * from user ORDER BY age DESC LIMIT 3;
SELECT * from user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';

-- update >> UPDATE 테이블명 SET 컬럼명 = '바꿀 데이터' WHERE 조건
UPDATE user SET address = "서울특별시 도봉구" WHERE id = 14;

select * from user;
UPDATE user SET address = "제주특별자치도 제주시", name = "김김김" WHERE id = 14;

-- delete >> DELETE FROM 테이블명 WHERE 조건
DELETE FROM user WHERE id = 15;
DELETE FROM user WHERE age > 30;


CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL DEFAULT '홍길동',
    hobby VARCHAR(20)
);
DESC student;
SELECT * FROM student;
INSERT INTO student(hobby) VALUES('등산');
INSERT INTO student(hobby, name) VALUES('등산', '박상우');



-- GROUP BY와 HAVING
DROP TABLE IF EXISTS user; -- user테이블이 존재한다면 삭제
SHOW TABLES;
CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구', '야구', '클라이밍', '배드민턴') NOT NULL,
    gender ENUM('남', '여') NOT NULL,
    career_year INT NOT NULL
);
DESC user;
INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남', 15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여', 10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남', 1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여', 2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남', 24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여', 11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여', 3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남', 9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여', 17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남', 11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남', 21);
SELECT * from user;

-- 집계함수 사용해보기
-- COUNT, SUM, AVG, MIN, MAX
SELECT COUNT(specialize) FROM user WHERE specialize = '축구'; -- specialize가 축구인 튜플 개수
SELECT SUM(career_year) FROM user WHERE specialize = '축구'; -- 축구 선수의 경력 합
SELECT AVG(career_year) FROM user WHERE specialize = '축구'; -- 축구 선수의 경력 평균
SELECT MIN(career_year) FROM user WHERE specialize = '축구'; -- 축구 선수 중 경력이 가장 적은 사람
SELECT MAX(career_year) FROM user WHERE specialize = '축구'; -- 축구 선수 중 경력이 가장 오래된 사람


-- GROUP BY (같은 그룹끼리 묶어서 조회)
SELECT specialize from user GROUP BY specialize;
SELECT specialize, COUNT(specialize) from user GROUP BY specialize;

-- HAVING >> GROUP화 된 테이블에 조건을 다는 것
SELECT specialize, COUNT(specialize) FROM user WHERE gender='여' GROUP BY specialize HAVING COUNT(specialize) >= 2;



#############################[DCL]#############################
DESC mysql.user;
SELECT * FROM mysql.user;

CREATE USER 'user2'@'localhost' IDENTIFIED BY '1234';

SHOW GRANTS FOR 'user2'@'localhost'; -- 권한이 없는 상태
DROP USER 'user2'@'localhost';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql'; -- mysql root 비밀번호 바꾸기