/*
  Warnings:

  - You are about to drop the column `createdAt` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `survey_answers` table. All the data in the column will be lost.
  - You are about to drop the column `surveyQuestionId` on the `survey_answers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `survey_answers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `survey_questions` table. All the data in the column will be lost.
  - You are about to drop the column `surveyId` on the `survey_questions` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `survey_questions` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `survey_response_answers` table. All the data in the column will be lost.
  - You are about to drop the column `surveyAnswerId` on the `survey_response_answers` table. All the data in the column will be lost.
  - You are about to drop the column `surveyResponseQuestionId` on the `survey_response_answers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `survey_response_answers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `survey_response_questions` table. All the data in the column will be lost.
  - You are about to drop the column `surveyQuestionId` on the `survey_response_questions` table. All the data in the column will be lost.
  - You are about to drop the column `surveyResponseId` on the `survey_response_questions` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `survey_response_questions` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `survey_responses` table. All the data in the column will be lost.
  - You are about to drop the column `surveyId` on the `survey_responses` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `survey_responses` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `survey_statuses` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `survey_statuses` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `surveys` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `surveys` table. All the data in the column will be lost.
  - You are about to drop the column `publicLink` on the `surveys` table. All the data in the column will be lost.
  - You are about to drop the column `surveyStatusId` on the `surveys` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `surveys` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_question_id]` on the table `survey_answers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_id]` on the table `survey_questions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_answer_id]` on the table `survey_response_answers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_response_question_id]` on the table `survey_response_answers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_question_id]` on the table `survey_response_questions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_response_id]` on the table `survey_response_questions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_id]` on the table `survey_responses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customer_id]` on the table `surveys` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[survey_status_id]` on the table `surveys` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `first_name` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_question_id` to the `survey_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `survey_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_id` to the `survey_questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `survey_questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_answer_id` to the `survey_response_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_response_question_id` to the `survey_response_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `survey_response_answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_question_id` to the `survey_response_questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_response_id` to the `survey_response_questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `survey_response_questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_id` to the `survey_responses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `survey_responses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `survey_statuses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_id` to the `surveys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_link` to the `surveys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `survey_status_id` to the `surveys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `surveys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_userId_fkey";

-- DropForeignKey
ALTER TABLE "survey_answers" DROP CONSTRAINT "survey_answers_surveyQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "survey_questions" DROP CONSTRAINT "survey_questions_surveyId_fkey";

-- DropForeignKey
ALTER TABLE "survey_response_answers" DROP CONSTRAINT "survey_response_answers_surveyAnswerId_fkey";

-- DropForeignKey
ALTER TABLE "survey_response_answers" DROP CONSTRAINT "survey_response_answers_surveyResponseQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "survey_response_questions" DROP CONSTRAINT "survey_response_questions_surveyQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "survey_response_questions" DROP CONSTRAINT "survey_response_questions_surveyResponseId_fkey";

-- DropForeignKey
ALTER TABLE "survey_responses" DROP CONSTRAINT "survey_responses_surveyId_fkey";

-- DropForeignKey
ALTER TABLE "surveys" DROP CONSTRAINT "surveys_customerId_fkey";

-- DropForeignKey
ALTER TABLE "surveys" DROP CONSTRAINT "surveys_surveyStatusId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_roleId_fkey";

-- DropIndex
DROP INDEX "customers_userId_key";

-- DropIndex
DROP INDEX "survey_answers_surveyQuestionId_key";

-- DropIndex
DROP INDEX "survey_questions_surveyId_key";

-- DropIndex
DROP INDEX "survey_response_answers_surveyAnswerId_key";

-- DropIndex
DROP INDEX "survey_response_answers_surveyResponseQuestionId_key";

-- DropIndex
DROP INDEX "survey_response_questions_surveyQuestionId_key";

-- DropIndex
DROP INDEX "survey_response_questions_surveyResponseId_key";

-- DropIndex
DROP INDEX "survey_responses_surveyId_key";

-- DropIndex
DROP INDEX "surveys_customerId_key";

-- DropIndex
DROP INDEX "surveys_surveyStatusId_key";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "createdAt",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "survey_answers" DROP COLUMN "createdAt",
DROP COLUMN "surveyQuestionId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "survey_question_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "survey_questions" DROP COLUMN "createdAt",
DROP COLUMN "surveyId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "survey_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "survey_response_answers" DROP COLUMN "createdAt",
DROP COLUMN "surveyAnswerId",
DROP COLUMN "surveyResponseQuestionId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "survey_answer_id" INTEGER NOT NULL,
ADD COLUMN     "survey_response_question_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "survey_response_questions" DROP COLUMN "createdAt",
DROP COLUMN "surveyQuestionId",
DROP COLUMN "surveyResponseId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "survey_question_id" INTEGER NOT NULL,
ADD COLUMN     "survey_response_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "survey_responses" DROP COLUMN "createdAt",
DROP COLUMN "surveyId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "survey_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "survey_statuses" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "surveys" DROP COLUMN "createdAt",
DROP COLUMN "customerId",
DROP COLUMN "publicLink",
DROP COLUMN "surveyStatusId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customer_id" INTEGER NOT NULL,
ADD COLUMN     "public_link" TEXT NOT NULL,
ADD COLUMN     "survey_status_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "roleId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role_id" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customers_user_id_key" ON "customers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "survey_answers_survey_question_id_key" ON "survey_answers"("survey_question_id");

-- CreateIndex
CREATE UNIQUE INDEX "survey_questions_survey_id_key" ON "survey_questions"("survey_id");

-- CreateIndex
CREATE UNIQUE INDEX "survey_response_answers_survey_answer_id_key" ON "survey_response_answers"("survey_answer_id");

-- CreateIndex
CREATE UNIQUE INDEX "survey_response_answers_survey_response_question_id_key" ON "survey_response_answers"("survey_response_question_id");

-- CreateIndex
CREATE UNIQUE INDEX "survey_response_questions_survey_question_id_key" ON "survey_response_questions"("survey_question_id");

-- CreateIndex
CREATE UNIQUE INDEX "survey_response_questions_survey_response_id_key" ON "survey_response_questions"("survey_response_id");

-- CreateIndex
CREATE UNIQUE INDEX "survey_responses_survey_id_key" ON "survey_responses"("survey_id");

-- CreateIndex
CREATE UNIQUE INDEX "surveys_customer_id_key" ON "surveys"("customer_id");

-- CreateIndex
CREATE UNIQUE INDEX "surveys_survey_status_id_key" ON "surveys"("survey_status_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_survey_status_id_fkey" FOREIGN KEY ("survey_status_id") REFERENCES "survey_statuses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_questions" ADD CONSTRAINT "survey_questions_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_answers" ADD CONSTRAINT "survey_answers_survey_question_id_fkey" FOREIGN KEY ("survey_question_id") REFERENCES "survey_questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_responses" ADD CONSTRAINT "survey_responses_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_response_answers" ADD CONSTRAINT "survey_response_answers_survey_answer_id_fkey" FOREIGN KEY ("survey_answer_id") REFERENCES "survey_answers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_response_answers" ADD CONSTRAINT "survey_response_answers_survey_response_question_id_fkey" FOREIGN KEY ("survey_response_question_id") REFERENCES "survey_response_questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_response_questions" ADD CONSTRAINT "survey_response_questions_survey_question_id_fkey" FOREIGN KEY ("survey_question_id") REFERENCES "survey_questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "survey_response_questions" ADD CONSTRAINT "survey_response_questions_survey_response_id_fkey" FOREIGN KEY ("survey_response_id") REFERENCES "survey_responses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
