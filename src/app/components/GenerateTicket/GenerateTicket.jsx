import Image from "next/image";
import styles from "./GenerateTicket.module.css";

import githubIcon from "../../../../public/githubIcon.svg";
import success from "../../../../public/success.svg";

export default function GenerateTicket() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        gere seu ticket e compartilhe com o mundo
      </h1>
      <h6 className={styles.subtitle}>Digite seu usuário do GitHub</h6>
      <div className={styles.userSuccess}>
        <Image
          className={styles.checkedUser}
          src={success}
          alt=""
          layout="responsive"
        />
        <h6>Ticket gerado com sucesso</h6>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.labelGithubInput} htmlFor="githubUser">
          <Image src={githubIcon} alt="github icon" width={20} height={20} />
        </label>
        <input
          className={styles.inputGithubUser}
          type="text"
          name="githubUser"
          id="githubUser"
          placeholder="Nome de usuário"
        />
      </div>
      <h4 className={styles.checkedFailedUser}>
        Usuário inválido. Verifique e tente novamente.
      </h4>
      <button className={styles.buttonTicket} type="submit">
        Gerar meu ticket
      </button>
    </main>
  );
}
