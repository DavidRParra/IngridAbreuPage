

function FooterPage(){
    return(
        <footer className=" flex items-center justify-center p-4 bg-gray-800 text-white z-20">
            <p className="text-sm">
                © {new Date().getFullYear()} Clinica Dental Dra. Ingrid Abreu. Todos los derechos reservados.
            </p>
        </footer>
    );
}

export default FooterPage;