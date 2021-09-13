import { Area } from './competitions';

export class Squad {
    constructor (
		id: bigint,
		name: string,
		position: string,
		dateOfBirth: Date,
		countryOfBirth: string,
		nationality: string,
		role: string
	) {}	
}
export class Team {
    constructor(
	    public id: bigint,
	    public area: Area,
	    public name: string,
	    public shortName: string,
	    public tla: string,
	    public address: string,
	    public phone: string,
	    public website: string,
	    public email: string,
	    public founded: bigint,
	    public clubColors: string,
	    public venue: any,
	    public squad: Squad[],
	    public lastUpdated: Date
	) {} 
}
