const initialState = 'BQD016DslRSAvus3PdcmDR-m0kTh-SUSxKG_95kq5J-54J6kj7EX_SjSEFFFPchk8dE_WGD97HEZoFfcOHXBHvaVlb4wVrqyqARVmEGZPh_zpg7NJ5K8QMGphAid-vnb7b9T98nGZ6eKnXTx0s7CYcl8Xx-5BYmlhO5fTqIAkET-I-iA\n'

export default function (state= null, action) {
    switch (action.type) {
        case 'PULL_OUT_TOKEN':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}