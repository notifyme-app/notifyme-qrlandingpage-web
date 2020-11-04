import './styles/main.scss'
import protobuf from 'protobufjs'
import _sodium from 'libsodium-wrappers';
import qrMessage from './protobuf/qrMessage'

async function libsodium() {
    await _sodium.ready;
    return _sodium;
}
  
const rootQr = protobuf.Root.fromJSON(qrMessage);
const QRCodeContent = rootQr.lookupType("qrpackage.QRCodeContent");
const QRCodeWrapper = rootQr.lookupType("qrpackage.QRCodeWrapper");

let readProtobuf = async () => {
    var urlPayload = window.location.hash.slice(1);
    console.log("URL payload: " + urlPayload);
    var sodium = await libsodium();
    var protobufBytes = sodium.from_base64(urlPayload);
    var qrCode = QRCodeWrapper.decode(protobufBytes);    
    console.log(qrCode);
    document.getElementById('qrcode-content').innerHTML = "<pre>" + JSON.stringify(qrCode, null, 2) + "</pre>";
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

