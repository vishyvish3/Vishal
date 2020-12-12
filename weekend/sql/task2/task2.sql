create database guvi_zen_class;
use guvi_zen_class;

--create tables
create table mentors(id INT(100) AUTO_INCREMENT, name varchar(100), email varchar(100), PRIMARY KEY (id));
create table student_activated_courses(course_id integer, user_id integer);
create table courses(id INT(100) AUTO_INCREMENT, name varchar(100), description varchar(100), price INT(100), PRIMARY KEY (id));
create table users(id INT(100) AUTO_INCREMENT, name VARCHAR(100), age INT(3), gender VARCHAR(10), mobile INT(11), user_name VARCHAR(50), email varchar(100), status VARCHAR(10), mentor_id INT(100), PRIMARY KEY (id));
create table codekata(quesion_id INT(100), user_id INT(100), testcase varchar(100));
create table attendance(user_id integer, date VARCHAR(20), attendance VARCHAR(10));
create table topics(id INT(100) AUTO_INCREMENT, user_id INT(100), name varchar(100), PRIMARY KEY (id));
create table task_details(id INT(100) AUTO_INCREMENT, topic_id INT(100), details varchar(100), document_link VARCHAR(1000), PRIMARY KEY (id));
create table task_submission(task_id INT(100), user_id INT(100));
create table company_drives(company_id INT(100), name varchar(100), user_id integer, result varchar(100));

--insertion data
INSERT INTO mentors (name, email) values("jim", "jim@gmail.com");
INSERT INTO mentors (name, email) values("jack", "jack@gmail.com");
INSERT INTO mentors (name, email) values("dakota", "dakota@gmail.com");
INSERT INTO mentors (name, email) values("smith", "smith@gmail.com");
INSERT INTO mentors (name, email) values("kingsley", "kingsley@gmail.com");

INSERT INTO courses (name, description, price) values("Python", "Learn python in 60 days....", 3000);
INSERT INTO courses (name, description, price) values("Django", "Learn python web framework", 2000);
INSERT INTO courses (name, description, price) values("MERN Stack", "Become a full stack developer in 3 months", 15000);
INSERT INTO courses (name, description, price) values("MS Excel", "Become an excel Guru !!", 1000);
INSERT INTO courses (name, description, price) values("Magento", "The next gen ecommerce platform", 5000);

INSERT INTO users (name, age , gender, mobile, user_name, email, status, mentor_id) values("vishal", 26, "male", 1234567890, "vishal5000","vishal@gmail.com","active", 4);
INSERT INTO users (name, age , gender, mobile, user_name, email, status, mentor_id) values("jack", 21, "male", 2345678901, "jack3000", "jack@gmail.com", "active", 1);
INSERT INTO users (name, age , gender, mobile, user_name, email, status , mentor_id) values("jim", 24, "male", 568493029, "jim455", "jim@yahoo.com", "inactive", 3);
INSERT INTO users (name, age , gender, mobile, user_name, email, status, mentor_id) values("sruthi", 29, "female", 341111111, "shru12345", "shru@hotmail.com", "active", 2);
INSERT INTO users(name, age , gender, mobile, user_name, email, status, mentor_id) values("alvin", 23, "male", 232342344, "alvin1000", "alvin@gmail.com", "active", 1);
INSERT INTO users (name, age , gender, mobile, user_name, email, status, mentor_id) values("meera", 24, "female",34234234, "meerameeru", "meera@hotmail.com", "active", NULL);

INSERT INTO codekata (quesion_id, user_id,  testcase) values (100, 1, "pass");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (100, 4, "fail");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (63, 2, "pass");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (63, 3, "pass");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (63, 4, "pass");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (22, 6, "pass");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (22, 1, "pass");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (22, 4, "pass");
INSERT INTO codekata (quesion_id, user_id,  testcase) values (2, 5, "pass");

INSERT INTO company_drives values(1, "SpaceX", 1, "selected");
INSERT INTO company_drives values(1, "SpaceX", 2, "rejected");
INSERT INTO company_drives values(1, "SpaceX", 3, "selected");
INSERT INTO company_drives values(1, "SpaceX", 5, "rejected");
INSERT INTO company_drives values(2, "Tesla", 4, "selected");
INSERT INTO company_drives values(2, "Tesla", 6, "selected");
INSERT INTO company_drives values(2, "Tesla", 5, "selected");

