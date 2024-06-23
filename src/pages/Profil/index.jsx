import Navbar from "../../composants/Navbar";

function Profil() {
    return (
        <div className="profil-container">
            <Navbar
                   className="profil-container-navbar"
                   element1="accueil"
                   element2="Profil"
                   element3="Réglages"
                   element4="Communauté" />
            <Navbar />
        </div>
    )
}

export default Profil;