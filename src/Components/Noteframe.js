export default function Noteframe(){
    return(
        <div className="noteFrame">
            <div class="title-section flex items-center justify-center">
               <input type="text" className="inputTexts" placeholder="Heading..."></input>
            </div>
            <hr className="breakPoints"/>
            <div class="mainContent">
               Main Content
            </div>
            <hr className="breakPoints"/>
            <div class="footer-section flex items-center justify-center">
                Footer Section
            </div>
        </div>
    )
}