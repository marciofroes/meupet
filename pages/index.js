import { useState } from "react"

function Home(){
    return( 
    <div>
        <h2>Home</h2>
            <Contador/>
            <div>
            <h1>5 motivos pelos quais os cães têm queda de pelos</h1>
            <ul>
  <li>Mudanças sazonais</li>
  <li>Estresse</li>
  <li>Problemas de pele</li>
  <li>Doenças</li>
  <li>Idade</li>
</ul>
</div>

            <div id="google-ads">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6586065875216810"
     crossorigin="anonymous"></script>
</div>
    </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador+1);
    }

    return(
    <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
    </div>
    )
}
export default Home