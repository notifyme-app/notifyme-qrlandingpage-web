import './styles/main.scss'
import protobuf from 'protobufjs'
import _sodium from 'libsodium-wrappers';
import qrMessage from './protobuf/qrMessage'

async function libsodium() {
    await _sodium.ready;
    return _sodium;
}
  
const root = protobuf.Root.fromJSON(qrMessage);
const QrMessage = root.lookupType("qrpackage.QrMessage");

let readProtobuf = async () => {
    var urlPayload = window.location.hash.slice(1);
    console.log("URL payload: " + urlPayload);
    var sodium = await libsodium();
    var protobufBytes = sodium.from_base64(urlPayload);
    var qrMessage = QrMessage.decode(protobufBytes);    
    console.log(qrMessage);
    document.getElementById('qrcode-content').innerHTML = "<pre>" + JSON.stringify(qrMessage, null, 2) + "</pre>";
};

let ready = (fn) => {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    readProtobuf();
})

