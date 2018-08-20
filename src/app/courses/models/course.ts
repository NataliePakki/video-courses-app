import { CourseInterface } from './course.model';

export class Course implements CourseInterface {
    id: number;
    title: string;
    author: string;
    creationDate: string;
    duration: Number;
    description: string;
    topRated: boolean;

    constructor(id: number, title: string, author: string, description: string, duration?: Number, creationDate?: string, topRated: boolean = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.duration = duration;
        this.creationDate = creationDate;
        this.topRated = topRated;
    }
}