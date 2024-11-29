function SeuNome ({setNome}) {
    return (
        <div> 
            <h3>Digite seu nome</h3>
            <input type='text' placeholder='Digite seu nome:' onChange={(e) => setNome(e.target.value)}></input>

        </div>
    )
}

export default SeuNome ;