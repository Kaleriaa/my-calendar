import { Header, Calendar, Settings } from '@widgets'
import { Container } from './styled'
import { Modal } from '@widgets/modal'

export const App = () => {
    return (
        <Container>
            <Modal />
            <Header />
            <Calendar />
            <Settings />
        </Container>
    )
}