INSERT INTO student_activated_courses values(1, 1);
INSERT INTO student_activated_courses values(1, 2);
INSERT INTO student_activated_courses values(1, 3);
INSERT INTO student_activated_courses values(1, 4);
INSERT INTO student_activated_courses values(2, 4);
INSERT INTO student_activated_courses values(2, 6);
INSERT INTO student_activated_courses values(3, 2);
INSERT INTO student_activated_courses values(3, 3);
INSERT INTO student_activated_courses values(4, 4);
INSERT INTO student_activated_courses values(5, 1);
INSERT INTO student_activated_courses values(1, 1);

INSERT INTO task_details (topic_id, details, document_link) values(1, "implement weather api", "http://www.cs.ucl.ac.uk/fileadmin/UCL-CS/students/projects/msc_cs/MScProjects2016.pdf");
INSERT INTO task_details (topic_id, details, document_link) values(2, "pet shop", "http://www.cs.ucl.ac.uk/fileadmin/UCL-CS/students/projects/msc_cs/MScProjects2016.pdf");
INSERT INTO task_details (topic_id, details, document_link) values(3, "Implelemnt binary search tree", "http://www.cs.ucl.ac.uk/fileadmin/UCL-CS/students/projects/msc_cs/MScProjects2016.pdf");
INSERT INTO task_details (topic_id, details, document_link) values(4, "Implelemnt 5 lodash functions", "http://www.cs.ucl.ac.uk/fileadmin/UCL-CS/students/projects/msc_cs/MScProjects2016.pdf");
INSERT INTO task_details (topic_id, details, document_link) values(5, "Design a pet shop with the given mockup", "http://www.cs.ucl.ac.uk/fileadmin/UCL-CS/students/projects/msc_cs/MScProjects2016.pdf");
INSERT INTO task_details (topic_id, details, document_link) values(6, "Enchance the aesthetics of the petshop task", "http://www.cs.ucl.ac.uk/fileadmin/UCL-CS/students/projects/msc_cs/MScProjects2016.pdf");

INSERT INTO task_submission values (1, 1);
INSERT INTO task_submission values (1, 2);
INSERT INTO task_submission values (1, 3);
INSERT INTO task_submission values (1, 4);
INSERT INTO task_submission values (1, 5);
INSERT INTO task_submission values (2, 1);
INSERT INTO task_submission values (2, 2);
INSERT INTO task_submission values (2, 3);
INSERT INTO task_submission values (2, 4);
INSERT INTO task_submission values (2, 5);
INSERT INTO task_submission values (3, 1);
INSERT INTO task_submission values (3, 2);
INSERT INTO task_submission values (3, 3);
INSERT INTO task_submission values (3, 4);
INSERT INTO task_submission values (5, 5);
INSERT INTO task_submission values (4, 1);
INSERT INTO task_submission values (4, 2);
INSERT INTO task_submission values (4, 4);
INSERT INTO task_submission values (4, 5);
INSERT INTO task_submission values (5, 2);
INSERT INTO task_submission values (5, 4);
INSERT INTO task_submission values (5, 5);


INSERT INTO attendance values (1, '4/10/2020', 'present');
INSERT INTO attendance values (2, '4/10/2020', 'present');
INSERT INTO attendance values (3, '4/10/2020', 'present');
INSERT INTO attendance values (4, '4/10/2020', 'present');
INSERT INTO attendance values (5, '4/10/2020', 'present');
INSERT INTO attendance values (1, '11/10/2020', 'present');
INSERT INTO attendance values (2, '11/10/2020', 'present');
INSERT INTO attendance values (3, '11/10/2020', 'absent');
INSERT INTO attendance values (4, '11/10/2020', 'present');
INSERT INTO attendance values (5, '11/10/2020', 'present');
INSERT INTO attendance values (1, '18/10/2020', 'absent');
INSERT INTO attendance values (2, '18/10/2020', 'present');
INSERT INTO attendance values (3, '18/10/2020', 'present');
INSERT INTO attendance values (4, '18/10/2020', 'present');
INSERT INTO attendance values (5, '18/10/2020', 'absent');
INSERT INTO attendance values (1, '25/10/2020', 'present');
INSERT INTO attendance values (2, '25/10/2020', 'absent');
INSERT INTO attendance values (3, '25/10/2020', 'present');
INSERT INTO attendance values (4, '25/10/2020', 'absent');
INSERT INTO attendance values (5, '25/10/2020', 'present');


--select queries
SELECT user_id, COUNT(*) AS problems_solved FROM codekata
WHERE testcase = "pass"
GROUP BY user_id

SELECT user_id, COUNT(*) AS number_of_companies_attended FROM company_drives
GROUP BY user_id 

SELECT * from student_activated_courses  inner join courses on student_activated_courses.course_id = courses.id group by courses.id; 

SELECT name from mentors 

SELECT count(*) AS no_of_students FROM  users
WHERE mentor_id is NOT NULL