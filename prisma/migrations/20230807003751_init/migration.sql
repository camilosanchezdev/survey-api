-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "survey_answers" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "survey_questions" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "survey_response_answers" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "survey_response_questions" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "survey_responses" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "survey_statuses" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "surveys" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP NOT NULL;
