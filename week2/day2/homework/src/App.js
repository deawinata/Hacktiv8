import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <header className="App-header">
                <div className='row-header'>
                    <p style={{fontSize: 20, fontWeight: 'bold', marginRight: '5vw'}}>QTemu</p>
                    <p style={{fontWeight: '400', marginRight: '5vw'}}>Create Meetup</p>
                    <p style={{fontWeight: '400'}}>Explore</p>
                </div>
                <div>
                    <p>Login</p>
                </div>
            </header>
            <div className='container-row'
                 style={{margin: 20, backgroundColor: 'rgba(245,183,177, 0.5)', padding: 20, borderRadius: 10}}>
                <img src={logo} className="App-logo" alt="logo"/>
                <div className={'container-column'}>
                    <div className={'container-row'} style={{flex: 1}}>
                        <p style={{fontWeight: 'bold', fontSize: 20}}>Hacktiv8 Meetup</p>
                    </div>
                    <div className={'container-row'}>
                        <div style={{display: "flex", flex: 1}}>
                            <p style={{fontWeight: '500'}}>Location</p>
                        </div>
                        <div style={{display: "flex", flex: 6}}>
                            <p style={{fontWeight: '500'}}>Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className={'container-row'}>
                        <div style={{display: "flex", flex: 1}}>
                            <p style={{fontWeight: '500'}}>Members</p>
                        </div>
                        <div style={{display: "flex", flex: 6}}>
                            <p style={{fontWeight: '500'}}>1.078</p>
                        </div>
                    </div>
                    <div className={'container-row'}>
                        <div style={{display: "flex", flex: 1}}>
                            <p style={{fontWeight: '500'}}>Organizer</p>
                        </div>
                        <div style={{display: "flex", flex: 6}}>
                            <p style={{fontWeight: '500'}}>Adhy Wiranata</p>
                        </div>
                    </div>
                    <div className={'container-row'} style={{paddingTop: 20, paddingBottom: 20}}>
                        <button style={{
                            backgroundColor: "skyblue",
                            border: 0,
                            borderRadius: 20,
                            padding: 10,
                            width: 150,
                            fontSize: 15,
                            color: 'white',
                            fontWeight: '500'
                        }}>Join Us
                        </button>
                    </div>
                </div>
            </div>

            <p style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Next Meetup</p>

            <div className='container-column'
                 style={{margin: 20, backgroundColor: 'rgba(245,183,177, 0.5)', borderRadius: 10}}>
                <p style={{fontWeight: 'bold', marginBottom: 0}}>Awesome meetup and event</p>
                <p style={{color: '#CACFD2'}}>25 January 2019</p>
                <p>Hello, JavaScript & Node.js Ninjas!<br/>Get ready for our monthly meetup JakartaJS! This will be our
                    fifth meetup of 2018!<br/>The meetup formal will contain some short stories and technical
                    talks.<br/>If you have a short announcement you'd like to share with the audience, you may do so
                    during open mic announcements.<br/><br/>Remember to bring a photo ID to get through building
                    security.<br/><br/>--------------------------------------<br/><br/>See you there!<br/><br/>Best
                    regards,<br/>Hengki, Giovanni, Sofian, Riza, Agung, The JakartaJS Organizers</p>
            </div>

            <p style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>About Meetup</p>
            <p style={{margin: 20, fontWeight: '500', fontSize: 15}}>Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area.<br/>Twitter @JakartaJS and we use the #jakartajs hashtag.</p>

            <p style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Members</p>

            <div className='container-row'
                 style={{margin: 20, backgroundColor: 'rgba(245,183,177, 0.5)', padding: 20, borderRadius: 10}}>
                <img
                    src={require('./asset/images/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded.jpg')}
                    style={{width: '7%', borderRadius: 999}} alt={'Profile photo'}/>
                <div className={'container-column'}>
                    <p style={{fontWeight: 'bold', fontSize: 18, marginBottom: 0}}>Organizers</p>
                    <p style={{fontWeight: '500'}}>Adhy Wiranata & 4 others</p>
                </div>
            </div>

            <p style={{margin: 20, fontWeight: 'bold', fontSize: 20}}>Past Meetups</p>

            <div className={'container-row'} style={{margin: 20}}>
                <div className={'container-column'} style={{flex:1, backgroundColor: 'rgba(245,183,177, 0.5)', padding: 20, borderRadius: 10, marginRight: 20}}>
                    <p style={{fontWeight: 'bold', fontSize: 18, marginBottom: 0}}>27 November 2017<br/><br/>#39 JakartaJS April Meetup with Kumparan</p>
                    <p>139 went</p>
                    <button style={{
                        backgroundColor: "skyblue",
                        border: 0,
                        borderRadius: 20,
                        padding: 10,
                        width: 150,
                        fontSize: 15,
                        color: 'white',
                        fontWeight: '500'
                    }}>View
                    </button>
                </div>
                <div className={'container-column'} style={{flex:1, backgroundColor: 'rgba(245,183,177, 0.5)', padding: 20, borderRadius: 10, marginRight: 20}}>
                    <p style={{fontWeight: 'bold', fontSize: 18, marginBottom: 0}}>27 October 2017<br/><br/>#38 JakartaJS April Meetup with Blibli</p>
                    <p>113 went</p>
                    <button style={{
                        backgroundColor: "skyblue",
                        border: 0,
                        borderRadius: 20,
                        padding: 10,
                        width: 150,
                        fontSize: 15,
                        color: 'white',
                        fontWeight: '500'
                    }}>View
                    </button>
                </div>
                <div className={'container-column'} style={{flex:1, backgroundColor: 'rgba(245,183,177, 0.5)', padding: 20, borderRadius: 10, marginRight: 20}}>
                    <p style={{fontWeight: 'bold', fontSize: 18, marginBottom: 0}}>27 September 2017<br/><br/>#37 JakartaJS April Meetup with Hacktiv8</p>
                    <p>110 went</p>
                    <button style={{
                        backgroundColor: "skyblue",
                        border: 0,
                        borderRadius: 20,
                        padding: 10,
                        width: 150,
                        fontSize: 15,
                        color: 'white',
                        fontWeight: '500'
                    }}>View
                    </button>
                </div>
            </div>

        </div>
    );
}

export default App;
