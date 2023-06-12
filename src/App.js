import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from  './images/alexa.png';
import CortanaImage from  './images/cortana.png';
import SiriImage from './images/siri.png'


function App(){
 
    return(
        <div>

            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>


            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        
                        <div className='column is-4'>
                        <ProfileCard title="Alexa" 
                        handle="@Alexa99" 
                        image={AlexaImage}
                        description="it is amazon assistance"
                        />
                        </div>
                        
                        <div className='column is-4'>
                        <ProfileCard title="Cortana" 
                        handle="@Cortana19" 
                        image={CortanaImage}
                        description="it is microsoft assistance"/>
                        </div>
                        
                        <div className='column is-4'>
                        <ProfileCard title="Siri" handle="@SIRI64" 
                        image={SiriImage}
                        description="it is apple assistance"/>
                        </div>
                    
                    </div>
                </section>
            </div>            
        </div>
    );
}

export default App;