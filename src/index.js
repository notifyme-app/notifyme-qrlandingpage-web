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
    const urlPayload = window.location.hash.slice(1);
    console.log("URL payload: " + urlPayload);
    const sodium = await libsodium();
    const protobufBytes = sodium.from_base64(urlPayload);
    const qrCode = QRCodeWrapper.decode(protobufBytes);    
    console.log(qrCode);
    const contentProtobufBytes = QRCodeContent.encode(qrCode.content).finish();
    const isSignatureValid = sodium.crypto_sign_verify_detached(qrCode.signature, contentProtobufBytes, qrCode.content.publicKey);
    document.getElementById('qrcode-content').innerHTML = "<pre>" + JSON.stringify(qrCode, null, 2) + "</pre><br><p>Signature valid: " + isSignatureValid + "</p>";
};

let ready = (fn) => {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    const commit = `${GIT_INFO}`;
    if (commit) {
        document.getElementById("revision").textContent = `Commit: ` + commit;
    }    
    readProtobuf();
})

