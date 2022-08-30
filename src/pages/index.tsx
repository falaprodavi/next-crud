import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Davi', 41, '2'),
    new Cliente('Silmara', 34, '3'),
    new Cliente('Pedro', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  return (
    <div className="
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500 text-white
    ">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
        clienteSelecionado={clienteSelecionado}
        />
      </Layout>
    </div>
  )
}
