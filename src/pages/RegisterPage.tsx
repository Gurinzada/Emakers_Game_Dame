import { Link, useNavigate } from "react-router-dom"
import ArrowToRigth from "../imgs/Group 18.svg"
import Wizard from "../imgs/image 2.png"
import styles from "../styles/RegisterPage.module.scss"
import { useState } from "react"
import { ConfirmCPF, User } from "../services/user"
import { useAuth } from "../context/AuthProvider"
import usePasswordToggle from "../hooks/usePasswordToggle"

const RegisterPage = () => {
    const [userName, setUserName] = useState<string>(``)
    const [userEmail, setUserEmail] = useState<string>(``)
    const [CPF, setCPF] = useState<number>(0)
    const [password, setPassowrd] = useState<string>(``)
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>(``)
    const {login} = useAuth()
    const navigate = useNavigate()
    const {type, focusInputPassword, blurPassword} = usePasswordToggle()

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        const isCpf:boolean = ConfirmCPF(CPF)

        try {
            if(isCpf){
            const newUser:User = {
                UserName: userName,
                Email: userEmail,
                CPF:CPF,
                Password:password
            }

            const response = await fetch(`http://localhost:3000/users`,{
                method:"POST",
                body: JSON.stringify(newUser),
                headers:{
                    "Content-Type": "Application/json"
                }
            })

            const data = await response.json()
            console.log(data)
            login(newUser)
            navigate(`/home/${data.id}`)

        }
        } catch {
            throw new Error(`An error has ocurred`)
        }
        
    }

    return(
        <div className={styles.Wrapper}>
            <form className={styles.WrapperForm} onSubmit={handleSubmit}>
                <div className={styles.ContentInputs}>
                    <div>
                        <h1 className={styles.Title}>Registrar</h1>
                    </div>
                    <div>
                        <input type="text" placeholder="Nome de Usuário"  required className={styles.Input} value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div>
                        <input type="email" placeholder="E-mail" required className={styles.Input} value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                    </div>
                    <div>
                        <input minLength={11} maxLength={11} required placeholder="CPF" className={styles.Input} value={CPF} onChange={(e) => setCPF(Number(e.target.value))}/>
                    </div>
                    <div>
                        <input type={type} placeholder="Senha" className={styles.Input} value={password} onChange={(e) => setPassowrd(e.target.value)} onFocus={focusInputPassword} onBlur={blurPassword}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Confirmar Senha" className={styles.Input} value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                    </div>
                    <div className={styles.WrapperIconArrow}>
                        <button className={styles.BntSend}><img src={ArrowToRigth} alt="" style={{cursor:"pointer"}}/></button>
                    </div>
                </div>
                
                <div className={styles.WrapperLink}>
                    <Link to={"/login"} style={{textDecoration:"none", cursor:"pointer"}}>Fazer Login</Link>
                </div>
            </form>
            <section className={styles.WrapperWizardImg}>
                <img src={Wizard} alt="" className={styles.WizardImg}/>
            </section>
        </div>
    )
}

export default RegisterPage