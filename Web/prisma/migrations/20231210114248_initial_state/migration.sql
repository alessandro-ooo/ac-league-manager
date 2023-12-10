/*
  Warnings:

  - The primary key for the `servercfg` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `servercfg` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`field`);
