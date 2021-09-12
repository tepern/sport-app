export class Area {
    constructor(
		id: bigint,
		name: string
	) {}
} 

export class Season {
    constructor (
		id: bigint,
		startDate: Date,
		endDate: Date,
		currentMatchDay: bigint
	) {}	
}

export class Competitions {
    constructor(
	    public id: bigint,
	    public area: Area,
	    public name: string,
	    public code: string,
	    public plan: string,
	    public currentSeason: Season,
	    public seasons: Season[],
	    public lastUpdated: Date
	) {}    
}
