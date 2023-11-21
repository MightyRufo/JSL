
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>     ____.                                   .__    _________                                
    |    |____    ______ _____ _____    _____|__|  /   _____/ ______________  __ ___________ 
    |    \__  \  /  ___//     \\__  \  /  ___/  |  \_____  \_/ __ \_  __ \  \/ // __ \_  __ \
/\__|    |/ __ \_\___ \|  Y Y  \/ __ \_\___ \|  |  /        \  ___/|  | \/\   /\  ___/|  | \/
\________(____  /____  >__|_|  (____  /____  >__| /_______  /\___  >__|    \_/  \___  >__|   
              \/     \/      \/     \/     \/             \/     \/                 \/       
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
