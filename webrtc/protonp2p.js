let peer = null;
let connectedPeer = null;

const localPeerId = URL.createObjectURL(new Blob([])).substr(-36);

document.getElementById('local-id').textContent = localPeerId;


function start() {
    peer = new Peer(localPeerId);
    
    peer.on('connection', conn => {
        conn.on('data', data => {
            console.log('[DATA]: ' + JSON.stringify(data));
        });

        conn.on('open', () => {
            console.log('[DEBUG]: `open` called by  `'+ conn.id +'`');
        });
    });
}

function connectTo(peerId) {
    connectedPeer = peer.connect(peerId);
}

function send(data) {
    connectedPeer.send(data);
}

start();