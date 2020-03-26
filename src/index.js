import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// import '../node_modules/uikit/dist/css/uikit.css';
import './css/style.css';
import './images/background.jpg';

// loads the Icon plugin
UIkit.use(Icons);

if(process.env.NODE_ENV !== 'production'){
    console.log("We're not running in production mode!")
}