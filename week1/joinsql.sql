select emp.employeeNumber , emp.firstName , emp.lastName , emp.extension ,emp.jobTitle ,
       ofc.city, ofc.addressLine1 , ofc.phone
from classicmodels.employees as emp
inner join classicmodels.offices as ofc
on emp.officeCode =ofc.officeCode


select emp.employeeNumber , emp.firstName , emp.extension , emp.email , emp.jobTitle ,
	    cst.customerNumber , cst.customerName ,cst.contactFirstName , cst.phone
from classicmodels.employees as emp
inner join classicmodels.customers as cst
on emp.employeeNumber =cst.salesRepEmployeeNumber 
order by emp.employeeNumber


select cst.customerNumber , cst.customerName , cst.contactFirstName, cst.phone,
       ord.orderNumber , ord.requiredDate , ord.shippedDate , ord.status 
from classicmodels.customers as cst
left join classicmodels.orders as ord
on cst.customerNumber =ord.customerNumber
where ord.orderNumber is null
order by cst.customerName


SELECT 
        cst.customerNumber, cst.customerName,cst.contactFirstName,cst.phone,
        ord.orderNumber, ord.requiredDate, ord.shippedDate, ord.status ,
        det.productCode , det.quantityOrdered, det.priceEach
    FROM classicmodels.customers as cst inner JOIN 
    classicmodels.orders as ord
    ON cst.customerNumber = ord.customerNumber
    inner join classicmodels.orderdetails as det
    on ord.orderNumber =det.orderNumber
    order by ord.orderNumber


select  emp1.employeeNumber , emp1.firstName , emp1.jobTitle 
, emp2.employeeNumber,emp2.firstName , emp2.jobTitle
from classicmodels.employees as emp1
inner join classicmodels.employees as emp2
on emp1.reportsTo=emp2.employeeNumber
order by emp2.employeeNumber
 