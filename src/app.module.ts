import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { DatabaseModule } from './database/database.module';
import { UsersModule } from './features/users/users.module';
import { RolesModule } from './features/roles/roles.module';
import { join } from 'path';
import { CustomersModule } from './features/customers/customers.module';
import { SurveysModule } from './features/surveys/surveys.module';
import { SurveyStatusesModule } from './features/survey-statuses/survey-statuses.module';
import { SurveyQuestionsModule } from './features/survey-questions/survey-questions.module';
import { SurveyAnswersModule } from './features/survey-answers/survey-answers.module';
import { SurveyResponsesModule } from './features/survey-responses/survey-responses.module';
import { SurveyResponseQuestionsModule } from './features/survey-response-questions/survey-response-questions.module';
import { SurveyResponseAnswersModule } from './features/survey-response-answers/survey-response-answers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    RolesModule,
    CustomersModule,
    SurveysModule,
    SurveyStatusesModule,
    SurveyQuestionsModule,
    SurveyAnswersModule,
    SurveyResponsesModule,
    SurveyResponseQuestionsModule,
    SurveyResponseAnswersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
