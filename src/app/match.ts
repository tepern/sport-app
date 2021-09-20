import { Season } from './competitions';

export class Competition {
	constructor (
        public id: bigint,
        public name: string 
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
        //public venue: string,
        public homeTeam: Teams,
        public awayTeam: Teams,
        public competition: Competition,
        public season: Season,
	) {}

}
