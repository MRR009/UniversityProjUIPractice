import { University } from "./university.entity";

export class College{
    collegeId: number = 0;
    collegeCode: String = "";
    collegeName: String = "";
    collegeType: String = "";
    collegeLocation: String = "";
    university: University | undefined;
}