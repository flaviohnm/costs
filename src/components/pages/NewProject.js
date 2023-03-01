import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    const navigate = useNavigate()

    function createPost(projetc) {
        // initialize cost and services
        projetc.cost = 0
        projetc.services = []

        fetch('http://localhost:3001/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projetc),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                navigate('/projects',{state:{message:'Projeto criado com sucesso!'}})
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject