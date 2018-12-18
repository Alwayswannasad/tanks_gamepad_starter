import * as React from 'react';
// import {IKeysCodes, ITeams} from './interfaces';
import './gamepad.css';
import Tank from './tank.model';

// const KEYS_CODES: IKeysCodes = {
//     37: 'LEFT',
//     39: 'RIGHT',
//     38: 'UP',
//     40: 'DOWN',
//     32: 'SPACE'
// };

// const TEAMS: ITeams = {
//     YELLOW: 'YELLOW',
//     GREEN: 'GREEN'
// }

class Gamepad extends React.Component<{}, Tank> {

    public state: Tank = new Tank({
        id: 'none',
        name: 'test_tank',
        hp: 100,
        x: 0,
        y: 0,
        direction: 'DOWN'
    });

    constructor(props: {}) {
        super(props)
    }


    public render() {
        return (
            <div className="gamepadWrap">
                <div className="letsStartText">Let's start</div>
            </div>
        )

    }
}

export default Gamepad;
