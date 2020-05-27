import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import {Header, RepositoryInfo, Issues } from './styles'

interface RepositoryParams {
    repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="rocketseat" />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Descrição do repository</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1800</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>1800</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1800</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>
                <Link to={"12"}>
                    <div>
                        <strong>123</strong>
                        <p>123</p>
                    </div>

                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
