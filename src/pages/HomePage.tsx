import { useEffect, useState } from "react"
import { User, getDataById } from "../services/user"
import { useParams } from "react-router-dom"
import heroImg from "../imgs/image 3.png"
import game1 from "../imgs/Rectangle 23.png"
import game2 from "../imgs/Rectangle 24.png"
import game3 from "../imgs/Rectangle 25.png"
import game4 from "../imgs/Rectangle 26.png"
import Cart from "../imgs/Group 20.svg"

const HomePage = () => {
    const [infosUser, setInfosUser] = useState<User | null>(null)
    const {UserID} = useParams()

    useEffect(() => {
        getDataById(UserID).then((res:User) => setInfosUser(res))
    },[])

    return(
        <div>
            <header>
                <div>
                    <img src={heroImg} alt="" />
                </div>
                <nav>
                    <span>Lançamentos |</span>
                    <span>Populares |</span>
                    <span>Gêneros |</span>
                    <span>Promoções |</span>
                    <span>Conta</span>
                </nav>
                <div>
                    <input type="search" />
                </div>
            </header>
            <main>
                <section>
                    <h1>Olá, {`<<${infosUser?.UserName}>>`}</h1>
                    <div>
                        <p>Seu email é {`${infosUser?.Email}`}</p>
                        <p>Seu CPF é {`${infosUser?.CPF}`}</p>
                    </div>
                    <div>
                        <button>Alterar Dados</button>
                        <button>Excluir Conta</button>
                        <button>Tela do admin</button>
                    </div>
                </section>
                <section>
                    <h3>Jogos adquiridos:</h3>
                    <div>
                        <div>
                            <img src={game1} alt="" />
                            <p>100/100</p>
                        </div>
                        <div>
                            <img src={game2} alt="" />
                            <p>95/100</p>
                        </div>
                        <div>
                            <img src={game3} alt="" />
                            <p>75/100</p>
                        </div>
                        <div>
                            <img src={game4} alt="" />
                            <p>Adicionar avaliação</p>
                        </div>
                    </div>
                    <div>
                        <img src={Cart} alt="" />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HomePage