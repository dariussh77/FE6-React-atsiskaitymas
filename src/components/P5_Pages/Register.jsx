const Register = () => {
    return ( 
        <main>
            <h2>Prisiregistruokite</h2>
            <form >
                <div>
                    <label htmlFor="user">Vartotojo vardas:</label>
                    <input 
                        type="email" 
                        name="user" id="user"
                        placeholder="pavyzdys@pavyzdys.com" 
                    />
                </div>
                <div>
                    <label htmlFor="password">Slaptažodis:</label>
                    <input 
                        type="password" 
                        name="password" id="password"
                    />
                </div>
                <div>
                    <label htmlFor="repassword">Pakartoti slaptažodį:</label>
                    <input 
                        type="password" 
                        name="repassword" id="repassword"
                    />
                </div>
                <input type="submit" value='Registruotis' />
            </form>
        </main>
     );
}
 
export default Register;