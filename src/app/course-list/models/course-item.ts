import {CourseItemInterface} from './course-item.model';

// TODO: generate id and set creationDate in condtructor
export class CourseItem implements CourseItemInterface {
    id: number;
    title: string;
    author: string;
    creationDate: Date;
    duration: Number;
    description: string;
    topRated: boolean;

    constructor(id: number, title: string, author: string, description: string, duration?: Number, creationDate?: Date, topRated: boolean = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.duration = duration;
        this.creationDate = creationDate;
        this.topRated = topRated;
    }
}
