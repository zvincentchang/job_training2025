SELECT * FROM classicmodels.orders
order by customerNumber desc
-- where customerNumber=363

SELECT * FROM classicmodels.products
order by buyPrice desc
limit 10,5

SELECT * FROM classicmodels.orders
where requiredDate between '2003-01-01' and  '2003-03-31'

SELECT * FROM classicmodels.employees
where lastName like 'b%'

SELECT count(*) FROM classicmodels.employees;

SELECT officecode, count(officecode) FROM classicmodels.employees
group by officecode

SELECT * FROM classicmodels.employees
where officeCode in (1,3,5)

select emp.employeeNumber,emp.firstName,emp.lastName,emp.email,ofc.officeCode,ofc.city
from classicmodels.employees as emp
inner join classicmodels.offices as ofc
on emp.officeCode=ofc.officeCode
where ofc.officeCode in(1,3,5)

select cst.customerNumber , cst.customerName , ord.orderNumber , ord.orderDate 
from classicmodels.customers as cst
inner join classicmodels.orders as ord
on cst.customerNumber=ord.customerNumber
order by cst.customerNumber


select cst.customerNumber , cst.customerName , ord.orderNumber , ord.orderDate ,
       det.productCode,det.priceEach,det.quantityOrdered , pts.productName , pts.productDescription
from classicmodels.customers as cst
inner join classicmodels.orders as ord
on cst.customerNumber=ord.customerNumber
inner join classicmodels.orderdetails as det
on ord.orderNumber=det.orderNumber
inner join classicmodels.products as pts
on det.productCode=pts.productCode
where cst.customerNumber=119


select cst.customerNumber , cst.customerName , ord.orderNumber , ord.orderDate       
from classicmodels.customers as cst
left join classicmodels.orders as ord
on cst.customerNumber=ord.customerNumber
where ord.orderNumber is null


select e1.employeeNumber as BossNumber,e1.firstName as Bossfirstname,e1.lastName as Bosslastname ,
       e2.employeeNumber,e2.firstName,e2.lastName
from classicmodels.employees as e1
inner join classicmodels.employees as e2
on e1.employeeNumber=e2.reportsTo

INSERT INTO classicmodels.employees
(employeeNumber,lastName,firstName,extension,email,officeCode,reportsTo,jobTitle)
VALUES
(1800,'Lin','Patty','0x123','patty@test.com','1',1056,'Sales Rep');



set autocommit=0;

INSERT INTO classicmodels.employees
(employeeNumber,lastName,firstName,extension,email,officeCode,reportsTo,jobTitle)
VALUES
(1804,'Wu','Mary','0x456','mary@test.com','1',1056,'Sales Rep');

-- commit;

 rollback;
-- set autocommit=1;


create view BossAndEmployee
as
select e1.employeeNumber as BossNumber,e1.firstName as Bossfirstname,e1.lastName as Bosslastname ,
       e2.employeeNumber,e2.firstName,e2.lastName
from classicmodels.employees as e1
inner join classicmodels.employees as e2
on e1.employeeNumber=e2.reportsTo



CREATE VIEW `classicmodels`.`bossandemployee` AS
    SELECT 
        `e1`.`employeeNumber` AS `BossNumber`,
        `e1`.`firstName` AS `Bossfirstname`,
        `e1`.`lastName` AS `Bosslastname`,
        `e2`.`employeeNumber` AS `employeeNumber`,
        `e2`.`firstName` AS `firstName`,
        `e2`.`lastName` AS `lastName`
    FROM
        (`classicmodels`.`employees` as `e1`
        JOIN `classicmodels`.`employees` as `e2` ON ((`e1`.`employeeNumber` = `e2`.`reportsTo`)))


select *
from classicmodels.employees
where officeCode in (select officeCode from classicmodels.offices where city='Tokyo')

select * from  classicmodels.orderdetails
where productCode=(SELECT productcode FROM classicmodels.products where productName='2001 Ferrari Enzo');



select * from classicmodels.customers where customernumber in(
   select customernumber from classicmodels.orders where orderNumber in(
         select orderNumber from classicmodels.orderdetails where productCode= 
              (SELECT productcode FROM classicmodels.products where productName='2001 Ferrari Enzo')))



Delimiter //
create procedure CustomerOrderProduct( pname varchar(80))
begin
select * from classicmodels.customers where customernumber in(
   select customernumber from classicmodels.orders where orderNumber in(
         select orderNumber from classicmodels.orderdetails where productCode= 
              (SELECT productcode FROM classicmodels.products where productName=pname)));

end //
Delimiter ;


SELECT sup.sup_id , sup_name , cof_name
 FROM classicmodels.suppliers as sup
 left join  classicmodels.coffees as cof
 on sup.SUP_ID=cof.SUP_ID
 where cof_name is null

select * from classicmodels.Suppliers
where sup_id not in(
  select sup_id from classicmodels.coffees);

