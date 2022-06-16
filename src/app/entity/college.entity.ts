import { University } from "./university.entity";

export class College{
    collegeId: number = 0;
    collegeCode: String = "";
    collegeName: String = "";
    collegeType: String = "";
    collegeDescription: String = "";
    collegeImage: String = "";
    collegeLogo: String = "";
    establishedIn: number = 1111;
    university: University | undefined;
    universityCode: String = "";
}