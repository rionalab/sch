/*
  Warnings:

  - The values [EmployeeNonEdu,Student,Admin,HR] on the enum `RoleAction_name` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `roleaction` MODIFY `name` ENUM('Superadmin', 'Administrator', 'Chairman', 'ManagerSchool', 'Principal', 'Teacher', 'ManagerFinance', 'StaffFinance', 'ManagerMarketing', 'StaffMarketing', 'ManagerGeneralAffair', 'StaffGeneralAffair', 'ModulPurchasing', 'ManagerPurchasing', 'StaffPurchasing', 'ModulHumanResource', 'ManagerHRD', 'StaffHRD', 'ManagerIT', 'StaffIT', 'Parent') NOT NULL;
