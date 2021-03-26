import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { Main } from '../styles/pages/Home';

export default function Home() {
  return (
    <Main>
      <Header/>

      <div className="TitleBox">
        <Title>
          Procure notícias, matérias e artigos semelhantes ao que você recebeu para verificar se o conteúdo é verdadeiro
        </Title>
      </div>

      <div className="ButtonArea">
        <Input/>
        <Button yellow>
        </Button>
      </div>
    </Main>
  )
}
