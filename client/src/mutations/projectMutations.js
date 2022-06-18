import {gql} from '@apollo/client'

const ADD_PROJECT = gql`
    mutation addProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!) {
        addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
            id
            name
            description
            status
            client {
                name
                email
                phone
                id
            }
        }
    }
`

const DELETE_PROJECT = gql`
    mutation deleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }
`

// const UPDATE_PROJECT = gql`
//     mutation updateProject($id: ID!) {
//         updateProject(id: $id) {

//         }
//     }
// `

export {ADD_PROJECT, DELETE_PROJECT}