/*
  Warnings:

  - You are about to drop the column `name` on the `survey_response_answers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `survey_response_questions` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `survey_responses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "survey_response_answers" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "survey_response_questions" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "survey_responses" DROP COLUMN "name";
