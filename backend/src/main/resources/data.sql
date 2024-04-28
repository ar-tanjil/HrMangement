insert into department (id, department_name, department_desc, deleted, active)
values ( 1, "Administration" , "Administration Department", 0, 1);


insert into department (id, department_name, department_desc,  deleted, active)
values ( 2, "Finance And Accounts" , "Finance And Accounts Department", 0 , 1);

insert into department (id, department_name, department_desc,  deleted, active)
values ( 3, "Marketing" , "Marketing Department" , 0 ,1);

insert into department (id, department_name, department_desc,  deleted, active)
values ( 4, "Salas" , "Sales Department" , 0 , 1);

insert into department (id , department_name, department_desc,  deleted, active)
values ( 5, "IT" , "IT Department" , 0 , 1);

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (1, 1, "CEO", 2, 2, 180000, 80000 , 0 , 1 );

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (2, 1, "CHRO", 2, 2, 80000, 50000 , 0 ,1);


insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (3, 1, "Manager", 2, 2, 50000, 30000 , 0 , 1);

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (4, 1, "Interns", 2, 2, 20000, 15000 , 0 ,1);

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (5, 2, "CFO", 2, 2, 80000, 50000 , 0 , 1 );

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (6, 2, "Manager", 2, 2, 50000, 30000 , 0 ,1 );

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (7, 2, "Interns", 2, 2, 20000, 15000 , 0 , 1 );

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (8, 3, "Senior Manger", 2, 2, 80000, 50000 , 0 ,1);

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary , deleted, active)
values (9, 3, "Manager", 2, 2, 50000, 30000 , 0 ,1  );

insert into job (id, department_id, job_title, total_post,
 vacancy, max_salary, min_salary ,  deleted, active)
values (10, 4, "Manager", 2, 2, 50000, 30000 , 0 , 1);

insert into employee (id, first_name , last_name, email ,
department_id, job_id , dob, hire_date ,  deleted, active)
values (1, "Ashiqur", "Rahman", "ashiq@gmail.com",
1, 1 , '1997-07-06', '2024-01-01' , 0 , 1);

insert into employee (id, first_name , last_name, email ,
department_id, job_id , dob, hire_date ,  deleted, active)
values (2, "Rafiul", "Abeer", "abeer@gmail.com",
2, 5 , '1997-08-06', '2024-01-01' , 0 , 1);

insert into employee (id, first_name , last_name, email ,
department_id, job_id , dob, hire_date ,  deleted, active)
values (3, "Mahbubur", "Rahamn", "ploin@gmail.com",
2, 6 , '1996-07-06', '2024-01-01' , 0 , 1);

insert into employee (id, first_name , last_name, email ,
department_id, job_id , dob, hire_date ,  deleted, active)
values (4, "Tanvir", "Hosen", "tanvir@gmail.com",
3, 8 , '1995-07-06', '2024-01-01' , 0, 1);

insert into employee (id, first_name , last_name, email ,
department_id, job_id , dob, hire_date ,  deleted, active)
values (5, "Shovo", "Hosen", "shovo@gmail.com",
4, 10 , '1995-07-06', '2024-01-01' , 0 , 1);

insert into salary ( id, employee_id, basic, provident_fund,
medical_allowance, travel_allowance, bonus, loan ,  deleted, active)
values (1, 1, 80000, 10, 10, 10, 2, 10000 , 0 , 1);

insert into salary ( id, employee_id, basic, provident_fund,
medical_allowance, travel_allowance, bonus, loan , deleted, active )
values (2, 2, 60000, 10, 10, 10, 2, 5000 , 0 , 1);

insert into salary ( id, employee_id, basic, provident_fund,
medical_allowance, travel_allowance, bonus, loan , deleted, active)
values (3, 3, 50000, 10, 10, 10, 2, 0 , 0 , 1);

insert into salary ( id, employee_id, basic, provident_fund,
medical_allowance, travel_allowance, bonus, loan , deleted, active)
values (4, 4, 50000, 10, 10, 10, 2, 0 , 0 , 1);

insert into salary ( id, employee_id, basic, provident_fund,
medical_allowance, travel_allowance, bonus, loan , deleted, active)
values (5, 5, 50000, 10, 10, 10, 2, 0 , 0 , 1);


insert into tax (id, min_range, max_range,
percentage, deleted, active)
values ( 1 , 0 , 300000, 0 , 0 , 1);

insert into tax (id, min_range, max_range,
percentage, deleted, active)
values ( 2 , 300001 , 400000, 10 , 0 , 1);

insert into tax (id, min_range, max_range,
percentage, deleted, active)
values ( 3 , 400001 , 500000, 15 , 0 , 1);

insert into tax (id, min_range, max_range,
percentage, deleted, active)
values ( 3 , 500001 , 600000, 20 , 0 , 1);

insert into tax (id, min_range, max_range,
percentage, deleted, active)
values ( 1 , 600001 , 3000000, 25 , 0 , 1);

insert into tax (id, min_range, max_range,
percentage, deleted, active)
values ( 1 , 3000001 , 3000000000, 30 , 0 , 1);