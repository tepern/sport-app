export class Competition {
	constructor (
        id: bigint,
        name: string 
	) {}
}

export class Teams {
	constructor (
        public id: bigint,
        public name: string 
	) {}
}

export class Match {
    constructor (
        public id: bigint,
        //venue: string,
        public homeTeam: Teams,
        public awayTeam: Teams,
        //competition: Competition
	) {}

}
