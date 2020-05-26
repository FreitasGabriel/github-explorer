import React from 'react';
import {FiChevronRight} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
        <img src={logoImg} alt="Github Explorer" />
        <Title>Explore repositórios Github</Title>;
        <Form>

            <input placeholder="Digite o nome do repositório"></input>
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="">
                <img src="https://avatars3.githubusercontent.com/u/28397982?s=460&u=3daaf2e710a3941680519a410aea3531288ef22a&v=4" alt="Gabriel Freitas"/>
                <div>
                    <strong>FreitasGabriel/desafio_06</strong>
                    <p>Descrição do meu repositório</p>
                </div>

                <FiChevronRight size={20} />
            </a>

            <a href="">
                <img src="https://avatars3.githubusercontent.com/u/28397982?s=460&u=3daaf2e710a3941680519a410aea3531288ef22a&v=4" alt="Gabriel Freitas"/>
                <div>
                    <strong>FreitasGabriel/desafio_06</strong>
                    <p>Descrição do meu repositório</p>
                </div>

                <FiChevronRight size={20} />
            </a>

            <a href="">
                <img src="https://avatars3.githubusercontent.com/u/28397982?s=460&u=3daaf2e710a3941680519a410aea3531288ef22a&v=4" alt="Gabriel Freitas"/>
                <div>
                    <strong>FreitasGabriel/desafio_06</strong>
                    <p>Descrição do meu repositório</p>
                </div>

                <FiChevronRight size={20} />
            </a>
        </Repositories>
    </>
  )
};

export default Dashboard;
