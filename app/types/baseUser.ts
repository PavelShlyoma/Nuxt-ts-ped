interface BaseProjects {
    id: number;
    title: string;
    description: string;
    images: Array<string>;
    published: boolean;
    author: string;
    tags: Array<string>;
}

class Portfolio {
    public projects: BaseProjects[];
    constructor() {
        this.projects = [];
    }

    addProject(project: BaseProjects): void {
        this.projects.push(project);
    }

    getTotalProject():number {
        return this.projects.length;
    }

}

interface BaseUser {
    id: number;
    age: number;
    name: string;
    surname: string;
    email: string;
    autor: string;
    specialization: Array<string> | string;
    role: "admin" | "user" | "quest";
}

export class User {
    public readonly id: number;
    public specialization: Array<string> | string;
    public name: string;
    public surname: string;
    public email: string;
    private status: 'active' | 'inactive' | 'banned ';
    public role: "admin" | "user" | "quest";
    public portfolio:Portfolio = new Portfolio();

    constructor({id, name, surname, email,specialization, role = "user"}: BaseUser) {
        this.id = id;
        this.specialization = specialization;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.status = 'active';
    }

    checkStatus(): boolean {
        return this.status === 'active';
    }

    getPortfolio():Portfolio {
        return this.portfolio;
    }

}