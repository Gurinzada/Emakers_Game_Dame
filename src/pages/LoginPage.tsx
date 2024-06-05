import { Link, useNavigate } from "react-router-dom"
import ArrowToRigth from "../imgs/Group 18.svg"
import Wizard from "../imgs/image 2.png"
import styles from "../styles/RegisterPage.module.scss"
import { useEffect, useState } from "react"
import usePasswordToggle from "../hooks/usePasswordToggle"
import useErrorInfos from "../hooks/useErrorInfos"
import { User, getAllDatas } from "../services/user"
import { useAuth } from "../context/AuthProvider"

const LoginPage = () => {
    const [infosUser, setInfosUser] = useState<User[]>([])
    const [loginUser, setLoginUser] = useState<string>(``)
    const [passwordUser, setPasswordUser] = useState<string>(``)
    const {showError, setShowError} = useErrorInfos()
    const {type, focusInputPassword, blurPassword} = usePasswordToggle()
    const {login} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        getAllDatas().then((res:any) => setInfosUser(res))
        console.log(infosUser)
    },[])

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
            const find = infosUser?.find((user) => user.Email === loginUser && user.Password === passwordUser)
            if(find){
                login(find)
                navigate(`/home/${find.id}`)
            } else{
                setShowError(true)
                setTimeout(() => {
                    setShowError(false)
                },2000)
            }
            console.log(find)
        
    }

        return(
        <div className={styles.Wrapper}>
            <form className={styles.WrapperForm} style={{display:"flex",gap:"19rem"}} onSubmit={handleSubmit}>
                <div className={styles.ContentInputs}>
                    <div>
                        <h1 className={styles.Title}>Login</h1>
                    </div>
                    <div>
                        <input type="email" placeholder="E-mail" className={styles.Input} value={loginUser} onChange={(e) => setLoginUser(e.target.value)}/>
                    </div>
                    <div>
                        <input type={type} placeholder="Senha" className={styles.Input} onFocus={focusInputPassword} onBlur={blurPassword} value={passwordUser} onChange={(e) => setPasswordUser(e.target.value)}/>
                    </div>
                    <div className={styles.WrapperIconArrow}>
                        <button className={styles.BntSend}><img src={ArrowToRigth} alt="" style={{cursor:"pointer"}}/></button>
                    </div>
                    {showError === true ? <span style={{color:"#ff3434"}}>Informações incorretas!</span> : null}
                </div>
                <div style={{display:"flex",flexDirection:"column", width:"100%", justifyContent:"flex-start"}}>
                    <Link to={"/"} style={{textDecoration:"none"}}>Criar Conta</Link>
                    <Link to={"/recovery"} style={{textDecoration:"none"}}>Esqueceu a Senha</Link>
                </div>
            </form>
            <section className={styles.WrapperWizardImg}>
                <img src={Wizard} alt="" className={styles.WizardImg}/>
            </section>
        </div>
    )
}

export default LoginPage