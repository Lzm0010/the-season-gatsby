import React from 'react';
import {Link} from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/game'}>
                        Play Game
                    </Link>
                </li>
                <li>
                    <Link to={'/calendar'}>
                        Calendar
                    </Link>
                </li>
                <li>
                    <Link to={'/bets'}>
                        Bets
                    </Link>
                </li>
                <li>
                    <Link to={'/powerRatings'}>
                        Power Ratings
                    </Link>
                </li>
                <li>
                    <Link to={'/news'}>
                        News
                    </Link>
                </li>
                <li>
                    <Link to={'/team'}>
                        Team
                    </Link>
                </li>
                <li>
                    <Link to={'/myPlayer'}>
                        My Player
                    </Link>
                </li>
                <li>
                    <Link to={'/strategy'}>
                        Strategy
                    </Link>
                </li>
                <li>
                    <Link to={'/stats'}>
                        Stats
                    </Link>
                </li>
                <li>
                    <Link to={'/history'}>
                        History
                    </Link>
                </li>
            </ul>
        </nav>
    );
}