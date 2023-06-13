import styles from './Rodape.module.scss'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'

export default function Rodape() {

    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a
                    href='https://www.facebook.com/AluraCursosOnline/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={facebook} alt="Ícone do Facebook" />
                </a>
                <a
                    href='https://twitter.com/aluraonline?lang=en'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={instagram} alt="ìcone do Instagram" />
                </a>
                <a
                    href='https://www.instagram.com/aluraonline/?hl=en'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={twitter} alt="Ícone do Twitter" />
                </a>
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}