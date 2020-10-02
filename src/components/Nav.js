import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';


const NavStyles = styled.nav`
    margin-bottom: 3rem;
    .logo {
        transform: translateY(-25%);
    }
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr auto 1fr 1fr 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        text-align: center;
        list-style: none;
        margin-top: -6rem;
    }
    li {
        --rotate: -2deg;
        transform: rotate(var(--rotate));
        order: 1;
        &:nth-child(1) {
            --rotate: 1deg;
        }
        &:nth-child(2) {
            --rotate: -2.5deg;
        }
        &:nth-child(3) {
            --rotate: -2.5deg;
        }
        &:nth-child(4) {
            --rotate: -2.5deg;
        }
        &:nth-child(6) {
            --rotate: 5deg;
        }
        &:nth-child(7) {
            --rotate: 5deg;
        }
        &:nth-child(8) {
            --rotate: 5deg;
        }
        &:hover {
            --rotate: 3deg;
        }
    }
    a {
        font-size: 1.8rem;
        text-decoration: none;
        &:hover {
            color: var(--red);
        }
    }
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
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
                    <Link to={'/'}>
                        <Logo />
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
            </ul>
        </NavStyles>
    );
}