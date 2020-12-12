--creating a DB and using the DB
create database social_app;
use social_app;

create table profile_status(user_id INT(100), status varchar(10));
create table user_profile(id INT(100) AUTO_INCREMENT, name VARCHAR(100), age INT(3), gender VARCHAR(10), mobile INT(11), user_name VARCHAR(50), email varchar(100), status VARCHAR(10), mentor_id INT(100),  PRIMARY KEY (id));
create table friends(user_id INT(100), friends_id INT(100));
create table comments(id INT(100) AUTO_INCREMENT, comment_text varchar(100), post_id INT(100), user_id INT(100), PRIMARY KEY (id));
create table likes(id INT(100) AUTO_INCREMENT, post_id INT(100), user_id INT(100), PRIMARY KEY (id));
create table user_login_details(user_id INT(100), email varchar(100), ip VARCHAR(100), user_group VARCHAR(100));
create table posts(id INT(100) AUTO_INCREMENT, user_id INT(100), description_text VARCHAR(1000), PRIMARY KEY (id));
create table profile_status(user_id INT(100), status varchar(20));

-- Insertion
INSERT INTO user_profile (name, age , gender, mobile, user_name, email, status) values("vishal", 26, "male", 1234567890, "vishal5000","vishal@gmail.com","active");
INSERT INTO user_profile (name, age , gender, mobile, user_name, email, status) values("jack", 21, "male", 2345678901, "jack3000", "jack@gmail.com", "active");
INSERT INTO user_profile (name, age , gender, mobile, user_name, email, status) values("jim", 24, "male", 568493029, "jim455", "jim@yahoo.com", "inactive");
INSERT INTO user_profile (name, age , gender, mobile, user_name, email, status) values("sruthi", 29, "female", 341111111, "shru12345", "shru@hotmail.com", "active");
INSERT INTO user_profile (name, age , gender, mobile, user_name, email, status) values("alvin", 23, "male", 232342344, "alvin1000", "alvin@gmail.com", "active");
INSERT INTO user_profile (name, age , gender, mobile, user_name, email, status) values("meera", 24, "female",34234234, "meerameeru", "meera@hotmail.com", "active");

INSERT INTO user_login_details(user_id, email, ip, user_group) values (1,"vishal@gmail.com", "192.168.10.1", "common");
INSERT INTO user_login_details(user_id, email, ip, user_group) values (2,"jack@gmail.com", "182.168.100.5", "common");
INSERT INTO user_login_details(user_id, email, ip, user_group) values (5,"alvin@gmail.com", "134,157.1.1", "common");
INSERT INTO user_login_details(user_id, email, ip, user_group) values (6,"meera@hotmail", "123.100.1.1", "featured");
INSERT INTO user_login_details(user_id, email, ip, user_group) values (4,"shru@hotmail", "177.100.1.1", "common");

INSERT INTO profile_status values(1, "active");
INSERT INTO profile_status values(2, "active");
INSERT INTO profile_status values(3, "inactive");
INSERT INTO profile_status values(4, "active");
INSERT INTO profile_status values(5, "active");
INSERT INTO profile_status values(6, "active");

INSERT INTO friends values(1,2);
INSERT INTO friends values(1,6);
INSERT INTO friends values(2,6);
INSERT INTO friends values(2,1);
INSERT INTO friends values(3,4);
INSERT INTO friends values(4,3);
INSERT INTO friends values(5,6);
INSERT INTO friends values(6,5);
INSERT INTO friends values(6,1);
INSERT INTO friends values(6,2);

INSERT INTO posts (user_id , description_text) values(1, "its a very nice day !!");
INSERT INTO posts (user_id , description_text) values(2, "Every obstacle is a blessing in disguise");
INSERT INTO posts (user_id , description_text) values(3, "Ding Dong bell pussy in the well");
INSERT INTO posts (user_id , description_text) values(5, "Vroom Vroom - Benelli");
INSERT INTO posts (user_id , description_text) values(5, "Raaz aankhein teri !!")
INSERT INTO posts (user_id , description_text) values(1, "Happy Birthday Ranjith !!");

INSERT INTO likes (post_id,  user_id) values(1, 2);
INSERT INTO likes (post_id,  user_id) values(2, 1);
INSERT INTO likes (post_id,  user_id) values(3, 4);
INSERT INTO likes (post_id,  user_id) values(4, 6);
INSERT INTO likes (post_id,  user_id) values(5, 6);

INSERT INTO comments (post_id, user_id, comment_text,) values(1, 2, "Great!! Enjoy your day");
INSERT INTO comments (post_id, user_id, comment_text,) values(2, 1, "Nice quote !!");
INSERT INTO comments (post_id, user_id, comment_text,) values(3, 4, "Poor pussy is drowning in the well");
INSERT INTO comments (post_id, user_id, comment_text,) values(4, 6, "Nice bike buddy");
INSERT INTO comments (post_id, user_id, comment_text,) values(5, 6, "lol");

-- Select Query
SELECT * from friends inner join user_profile on friends.user_id = user_profile.id 

SELECT * from posts where user_id = 5

SELECT * from user_login_details where email like '%gmail%' 

SELECT * from comments where user_id=3 limit 5  

SELECT * from profile_status inner join user_profile on profile_status.user_id = user_profile.id inner join user_login_details on user_profile.id = user_login_details.user_id; 

